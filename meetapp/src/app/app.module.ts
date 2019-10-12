import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { EventsAcceleratorComponent } from './components/events-accelerator/events-accelerator.component';
import { MyFriendsComponent } from './components/my-friends/my-friends.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    EventsAcceleratorComponent,
    MyFriendsComponent,
    MyEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
