import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class DataProviderService implements OnInit {

  private url = 'src/app/output2.json';
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

  constructor(private http: Http) {
    this.getData();
  }

  ngOnInit(): void {}

  getData() {
    const o: Observable<any> = this.http.get(this.url);
    o.subscribe(res => {
      this.data = (JSON.parse(res.text()));
    });
  }

  set order(value: string) {
    this._order = value;
  }

  get order(): string {
    return this._order;
  }

  getSampleheadings() {
    return this.data.questions;
  }

  getSampleBody() {
    return this.data.students;
  }
}
