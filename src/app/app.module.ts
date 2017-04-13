import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HeadingComponent } from './leaderboard/heading.component';
import { BodyComponent } from './leaderboard/body.component';
import {totalMarksPipe} from "./leaderboard/totalMarksPipe";
import {SorterPipe} from "./leaderboard/SorterPipe";

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    HeadingComponent,
    BodyComponent,
    totalMarksPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
