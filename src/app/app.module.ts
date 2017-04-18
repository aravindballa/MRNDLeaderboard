import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { BodyComponent } from './leaderboard/body.component';
import { ProblemsComponent } from './leaderboard/problems.component';
import {totalMarksPipe} from "./leaderboard/totalMarksPipe";
import {SorterPipe} from "./leaderboard/SorterPipe";
import {AngularFireModule} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyCrIFw4jbcK8WnxUVfYcLO6i45kSsKwMF8",
  authDomain: "mrnd-9a4ed.firebaseapp.com",
  databaseURL: "https://mrnd-9a4ed.firebaseio.com",
  projectId: "mrnd-9a4ed",
  storageBucket: "mrnd-9a4ed.appspot.com",
  messagingSenderId: "237703412089"
};

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    BodyComponent,
    ProblemsComponent,
    totalMarksPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
