import { Component, OnDestroy, OnInit } from '@angular/core';
import DataService from '../../services/dataService/data.service';
import { Subscription } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LIST_VIEW_ICON, MENU_ICON, NOTE_ICON, OTHER_MENU_ICON, REFRESH_ICON, SEARCH_ICON, SETTING_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-fundoo-header',
  templateUrl: './fundoo-header.component.html',
  styleUrls: ['./fundoo-header.component.scss']
})
export class FundooHeaderComponent implements OnInit,OnDestroy {

  drawerState! : boolean;
  subscribe!:Subscription;
  searchText!:string;
    constructor(private data:DataService,private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
      iconRegistry.addSvgIconLiteral("search-icon",sanitizer.bypassSecurityTrustHtml(SEARCH_ICON ))
      iconRegistry.addSvgIconLiteral("refresh-icon",sanitizer.bypassSecurityTrustHtml(REFRESH_ICON ))
      iconRegistry.addSvgIconLiteral("listView-icon",sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON ))
      iconRegistry.addSvgIconLiteral("setting-icon",sanitizer.bypassSecurityTrustHtml(SETTING_ICON  ))
      iconRegistry.addSvgIconLiteral("menu-icon",sanitizer.bypassSecurityTrustHtml(MENU_ICON ))
      iconRegistry.addSvgIconLiteral("more-icon",sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON))

    }


  ngOnInit(): void {
    this.subscribe=this.data.currentDrowerState.subscribe(state=>this.drawerState=state)
    this.subscribe=this.data.currentSearchText.subscribe(state=>this.searchText=state)
  }

  handleDrawerState(){
    this.data.toggleDrawerState(!this.drawerState);
  }

  updateSearchText(){
    this.data.updateSearchText(this.searchText);
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}
