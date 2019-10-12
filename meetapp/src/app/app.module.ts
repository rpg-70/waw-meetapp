import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { EventsAcceleratorComponent } from './components/events-accelerator/events-accelerator.component';
import { MyFriendsComponent } from './components/my-friends/my-friends.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { MatToolbarModule, MatIconModule, MatBadgeModule, MatCardModule } from '@angular/material';

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
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
