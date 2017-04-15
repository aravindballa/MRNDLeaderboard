import { Component, OnInit } from '@angular/core';
import {DataProviderService} from "./data-provider.service";

@Component({
  selector: '[id=app-heading]',
  templateUrl: './heading.component.html',
})
export class HeadingComponent implements OnInit {

  private headings;
  constructor(private dataprovider: DataProviderService) {
    this.headings = this.dataprovider.getSampleheadings();
    this.toggleOrder();
  }

  ngOnInit() {
  }

  toggleOrder() {
    this.dataprovider.order === 'dec'
      ? this.dataprovider.order = 'asc'
      : this.dataprovider.order = 'dec';
  }

}
