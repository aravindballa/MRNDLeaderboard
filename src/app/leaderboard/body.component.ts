import { Component, OnInit } from '@angular/core';
import {DataProviderService} from './data-provider.service';

import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';


@Component({
  selector: '[id=app-body]',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {

  stats_body: any;
  users: Array<String>;

  constructor(private dataProvider: DataProviderService, private af: AngularFire) { 

  }

  ngOnInit() {
    let o = this.af.database.object('/spojstats2/students');
    o.subscribe( res => {
      console.log(res);
      this.users = Object.keys(res);
      this.stats_body = res;
    });
    //this.stats_body = o;
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
    return this.stats_body;
  }

}
