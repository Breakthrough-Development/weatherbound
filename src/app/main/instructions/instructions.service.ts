import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstructionsService {
  showInstructions: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  ); // todo: default is false
  constructor() {}
}
