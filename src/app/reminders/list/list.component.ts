import {Component, Input, OnInit} from '@angular/core';
import {CalEvent} from '../reminders.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() events: CalEvent[];

  constructor() {
  }

  ngOnInit() {
  }

}
