import { Component, OnInit } from '@angular/core';
import {DataProviderService} from './data-provider.service';

@Component({
  selector: '[id=app-body]',
  templateUrl: './body.component.html',
  styleUrls: ['../assets/style.css'],
})
export class BodyComponent implements OnInit {
  stats_body: any;
  users: Array<String>;
  headings: Array<String>;
  lastUpdate: Date;
  activePerson;

  private _order = 'asc';

  constructor(private dataProvider: DataProviderService) { 
    dataProvider.getData().subscribe( res => {
      console.log(res);
      this.users = Object.keys(res.students);
      this.stats_body = res.students;
      this.lastUpdate = res.lastUpdated;
    });
    this.activePerson = dataProvider.activePerson;
    this.headings = ['Name', 'College', 'Problems Solved'];

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

  set order(value: string) {
    this._order = value;
  }

  get order(): string {
    return this._order;
  }

}
