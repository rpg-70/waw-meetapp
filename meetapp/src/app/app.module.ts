import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { EventsAcceleratorComponent } from './components/events-accelerator/events-accelerator.component';
import { MyFriendsComponent } from './components/my-friends/my-friends.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';

import { EventCreatorDialogComponent } from './components/events-accelerator/event-creator-dialog/event-creator-dialog.component';
import { MatDialogModule, MatStepperModule, MatFormFieldModule } from '@angular/material';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { TripPlansComponent } from './components/trip-plans/trip-plans.component';


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    EventsAcceleratorComponent,
    MyFriendsComponent,
    MyEventsComponent,
    EventCreatorDialogComponent,
    MyEventsComponent,
    GooglemapsComponent,
    MainPageComponent,
    NewEventComponent,
    TripPlansComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXO5Elyxvhmk7YtgfnVlusrSnkwuzqE0c'
    }),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule,
    CdkStepperModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EventCreatorDialogComponent]
})
export class AppModule { }
