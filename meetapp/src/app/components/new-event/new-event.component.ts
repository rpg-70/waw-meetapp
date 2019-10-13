import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {
  isLinear = false;
  location:string;
  usersUrl = 'https://wawacode.herokuapp.com/users/';
  users
  showPlaces:boolean=false
  places
  constructor(
    private _formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router) { }

  mainInformation: FormGroup;
  participantsInformation: FormGroup;
  locationInformation: FormGroup;

  ngOnInit() {
    this.getUsers();
    this.mainInformation = this._formBuilder.group({
      name: new FormControl(null),
      description: new FormControl(null),
      location: new FormControl(null)
    });
    this.participantsInformation = this._formBuilder.group({
      filterFriends: new FormControl('Only invited'),
      searchFriends: new FormControl(null)
    });
    this.locationInformation = this._formBuilder.group({
      date: new FormControl(null),
      time: new FormControl(null),
      ownLocation: new FormControl(null),
      discoverLocation: new FormControl(null)
    });
  }
  saveEvent() {
    localStorage.setItem('new-event-main-info', JSON.stringify(this.mainInformation.value));
    localStorage.setItem('new-event-participants', JSON.stringify(this.chooseParticipants.value));
    localStorage.setItem('new-event-location', JSON.stringify(this.selectLocation.value));
  }

  showUserPlaces() {
    this.showPlaces = true;
    this.http.get('https://wawacode.herokuapp.com/distance/kawiarnia/', { observe: 'response' }).toPromise()
      .then(
        response => {
          this.places = response.body.places;
          console.log("booody", response.body, "users", this.users)
          if (response.status === 200) {
            this.users = response.body
          }
        });

  }
  getUsers() {
    console.log("wha")

    this.http.get(this.usersUrl, { observe: 'response' }).toPromise()
      .then(
        response => {
          this.users = response.body
          console.log("booody", response.body, "users", this.users)
          if (response.status === 200) {
            this.users = response.body
          }
        });
  }

  goBackHome() {
    this.router.navigate(['/']);
  }
}
