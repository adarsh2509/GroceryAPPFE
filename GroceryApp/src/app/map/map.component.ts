import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat, transform } from 'ol/proj';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom';
import { Icon, Style } from 'ol/style';
import Feature from 'ol/Feature';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  map: any;
  latitude: number = 12.991579;
  longitude: number = 77.727963;
  searchQuery: string = '';

  constructor(private http:HttpClient)
  {}

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([this.longitude, this.latitude]),
        zoom: 15
      })
    });
    this.addPoint(this.latitude, this.longitude);
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(fromLonLat([this.longitude, this.latitude]));
    view.setZoom(12);
  }

  addPoint(lat: number, lng: number) {
    var vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [new Feature({
          geometry: new Point(transform([lng, lat], 'EPSG:4326', 'EPSG:3857'))
        })]
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          src: 'assets.jpg'
        })
      })
    });
    this.map.addLayer(vectorLayer);
  }

  searchLocation() {
    if (this.searchQuery) {
      const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        this.searchQuery
      )}.json?access_token=pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ`;

      this.http.get(geocodeUrl).subscribe((response: any) => {
        if (response.features && response.features.length > 0) {
          const [lng, lat] = response.features[0].center;
          this.latitude = lat;
          this.longitude = lng;

          this.setCenter();
          this.addPoint(this.latitude, this.longitude);
        }
      });
    }
  }
}
