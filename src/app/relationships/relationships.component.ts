import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})
export class RelationshipsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  send_delete(face) {
    console.log('I\'d delete your face');
  }

}
