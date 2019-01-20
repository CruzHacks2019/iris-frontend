import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  viewIsList = false;
  events: CalEvent[];

  testEvents = [{type: 'medication', name: 'Take Pills', epoch: 1548026313422},
    {type: 'appointment', name: 'Doctor\'s Appt',        epoch: 1548026203422}];

  constructor() {
  }

  ngOnInit() {
    // this.events.sort((a, b) => a.epoch - b.epoch);
    this.testEvents.sort((a, b) => a.epoch - b.epoch);
  }

}

export class CalEvent {
  type: 'appointment' | 'medication';
  name: string;
  epoch: number;
}
