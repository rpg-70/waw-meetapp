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
  location: string;
  usersUrl = 'https://wawacode.herokuapp.com/users/';
  users
  showPlaces: boolean = false;
  showFriendsInPlace: boolean = false;
  places
  chosenCategory: string;
  panelOpenState;
  myEvents = [];
  allData;
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
    if (localStorage.getItem('new-event-main-info')) {
      this.myEvents = JSON.parse(localStorage.getItem('new-event-main-info'));
    }

    this.myEvents.push(JSON.stringify(this.mainInformation.value));
    localStorage.setItem('my-events', JSON.stringify(this.myEvents));
    localStorage.setItem('new-event-participants', JSON.stringify(this.participantsInformation.value));
    localStorage.setItem('new-event-location', JSON.stringify(this.locationInformation.value));
  }

  showUserPlaces() {
    this.showPlaces = true
    this.chosenCategory = this.chosenCategory.replace(" ","_")
    localStorage.setItem("chosenCategory",this.chosenCategory)
    this.getUserPlaces(this.chosenCategory).then(response => {
      this.places = response.body.places;
      this.allData = response.body;
    });

  }
  showFriendsForPlace() {
    this.showFriendsInPlace = true
  }
  getUserPlaces(category) {
    return this.http.get<any>('https://wawacode.herokuapp.com/distance/' + category + '?user_id=' + this.participants.join(','), {
      observe: 'response'
    }).toPromise().then(response => {
      return response;
    });
  }

  getUsers() {
    this.http.get(this.usersUrl, { observe: 'response' }).toPromise()
      .then(
        response => {
          this.users = response.body
          if (response.status === 200) {
            this.users = response.body
          }
        });
  }

  goBackHome() {
    this.router.navigate(['/']);
  }

  participants = [];
    addNewParticipant(userId) {
        if(this.participants.includes(userId) == false) {
            this.participants.push(userId);
        } else {
            var index = this.participants.indexOf(userId);
            if (index !== -1) this.participants.splice(index, 1);
        }
      return this.participants
  }
}
