import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-event-creator-dialog',
  templateUrl: './event-creator-dialog.component.html',
  styleUrls: ['./event-creator-dialog.component.scss']
})
export class EventCreatorDialogComponent implements OnInit {
  isLinear = false;
  mainInformation: FormGroup;
  chooseParticipants: FormGroup;
  selectLocation: FormGroup;
  location:string;
  
  constructor(private _formBuilder: FormBuilder) {}
  myFriends = [
    {name: 'Heheszek',location: 'Bezdomny',profilePhoto: '../../../../assets/profile-photos/lukasz.jpg'},
    {name: 'Sowa',location: 'Szczęśliwice',profilePhoto: '../../../../assets/profile-photos/sowa.jpg'},
    {name: 'Ręka',location: 'Bemowo',profilePhoto: '../../../../assets/profile-photos/magda.jpg'},
    {name: 'Bonkers',location: 'Szczęśliwice',profilePhoto: '../../../../assets/profile-photos/pawel.jpg'},
    {name: 'Piter',location: 'Bezdomny',profilePhoto: '../../../../assets/profile-photos/piotr.jpg'},
    {name: 'Nadia',location: 'Ursus, Skorosze',profilePhoto: '../../../../assets/profile-photos/nadia.jpg'}
  ];
  ngOnInit() {
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
    console.log(this.mainInformation.get('name').value)
  }

  
}