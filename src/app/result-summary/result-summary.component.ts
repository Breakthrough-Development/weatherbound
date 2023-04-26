import { Component } from '@angular/core';
import { Data } from './data';
import { DataInterface } from './models/DataInterface';

@Component({
  selector: 'app-result-summary',
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.css'],
})
export class ResultSummaryComponent {
  data: DataInterface[] = Data;
}
