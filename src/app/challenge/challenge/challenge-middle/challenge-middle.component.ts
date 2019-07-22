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
  items: string[];

  constructor(
    private charService: CharService
  ) { }

  ngOnInit() {
    this.charService.getSingleChar().subscribe((data: Char) => {
      this.char = data;
      this.letter = this.char.letter.charAt(0).toLowerCase();
      this.items = this.char.quiz[
        Math.floor(Math.random() * this.char.quiz.length)
        ].split('');
    });
  }

  onSelect(item: Char): void {
    console.log(item);
  }

}
