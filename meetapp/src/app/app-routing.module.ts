import { NewEventComponent } from './components/new-event/new-event.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCreatorDialogComponent } from './components/events-accelerator/event-creator-dialog/event-creator-dialog.component';
import { MainPageComponent } from './components/main-page/main-page.component';


const routes: Routes = [
  { path:'', component: MainPageComponent},
  { path: 'new-event', component: NewEventComponent},  // you must add your component here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
