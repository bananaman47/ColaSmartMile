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

    const map = new Mapwize.Map({
       container: 'Naman',
       maxBounds: [[-81.03315,34.01635],[-81.03055,34.01865]],
       interactive: true,
       bearingSnap: 7,
       zoom: 19,
       useBrowserLocation: false,
       organizationId: "5b5f2b23b0b03f00043e18f2"
     });

     map.centerOnVenue('5b5f2bb802a3720004d6182a');
     map.setFloor(3)
     map.on('mapwize:ready', () => {
       map.grantAccess('17a382bacb754cf3').then(() => {

       }).catch( err => {
         console.log( err );
       });
     });

     map.on( 'mapwize:click', e => {
       map.removeMarkers();;

       if( e.place ){
         map.addMarkerOnPlace( e.place );

         let options = { waypointOptimize: true };

         Mapwize.Api.getDirection({
           from: { placeId: "5b5f2efaa1c1bf00042fa0e1" },
           to: { placeId: e.place._id },
           options: options
         }).then( direction => {
           map.setDirection( direction, options );
         });

       } else {
         map.addMarker({ lat: e.lngLat.lat, lng: e.lngLat.lng, floor: map.getFloor() });
         map.removeDirection();
       }
     });

     map.on( 'mapwize:userpositionchange', e => {
       map.addMarker({ lat: e.userPosition.latitude, lng: e.userPosition.longitude });
     });
  }
}
