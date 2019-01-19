import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {RelationshipsComponent} from './relationships/relationships.component';
import {CreditsComponent} from './credits/credits.component';
import {RemindersComponent} from './reminders/reminders.component';

const routes: Routes = [
  {path: '', component: HistoryComponent},
  {path: 'relationships', component: RelationshipsComponent},
  {path: 'reminders', component: RemindersComponent},
  {path: 'credits', component: CreditsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
