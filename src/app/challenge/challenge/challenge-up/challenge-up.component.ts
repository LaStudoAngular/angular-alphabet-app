import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharService } from '../../../service/char.service';
import { Char } from '../../../models/char.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'al-challenge-up',
  templateUrl: './challenge-up.component.html',
  styleUrls: ['./challenge-up.component.scss']
})

export class ChallengeUpComponent implements OnInit, OnDestroy {
  char: Char;
  private unsubscribe$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private charService: CharService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => this.char = this.charService.getChar(data.id));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
