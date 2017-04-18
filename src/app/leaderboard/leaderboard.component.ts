import { Component, OnInit } from '@angular/core';
import {DataProviderService} from './data-provider.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  providers: [DataProviderService],
  
})
export class LeaderboardComponent implements OnInit {

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit() {
  }

}
