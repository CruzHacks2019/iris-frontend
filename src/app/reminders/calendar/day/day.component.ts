import {Component, Input, OnInit} from '@angular/core';
import {CalEvent} from '../../reminders.component';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day: Date;
  @Input() events: CalEvent[];
  @Input() isToday: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  formatted_date(date: Date) {
    return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
  }

  formatted_time(time: number) {
    const date = new Date();
    date.setTime(time);
    let hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour > 12 ? 'PM' : 'AM';
    hour = hour > 12 ? hour - 12 : hour;
    return `${hour}:${minute} ${ampm}`;
  }

}
