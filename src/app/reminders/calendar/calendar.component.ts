import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CalEvent} from '../reminders.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.events) {
      console.log('Sorting events');
      this.events.sort((a, b) => a.epoch - b.epoch);
      console.log(this.events);
    }
  }

  dayFilter(start: Date, end: Date) {
    return val => start.getTime() <= val.epoch && val.epoch < end.getTime();
  }

}
