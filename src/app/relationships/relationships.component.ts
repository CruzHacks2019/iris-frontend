import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})
export class RelationshipsComponent implements OnInit {

  users: Observable<Face[]>;
  userRef: AngularFireList<Face>;
  Object = Object;

  constructor(db: AngularFireDatabase) {
    this.userRef = db.list<Face>('users');
    this.users = this.userRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );
  }

  ngOnInit() {
  }

  send_delete(face) {
    console.log(`deleting ${face.key}`);
    this.userRef.remove(face.key);
  }

  new_face(name, relation, notes, file) {
    console.log(name + relation + notes + file.name); // TODO
  }

}

export class Face {
  name: string;
  userData: string;
  additionalMsg: string;
  imgUrls: Map<string, string>;
  msg: string;
}
