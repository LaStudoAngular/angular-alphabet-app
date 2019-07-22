import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharService} from '../../../service/char.service';
import {Char} from '../../../models/char.model';

@Component({
  selector: 'al-challenge-up',
  templateUrl: './challenge-up.component.html',
  styleUrls: ['./challenge-up.component.scss']
})
export class ChallengeUpComponent implements OnInit {
  char: Char;

  constructor(
    private route: ActivatedRoute,
    private charService: CharService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => this.char = this.charService.getChar(data.id));
  }

}
