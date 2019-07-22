import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeUpComponent } from './challenge/challenge-up/challenge-up.component';
import { ChallengeMiddleComponent } from './challenge/challenge-middle/challenge-middle.component';
import { ChallengeDownComponent } from './challenge/challenge-down/challenge-down.component';


@NgModule({
  declarations: [ChallengeComponent, ChallengeUpComponent, ChallengeMiddleComponent, ChallengeDownComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule
  ]
})
export class ChallengeModule { }
