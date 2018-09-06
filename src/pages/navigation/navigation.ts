import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import * as mapwizelib from 'mapwize-node-api';
//import {MapwizeApi as api} from 'mapwize-node-api';
declare var require:any;
//const api = require("mapwize-node-api");
const Mapwize = require('mapwize');

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html'
})
export class NavigationPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //let Mapwize = new api("1baf6b66971d308ce2ac2c42b46865da","5b5f2b23b0b03f00043e18f2","");
    Mapwize.apiKey("1baf6b66971d308ce2ac2c42b46865da");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');

    const map = new Mapwize.Map({
       container: 'Naman'
     });

     map.on('mapwize:ready', () => {
       // Naman is ready to kick some butt
     });
  }
}
