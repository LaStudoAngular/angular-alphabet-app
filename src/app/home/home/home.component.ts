import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'al-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'alphabet quiz';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick(): void {
    this.router.navigate(['challenge']);
  }

}
