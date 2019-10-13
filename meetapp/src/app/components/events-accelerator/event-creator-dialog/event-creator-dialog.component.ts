import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event-creator-dialog',
  templateUrl: './event-creator-dialog.component.html',
  styleUrls: ['./event-creator-dialog.component.scss']
})
export class EventCreatorDialogComponent implements OnInit {
  mainInformation: FormGroup;
  chooseParticipants: FormGroup;
  selectLocation: FormGroup;
  isLinear = false;
  location:string;
  usersUrl = 'https://wawacode.herokuapp.com/users/';
  users
  showPlaces:boolean=false
  places
  
  constructor(private _formBuilder: FormBuilder,private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
    this.mainInformation = this._formBuilder.group({
      name: new FormControl(null),
      description: new FormControl(null),
      location: new FormControl(null)
    });
    this.chooseParticipants = this._formBuilder.group({
      filterFriends: new FormControl('Only invited'),
      searchFriends: new FormControl(null)
    });
    this.selectLocation = this._formBuilder.group({
      date: new FormGroup(null),
      time: new FormGroup(null),
      ownLocation: new FormGroup(null),
      discoverLocation: new FormGroup(null)
    });
    
  }
  saveEvent(){
    localStorage.setItem('new-event-main-info', JSON.stringify(this.mainInformation.value));
    localStorage.setItem('new-event-participants', JSON.stringify(this.chooseParticipants.value));
    localStorage.setItem('new-event-location', JSON.stringify(this.selectLocation.value));
  }

  showUserPlaces() {
    this.showPlaces = true
    this.http.get('https://wawacode.herokuapp.com/distance/kawiarnia/', { observe: 'response' }).toPromise()
    .then(
        response => {
          this.places = response.body
          console.log("booody",response.body,"users",this.users)
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
                console.log("booody",response.body,"users",this.users)
                  if (response.status === 200) {
                      this.users = response.body
                  }
              });
  }


}