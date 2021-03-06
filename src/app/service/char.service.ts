import { Injectable } from '@angular/core';
import { Char } from '../models/char.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CharService {
  chars: Char[] = [];
  char$ = new BehaviorSubject<Char>(new Char('Aa', 'apple', '../../assets/images/image-01.jpg', [
    'трактор',
    'армавир',
    'амбразура'
  ], true));

  getChars(): Char[] {
    if (!JSON.parse(localStorage.getItem('chars'))) {
      this.initChars();
    }
    return JSON.parse(localStorage.getItem('chars'));
  }

  getChar(id: string): Char {
    const char: Char = JSON.parse(localStorage.getItem('chars')).find((el: Char) => el.letter.charAt(0).toLowerCase() === id);
    this.char$.next(char);
    return char;
  }

  getSingleChar(): Observable<Char> {
    return this.char$.asObservable();
  }

  private initChars(): void {
    const chars: Char[] = [
      new Char( 'Аа', 'арбуз', '../../assets/images/image-01.jpg', [
        'трактор',
        'армавир',
        'амбразура'
      ], true),
      new Char( 'Бб', 'бабочка', '../../assets/images/image-02.jpg', [
        'баклажан',
        'барбекю',
        'бомба'
      ], false),
      new Char( 'Вв', 'виноград', '../../assets/images/image-03.jpg', [
        'водонос',
        'подводник',
        'аврал'
      ], false),
      new Char('Гг', 'гриб', '../../assets/images/image-04.jpg', [
        'радуга',
        'кенгуру',
        'горбуша'
      ], false),
      new Char('Дд', 'дерево', '../../assets/images/image-05.jpg', [
        'дуб',
        'долото',
        'двойка'
      ], false)
    ];
    localStorage.setItem('chars', JSON.stringify(chars));
  }
}
