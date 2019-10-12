import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.scss']
})
export class MyFriendsComponent implements OnInit {

  myFriends = [
    {name: 'Piter Guziorski',location: 'Łopuszańska',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {name: 'Ania Drabik',location: 'Szczęśliwice',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {name: 'Paweł Bąkiewicz',location: 'Szczęśliwice',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {name: 'Karol Kowalczyk',location: 'Bemowo',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {name: 'Nadia Ruszkiewicz',location: 'Ursus, Skorosze',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
