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
  tooltip = {
    message: '',
    checked: false,
    show: false,
    timer: 1000,
    success: 'Правильно',
    mistake: 'Не правильно'
  };

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
    this.tooltip.show = true;
    if (originChar === testChar) {
      item.checked = true;
      this.tooltip.message = this.tooltip.success;
      this.tooltip.checked = true;
    } else {
      this.tooltip.message = this.tooltip.mistake;
      this.tooltip.checked = false;
    }
    setTimeout(() => { this.tooltip.show = false; }, this.tooltip.timer);
  }

}
