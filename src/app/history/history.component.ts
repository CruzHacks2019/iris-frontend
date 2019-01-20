import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map} from 'rxjs/operators';
import {Face} from '../relationships/relationships.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  meets: Observable<Meet[]>;
  meetRef: AngularFireList<Meet>;
  faces: Map<string, Face> = new Map();

  constructor(private db: AngularFireDatabase) {
    this.meetRef = db.list<Meet>('history');
    this.meets = this.meetRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          console.log(c.payload.val());
          return ({key: c.payload.key, ...c.payload.val()});
        })
      )
    );
  }


  ngOnInit() {
    const users = this.db.list<Face>('users').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => {
          this.faces.set(c.payload.key, c.payload.val());
        })
      )
    );
    users.subscribe();
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

}

export class Meet {
  key: string;
  imgUrls: string;
  personId: string;
}
