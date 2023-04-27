import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  showSettings: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true); // todo: default is false
  constructor() {}
}
