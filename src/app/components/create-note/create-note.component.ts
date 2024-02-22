import { style } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
import { ARCHIVE_ICON, BRUSH_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, MORE_ICON, REDO_ICON, REMINDER_ICON, TICK_ICON, TRASH_ICON, UNDO_ICON } from 'src/assets/svg-icons';
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
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
  
})
export class CreateNoteComponent implements OnInit {

  clickToggle:boolean=true;
  toggleClose:boolean=true
  title!:string;
  description!:string;
  archive:boolean=false;
  trash:boolean=false;
  color:string="#ffffff";
  @Output() updateList = new EventEmitter<{data:NoteObj,action:string}>();

  constructor(private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router,private noteservice:NotesServiceService) {
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    iconRegistry.addSvgIconLiteral('collaborator-icon',sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral('color-plate-icon',sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral('img-icon',sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral('more-icon',sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral('tick-icon',sanitizer.bypassSecurityTrustHtml(TICK_ICON))
    iconRegistry.addSvgIconLiteral('brush-icon',sanitizer.bypassSecurityTrustHtml( BRUSH_ICON))
    iconRegistry.addSvgIconLiteral('undo-icon',sanitizer.bypassSecurityTrustHtml(UNDO_ICON))
    iconRegistry.addSvgIconLiteral('redo-icon',sanitizer.bypassSecurityTrustHtml(REDO_ICON))
  }
  ngOnInit(): void {
  }

  handleCreateNote(val:string)
  {
    if(val === 'close')
    {
      this.clickToggle=!this.clickToggle; 
      const noteObj ={
          "Title": this.title,
          "Description": this.description,
          "Color": this.color,
          "IsArchive": this.archive,
          "IsPinned": false,
          "IsTrash": this.trash,
       }
      this.noteservice.createNote(noteObj).subscribe(res=>this.updateList.emit({data:res.data,action:"create"})
      )

      this.title="";
      this.description="";
      this.color="#ffffff";
      this.archive=false;
      this.trash=false;
    }
    
    else
    {
      this.clickToggle = !this.clickToggle;
    }

  }

  handleCreateNoteIconsClick(action:string){
    if(action=="archive"){
      this.archive=!this.archive;
    }
    else if(action=="trash"){
      this.trash=!this.trash;
    }
    else{
      this.color=action;
    }
  }

}
