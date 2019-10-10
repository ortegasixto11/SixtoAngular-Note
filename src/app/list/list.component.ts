import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/Note'
import { NoteService } from '../services/note.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent implements OnInit{

  notes: Observable<Note[]>

  constructor(private noteService: NoteService, private router: Router){ 
  }

  ngOnInit(){
    this.loadData()
  }

  loadData(){
    this.notes = this.noteService.listNotes()
  }

  noteEdit(id: string){
    this.router.navigate(['edit', id])
  }

  noteDelete(id: string, text: string){
    if(confirm(`Eliminar ${text}?`)){
      this.noteService.removeNote(id)
      .subscribe(data => { 
        this.loadData() 
      }, err => alert(err))
    }
  }

}