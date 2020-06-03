import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/Note';
import { NoteService } from '../services/note.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})

export class CreateComponent implements OnInit{

  note: Note = new Note()

  constructor(private router: Router, private noteService: NoteService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.save()
  }

  save() {
    this.noteService.createNote(this.note)
      .subscribe(data => this.goToList(), err => alert(err))
  }

  goToList() {
    this.router.navigate(['/'])
  }



}