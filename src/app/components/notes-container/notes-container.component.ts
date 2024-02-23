import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../../services/notesService/notes-service.service';
import DataService from 'src/app/services/dataService/data.service';
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

  searchText!:string;

  notesList:NoteObj[]=[{
  "noteId":0,
  "title": "",
  "description": "",
  "color":"",
  "reminder": "",
  "isArchive": false,
  "isPinned": false,
  "isTrash": false,}];
  constructor(private notesService:NotesServiceService,private data:DataService) { }

  ngOnInit(): void {

    this.notesService.getAllNotes().subscribe((res:NoteObj[])=>
      {
        this.notesList=res.filter((ele) => !ele.isArchive && !ele.isTrash)

      })

      this.data.currentSearchText.subscribe(state=>this.searchText=state);
  }

  updateNotesList($event: {data:NoteObj,action:string}){
    if($event.action=="create" ){
      if(!$event.data.isArchive  && !$event.data.isTrash)
      this.notesList=[$event.data,...this.notesList]
    }

    else if($event.action=="archive" || $event.action=="trash"){
      
      this.notesList=this.notesList.filter((ele) => ele.noteId != $event.data.noteId);      
    }
    else{
      this.notesList=this.notesList.map(ele => {
        if(ele.noteId == $event.data.noteId) return $event.data
        return ele
      })
    }
    
  }


}
