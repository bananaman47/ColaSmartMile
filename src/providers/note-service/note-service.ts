import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../../models/note.model';


@Injectable()
export class NoteService {
  // this class is a middleman that does all the work for home.ts, add-note.ts, navigation.ts //

  private notes: Note[] = [];

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

}
