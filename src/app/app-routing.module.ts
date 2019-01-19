import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {RelationshipsComponent} from './relationships/relationships.component';
import {CreditsComponent} from './credits/credits.component';

const routes: Routes = [
  {path: '', component: HistoryComponent},
  {path: 'relationships', component: RelationshipsComponent},
  {path: 'credits', component: CreditsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
