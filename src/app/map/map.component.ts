import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements AfterViewInit {
  @Output() onLatLong = new EventEmitter();
  map: any;

  initMap(): void {
    this.map = L.map('map', {
      center: [14.543867, -86.8395272],
      zoom: 6.0,
    });
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    let marker;
    this.map.on('click', (e) => {
      if (marker) {
        this.map.removeLayer(marker);
      }
      marker = L.marker([e.latlng.lat, e.latlng.lng], {
        draggable: false,
        bounceOnAdd: true,
        title: 'Aquí Estoy',
      })
        .addTo(this.map)
        .bindPopup('Aquí Estoy')
        .openPopup();

      this.onLatLong.emit(e.latlng);
    });
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
