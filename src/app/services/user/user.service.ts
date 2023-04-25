import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserInterface} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: BehaviorSubject<UserInterface | null> = new BehaviorSubject<UserInterface | null>(null)
}
