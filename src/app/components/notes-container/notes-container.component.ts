import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../../services/notesService/notes-service.service';
interface NoteObj {
  "noteId":number,
  "title": string,
  "description": string,
  "color":string,
  "reminder": string,
  "isArchive": boolean,
  "isPinned": boolean,
  "isTrash": boolean,
}
@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  notesList:NoteObj[]=[{
  "noteId":0,
  "title": "",
  "description": "",
  "color":"",
  "reminder": "",
  "isArchive": false,
  "isPinned": false,
  "isTrash": false,}];
  constructor(private notesService:NotesServiceService) { }

  ngOnInit(): void {

    this.notesService.getAllNotes().subscribe((res:NoteObj[])=>
      {
        this.notesList=res.filter((ele) => !ele.isArchive && !ele.isTrash)
        console.log(this.notesList.length);

      })
  }

  updateNotesList($event: {data:NoteObj,action:string}){
    if($event.action=="create" ){
      if(!$event.data.isArchive  && !$event.data.isTrash)
      this.notesList=[$event.data,...this.notesList]
    }

    else if($event.action=="archive"){
      this.notesService.updateArchive($event.data.noteId).subscribe(res=>console.log(res)
      );
      this.notesList=this.notesList.filter((ele) => ele.noteId != $event.data.noteId);      
    }
    else if($event.action=="trash"){
      this.notesList=this.notesList.filter((ele)=>ele.noteId !=$event.data.noteId)
    }
    // console.log($event);
    
  }


}
