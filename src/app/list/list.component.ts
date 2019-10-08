import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/Note'
import { NoteService } from '../services/note.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent implements OnInit{

  notes: Observable<Note[]>

  constructor(private noteService: NoteService){ 
  }

  ngOnInit(){
    this.loadData()
  }

  loadData(){
    this.notes = this.noteService.listNotes()
  }


}