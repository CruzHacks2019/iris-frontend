import {Component, HostListener, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import {Face} from '../relationships/relationships.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  realMeets: Meet[] = [];
  faces: Map<string, Face> = new Map();
  mobile = false;

  constructor(private db: AngularFireDatabase) {
    this.db.list<Meet>('history').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          const a = {key: c.payload.key, ...c.payload.val()};
          console.log(a);
          if (!this.realMeets.includes(a)) {
            this.realMeets.push(a);
          }
          return a;
        })
      )
    ).subscribe();
  }

  ngOnInit() {
    this.db.object<Face>('users').snapshotChanges()
      .subscribe(action => {
        this.faces = new Map(Object.entries(action.payload.val()));
      });
    this.mobile = window.innerWidth < 769;
  }

  meetSort(a, b) {
    return +(b.key.split('|')[0]) - +(a.key.split('|')[0]);
  }

  getFace(face: Meet): Face {
    const person = this.faces.get(face.personId);
    return person ? person : null;
  }

  getTime(face: Meet): string {
    const time = +face.key.split('|')[0];
    const date = new Date(time);
    return date.toLocaleString();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = event.target.innerWidth < 769;
  }
}

export class Meet {
  key: string;
  imgUrls: string;
  personId: string;
}
