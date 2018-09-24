import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var require:any;
const Mapwize = require('mapwize');

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html'
})
export class NavigationPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    Mapwize.apiKey("1baf6b66971d308ce2ac2c42b46865da");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');

    const map = new Mapwize.Map({
       container: 'Naman',
       interactive: true,
       bearingSnap: 7,
       zoom: 19,
       useBrowserLocation: false,
       organizationId: "5b5f2b23b0b03f00043e18f2"
     });

     map.centerOnVenue('5b5f2bb802a3720004d6182a');
     map.setFloor(3)
     map.on('mapwize:ready', () => {
       // Naman is ready to kick some butt
     });

     map.on( 'mapwize:click', ( e ) => {
       map.removeMarkers();
       console.log( e );

       if( e.place ){
         map.addMarkerOnPlace( e.place );
       } else {
         map.addMarker({ lat: e.lngLat.lat, lng: e.lngLat.lng, floor: map.getFloor() });
       }
     });

  }
}
