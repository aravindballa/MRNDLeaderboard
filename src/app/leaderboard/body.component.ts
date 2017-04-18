import { Component, OnInit } from '@angular/core';
import {DataProviderService} from './data-provider.service';

@Component({
  selector: '[id=app-body]',
  templateUrl: './body.component.html',
  styleUrls: ['../assets/style.css'],
})
export class BodyComponent implements OnInit {

  constructor(private dataProvider: DataProviderService) { 

  }

  ngOnInit() {
    
  }

  allInfo() {
    return this.dataProvider.data.students;
  }

  isSolved(solved) {
    if (solved) {
      return '#aed581';
    }
  }

  getStats() {
    return this.dataProvider.stats_body;
  }

}
