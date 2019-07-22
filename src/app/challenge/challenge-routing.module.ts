import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChallengeComponent} from './challenge/challenge.component';
import {ChallengeUpComponent} from './challenge/challenge-up/challenge-up.component';

const routes: Routes = [
  { path: '', component: ChallengeComponent, children: [
      { path: ':id', component: ChallengeUpComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
