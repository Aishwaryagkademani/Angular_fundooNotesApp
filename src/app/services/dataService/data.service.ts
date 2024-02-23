import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class DataService {

  private drowerState = new BehaviorSubject(false);
  private searchText= new BehaviorSubject("");
  currentDrowerState = this.drowerState.asObservable();
  currentSearchText= this.searchText.asObservable();
  constructor() { }

  toggleDrawerState(state: boolean) {
    this.drowerState.next(state)
  }

  updateSearchText(state:string){
    this.searchText.next(state)
  }
}
