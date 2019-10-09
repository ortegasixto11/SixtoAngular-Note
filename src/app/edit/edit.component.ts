import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from '../models/Note';
import { NoteService } from '../services/note.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit{
  id: string
  note: Note

  constructor(private router: Router, private route: ActivatedRoute, private noteService: NoteService){
  }

  ngOnInit(){
    this.note = new Note()
    this.id = this.route.snapshot.params['id']
    this.noteService.getNote(this.id)
      .subscribe(data => {
        this.note = data
      }, err => alert(err))
  }

  onSubmit(){
    this.update()
  }

  update(){
    this.noteService.updateNote(this.id, this.note)
      .subscribe(data => {
        this.goToList()
      }, err => alert(err))
  }

  goToList(){
    this.router.navigate(['/'])
  }

}