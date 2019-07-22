import { Component, OnInit } from '@angular/core';
import { CharService } from '../../../service/char.service';
import { Char } from '../../../models/char.model';
import {Item} from '../../../interfaces/item';

@Component({
  selector: 'al-challenge-middle',
  templateUrl: './challenge-middle.component.html',
  styleUrls: ['./challenge-middle.component.scss']
})
export class ChallengeMiddleComponent implements OnInit {
  char: Char;
  letter: string;
  items: Item[];
  tooltipMessage = '';
  tooltipChecked = false;
  tooltipShow = false;

  constructor(
    private charService: CharService
  ) { }

  ngOnInit() {
    this.charService.getSingleChar().subscribe((data: Char) => {
      this.char = data;
      this.letter = this.char.letter.charAt(0).toLowerCase();
      this.items = this.char.quiz[
        Math.floor(Math.random() * this.char.quiz.length)
        ].split('').map((el: string) => {
          return {
            char: el,
            checked: false
          };
      });
    });
  }

  onSelect(item: Item): void {
    const originChar = this.letter.toLowerCase();
    const testChar = item.char.toLowerCase();
    this.tooltipShow = true;
    if (originChar === testChar) {
      item.checked = true;
      this.tooltipMessage = 'Правильно';
      this.tooltipChecked = true;
    } else {
      this.tooltipMessage = 'Не правильно';
      this.tooltipChecked = false;
    }
    setTimeout(() => { this.tooltipShow = false; }, 1000);
  }

}
