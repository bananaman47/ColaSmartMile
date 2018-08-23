import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../../models/note.model';


@Injectable()
export class NoteService {
  // this class is a middleman that does all the work for home.ts, add-note.ts, navigation.ts //

  private notes: Note[] = [];
  private note: Note;

  constructor(public storage: Storage) {
  }

  saveNote(note: Note){
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }

  getAllNotes(){ // called from home.ts
    //return this.notes.slice(); // returning a copy, not original
    // when below promise is resolved, we pass to "then()" a callback function to do something
    return this.storage.get('notes').then(
    (notes) => {
      this.notes = notes == null ? [] : notes;
      return [...this.notes]; // spread operator to return a copy of array
    }
  )
  }

  getNote(createDate: number){
    return this.storage.get('notes').then((notes) => { // .get returns a promise of notes, so callback function is needed
      this.note = [...notes].find(r => r.createDate === createDate); // finding a note by its createDate
      return this.note;
    })
  }

  /**
  Here we're not deleting a note persay. We're using "filter"
  to return the notes array with everything except for the note that
  we don't want anymore.
  **/
  deleteNote(createDate: number){
    this.notes = this.notes.filter((note) => {
      return note.createDate !== createDate
    })
    this.storage.set('notes', this.notes);
  }

}
