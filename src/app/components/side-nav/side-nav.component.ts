import { Component, OnDestroy, OnInit } from '@angular/core';
import DataService from '../../services/dataService/data.service';
import { Subscription } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ARCHIVE_ICON, DELETE_FOREVER_ICON, EDIT_ICON, NOTE_ICON, REMINDER_ICON, TRASH_ICON } from 'src/assets/svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy{

  drawerState! : boolean;
subscribe!:Subscription;
 
  constructor(private data:DataService,private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router) {
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    iconRegistry.addSvgIconLiteral("bin-icon",sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON))
  }
  ngOnInit(): void {
    this.subscribe=this.data.currentDrowerState.subscribe(state=>this.drawerState=state)
  }


  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  
}
