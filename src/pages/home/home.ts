import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NavigationPage } from '../navigation/navigation';
import { NoteService } from '../../providers/note-service/note-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // home.html is using this array below. We retrieve the array from ionViewWillEnter
  notes: { title: string }[] = [];

  constructor(public navCtrl: NavController, private noteService: NoteService) {
  }

  ionViewWillEnter(){ // lifecycle event that runs when a page is about to enter and become the active page
    this.notes = this.getAllNotes();
  }

  addNote(){
    this.navCtrl.push(AddNotePage);
  }

  navigate(){
    this.navCtrl.push(NavigationPage);
  }

  getAllNotes(){ // calling the noteservice's method we made
    console.log(this.noteService.getAllNotes());
    return this.noteService.getAllNotes();
  }

}
