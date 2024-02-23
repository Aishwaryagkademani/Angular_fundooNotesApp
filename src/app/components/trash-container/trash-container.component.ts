import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
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
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit {
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
          this.notesList=res.filter((ele) => ele.isTrash )
        })
    }

    updateNotesList($event: {data:NoteObj,action:string}){
      if($event.action=="trash"){
        
        this.notesList=this.notesList.filter((ele) => ele.noteId != $event.data.noteId);      
      }
      else if($event.action=="delete"){
        this.notesList=this.notesList.filter(ele=>ele.noteId != $event.data.noteId)
      }
      // else{
      //   this.notesList=this.notesList.map(ele => {
      //     if(ele.noteId == $event.data.noteId) return $event.data
      //     return ele
      //   })
      // }
      
    }

}
