import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'alphabet quiz';

  constructor() { }

  ngOnInit() {
  }

}
