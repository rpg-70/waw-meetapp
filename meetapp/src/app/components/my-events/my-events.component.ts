import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {
  newevent;
  myEvents = [
    {
      name: 'Classic movie night',
      surname: 'Kinoteka',
      photo: 'https://loremflickr.com/160/120/classic_film',
      description: 'Good old "old" movies',
      participants: 4, closed: false, datetime: '01/03/2019 18:00 - 20:00'
    },
    {
      name: 'Library sightseeing',
      surname: 'Biblioteka SGH',
      photo: 'https://loremflickr.com/160/120/library',
      description: 'Lets read!',
      participants: 4, closed: false, datetime: '12/03/2019 13:00 - 20:00'
    },
    {
      name: 'Clubbing! XD',
      surname: 'Pub Lolek',
      photo: 'https://loremflickr.com/160/120/party',
      description: 'Party time!',
      participants: 4, closed: false, datetime: '01/04/2019 18:00 - 19:00'
    },
    {
      name: 'Confusing the cat',
      surname: 'Metro Politechnika',
      photo: 'https://thiscatdoesnotexist.com/',
      description: 'Contest in cat confusing... Meow?',
      datetime: '12/05/2019 12:00'
    }

  ];
  constructor() { }

  ngOnInit() {
    this.updateEvents();
  }

  updateEvents() {
    console.log('dupa');
    this.newevent = JSON.parse(localStorage.getItem("new-event-main-info"));
    if(this.myEvents.includes(this.newevent.name)) {
      console.log("Already there!");
    } else {
      this.newevent.photo = "https://picsum.photos/300/200";
      this.myEvents.push(this.newevent);
    }
  }
}
