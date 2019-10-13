import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-plans',
  templateUrl: './trip-plans.component.html',
  styleUrls: ['./trip-plans.component.scss']
})
export class TripPlansComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
