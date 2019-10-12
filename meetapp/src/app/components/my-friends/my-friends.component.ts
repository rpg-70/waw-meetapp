import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.scss']
})
export class MyFriendsComponent implements OnInit {

  myFriends = [
    {name: 'Piter',surname: 'Cokonut Team',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {name: 'Ania',surname: 'Cokonut Team',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {name: 'Paweł',surname: 'Cokonut Team',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {name: 'Karol',surname: 'Cokonut Team',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {name: 'Nadia',surname: 'Cokonut Team',profilePhoto: 'https://material.angular.io/assets/img/examples/shiba2.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
