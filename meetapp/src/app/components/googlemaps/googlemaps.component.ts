import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss']
})
export class GooglemapsComponent implements OnInit {
  lat = 52.232222;
  lng = 21.008333;
  zoom = 12;
  distanceServiceUrl = 'https://wawacode.herokuapp.com/distance/restauracja';
  data = null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData().then(response => {
      this.data = response.users;
    });
  }

  onMouseOver(infoWindow, gm) {
    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }

  getData() {
    return this.http.get(this.distanceServiceUrl, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      }),
      observe: 'response'}).toPromise().then(response => {
        return response.body;
    });
  }
}
