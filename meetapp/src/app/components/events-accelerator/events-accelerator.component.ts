import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-accelerator',
  templateUrl: './events-accelerator.component.html',
  styleUrls: ['./events-accelerator.component.scss']
})
export class EventsAcceleratorComponent implements OnInit {

  name:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createNewEvent() {
    this.router.navigate(['/new-event']);   
  }
}