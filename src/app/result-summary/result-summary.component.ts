import { Component } from '@angular/core';
import {Data} from "./data";
@Component({
  selector: 'app-result-summary',
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.css']
})
export class ResultSummaryComponent {

  data = Data
}
