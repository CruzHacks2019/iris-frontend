import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})
export class RelationshipsComponent implements OnInit {

  users: Observable<Face[]>;
  Object = Object;

  constructor(db: AngularFireDatabase) {
    this.users = db.list<Face>('users').valueChanges();
  }

  ngOnInit() {
  }

  send_delete(face) {
    console.log('I\'d delete your face');
  }

  new_face(name, relation, notes, file) {
    console.log(name + relation + notes + file.name);
  }

}

export class Face {
  name: string;
  userData: string;
  additionalMsg: string;
  imgUrls: Map<string, string>;
  msg: string;
}
