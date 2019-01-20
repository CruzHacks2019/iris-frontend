import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  viewIsList = false;
  events: Observable<CalEvent[]>;


  constructor(db: AngularFireDatabase) {
    this.events = db.list<CalEvent>('reminders').valueChanges();
  }

  ngOnInit() {
  }

}

export class CalEvent {
  type: 'appointment' | 'medication';
  name: string;
  epoch: number;
}
