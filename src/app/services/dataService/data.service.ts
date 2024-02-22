import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class DataService {

  private drowerState = new BehaviorSubject(false);
  currentDrowerState = this.drowerState.asObservable();

  constructor() { }

  toggleDrawerState(state: boolean) {
    this.drowerState.next(state)
  }
}
