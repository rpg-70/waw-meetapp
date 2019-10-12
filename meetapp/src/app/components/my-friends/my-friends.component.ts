import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.scss']
})
export class MyFriendsComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Four', cols: 2, rows: 1, color: 'lightblue'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
