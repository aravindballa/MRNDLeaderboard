import { Component, OnInit } from '@angular/core';
import {DataProviderService} from './data-provider.service';

@Component({
  selector: '[id=problems]',
  templateUrl: './problems.component.html',
  styleUrls: ['../assets/webflow.css', '../assets/style.css', '../assets/normalize.css'],
})
export class ProblemsComponent implements OnInit {
    _class: Array<String>;
    problems: Array<String>;
    stats_body: any;

    constructor(private dataProvider: DataProviderService) { 
        this._class = ["notsolv", "prob"];
        dataProvider.getData().subscribe( res => {
            this.problems = res.questions;
            this.stats_body = res.students;
            //this.aPerson = Object.keys(res.students)[0];
        });
    }

    getClass(i) {
        let p = this.dataProvider.getaPerson();
        if(p == undefined) {
            return this._class[0];
        }
        else {
            return this._class[this.stats_body[p].marks[i]];
        }
    }
    
    ngOnInit(){

    }
}