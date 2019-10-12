import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {
  myEvents = [
    {name: 'Koncert',surname: 'Torwar',photo: 'https://gfx.antyradio.pl/var/antyradio/storage/images/muzyka/koncerty/enigma-zagra-pierwszy-raz-w-polsce-w-2019-27308/1919440-1-pol-PL/Enigma-zagra-pierwszy-raz-w-Polsce-w-2019.-Zespol-zapowiedzial-7-koncertow_article.jpg',description: 'Fajny koncert!'},
    {name: 'Integracja',surname: 'Pub Lolek',photo: 'https://www.horecabc.pl/wp-content/uploads/Piwo-barwa.jpg',description: 'Spotkajmy się :)'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
