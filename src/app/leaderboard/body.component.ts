import { Component, OnInit } from '@angular/core';
import {DataProviderService} from './data-provider.service';

@Component({
  selector: '[id=app-body]',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {

  constructor(private dataProvider: DataProviderService) { }

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

}
