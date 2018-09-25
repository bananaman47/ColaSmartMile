import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NavigationPage } from '../navigation/navigation';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // home.html is using this array below. We retrieve the array from ionViewWillEnter
  private notes: Promise<Note[]>;
  private note: Note;

  constructor(public navCtrl: NavController, private noteService: NoteService) {
  }

  ionViewWillEnter(){ // lifecycle event that runs when a page is about to enter and become the active page
    this.notes = this.getAllNotes();
  }

  addNote(){
    this.navCtrl.push(AddNotePage);
  }

  getNote(createDate: number){
    this.noteService.getNote(createDate).then((n) => {
      this.note = n;
      this.navCtrl.push(ViewNotePage, { note: this.note })
    })
  }

  navigate(){
    this.navCtrl.push(NavigationPage);
  }

  getAllNotes(){ // calling the noteservice's method we made
    return this.noteService.getAllNotes();
  }

}
