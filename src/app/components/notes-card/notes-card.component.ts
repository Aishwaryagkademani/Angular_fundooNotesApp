import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NOTE_ICON, REMINDER_ICON, EDIT_ICON, ARCHIVE_ICON, TRASH_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, MORE_ICON } from 'src/assets/svg-icons';

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
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss']
})

export class NotesCardComponent implements OnInit {
  // data: DataService,
  
  color!:string;

  @Output() updateList = new EventEmitter<{data: NoteObj, action: string}>();
@Input() noteDetails! : NoteObj;
  constructor(private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router) {
     iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
     iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
     iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
     iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
     iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
     iconRegistry.addSvgIconLiteral('collaborator-icon',sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
     iconRegistry.addSvgIconLiteral('color-plate-icon',sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
     iconRegistry.addSvgIconLiteral('img-icon',sanitizer.bypassSecurityTrustHtml(IMG_ICON))
     iconRegistry.addSvgIconLiteral('more-icon',sanitizer.bypassSecurityTrustHtml(MORE_ICON))
   }

  ngOnInit(): void {
  }

handleNoteCardColor(color:string){
  this.color=color;
}

  handleNoteCardIconsClick(action:string){
    if(action=="archive" ){
      this.updateList.emit({data:this.noteDetails,action:"archive"})
    }
    else if(action=="trash"){
      this.updateList.emit({data:this.noteDetails,action:"trash"})
    }
   
  }



}
