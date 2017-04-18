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
  private _order = 'dec';

  constructor(private http: Http, private af: AngularFire) {
    this.getData();
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
    return ['Name', 'College', 'Problems Solved']
  }
}
