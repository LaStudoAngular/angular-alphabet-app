import { Component, OnInit } from '@angular/core';
import { CharService } from '../../../service/char.service';
import { Char } from '../../../models/char.model';

@Component({
  selector: 'al-challenge-middle',
  templateUrl: './challenge-middle.component.html',
  styleUrls: ['./challenge-middle.component.scss']
})
export class ChallengeMiddleComponent implements OnInit {
  char: Char;
  letter: string;
  items: { char: string, checked: boolean }[];
  tooltipMessage = 'tooltip';

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

  onSelect(item: { char: string, checked: boolean }): void {
    const originChar = this.letter.toLowerCase();
    const testChar = item.char.toLowerCase();
    if (originChar === testChar) {
      item.checked = true;
      this.tooltipMessage = 'правильно';
    } else {
      this.tooltipMessage = 'не правильно';
    }
  }

}
