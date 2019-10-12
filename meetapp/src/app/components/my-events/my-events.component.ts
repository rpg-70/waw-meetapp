import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {
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
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
