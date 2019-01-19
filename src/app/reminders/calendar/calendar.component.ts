import {Component, Input, OnInit} from '@angular/core';
import {CalEvent} from '../reminders.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() events: CalEvent[];
  today: Date;
  day1: Date;
  day2: Date;
  day3: Date;
  end: Date;

  constructor() {
    this.today = new Date();
    this.day1 = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    this.day2 = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 1);
    this.day3 = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 2);
    this.end = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 3);
  }

  ngOnInit() {
  }

  dayFilter(start: Date, end: Date) {
    return val => start.getTime() <= val.epoch && val.epoch < end.getTime();
  }

}
