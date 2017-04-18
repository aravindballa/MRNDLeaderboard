import { Component, OnInit } from '@angular/core';
import {DataProviderService} from './data-provider.service';

@Component({
  selector: '[id=problems]',
  templateUrl: './problems.component.html',
  styleUrls: ['../assets/webflow.css', '../assets/style.css', '../assets/normalize.css'],
})
export class ProblemsComponent implements OnInit {
    _class: Array<String>;

    constructor(private dataProvider: DataProviderService) { 
        this._class = ["notsolv", "prob"];
    }
    
    ngOnInit(){

    }
}