import { Component, OnInit } from '@angular/core';
import {DataProviderService} from './data-provider.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  providers: [DataProviderService],
  
})
export class LeaderboardComponent implements OnInit {
  lastUpdate: Date;

  constructor(private dataProvider: DataProviderService) { 
    dataProvider.getData().subscribe( res => {
      this.lastUpdate = res.lastUpdated;
    });
  }

  ngOnInit() {
  }

}
