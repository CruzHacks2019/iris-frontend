import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {HistoryComponent} from './history/history.component';
import {RelationshipsComponent} from './relationships/relationships.component';
import {CreditsComponent} from './credits/credits.component';
import {RemindersComponent} from './reminders/reminders.component';
import {CalendarComponent} from './reminders/calendar/calendar.component';
import {ListComponent} from './reminders/list/list.component';
import {DayComponent} from './reminders/calendar/day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HistoryComponent,
    RelationshipsComponent,
    CreditsComponent,
    RemindersComponent,
    CalendarComponent,
    ListComponent,
    DayComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
