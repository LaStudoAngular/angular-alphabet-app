import { Component, OnInit } from '@angular/core';
import { CharService } from '../../../service/char.service';
import { Char } from '../../../models/char.model';

@Component({
  selector: 'al-challenge-down',
  templateUrl: './challenge-down.component.html',
  styleUrls: ['./challenge-down.component.scss']
})

export class ChallengeDownComponent implements OnInit {
  chars: Char[];
  currentID = '';

  constructor(
    private charService: CharService,
  ) { }

  ngOnInit() {
    this.chars = this.charService.getChars();
  }

  onSelect(char: Char) {
    this.currentID = this.getID(char);
  }

  getID(char: Char): string {
    return char.letter.charAt(0).toLowerCase();
  }

}
