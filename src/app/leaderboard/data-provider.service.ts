import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class DataProviderService implements OnInit {

  public data = {
    "students": [
      {
        "name": "",
        "marks": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
    ],
    "questions": [
      "NGM",
      "ADDREV",
      "ARITH2",
      "CRDS",
      "SAMER08F",
      "CANDY3",
      "NSTEPS",
      "CANTON",
      "KNAPSACK",
      "OFORTUNE",
      "TOANDFRO",
      "TWOSQRS",
      "FASHION",
      "ABSYS",
      "ZSUM",
      "STPAR",
      "AU12",
      "PRIME1",
      "AGGRCOW",
      "TSHOW1",
      "TRICENTR",
      "SBANK",
      "PALIN",
      "POUR1",
      "FIBOSUM"
    ]
  };
  private _order = 'asc';

  stats_body: any;
  users: Array<String>;
  headings: Array<String>;
  problems: Array<String>;
  aPerson: String;
  lastUpdate: Date;

  constructor(private http: Http, private af: AngularFire) {
    this.getData();
    this.headings = ['Name', 'College', 'Problems Solved'];

    let o = this.af.database.object('/spojstats2');
    o.subscribe( res => {
      console.log(res);
      this.users = Object.keys(res.students);
      this.stats_body = res.students;
      this.problems = res.questions;
      this.aPerson = this.users[0];
      this.lastUpdate = res.lastUpdated;
    });
  }

  ngOnInit(): void {
    
  }

  getData() {

  }

  set order(value: string) {
    this._order = value;
  }

  get order(): string {
    return this._order;
  }

  getSampleheadings() {
    return this.headings;
  }
  
  activePerson(u) {
    console.log(u);
    this.aPerson = u;
  }
}
