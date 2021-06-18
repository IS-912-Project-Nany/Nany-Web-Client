import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  counter: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  plusProduct() {
    this.counter++;
  }

  minusProduct() {
    this.counter--;
  }

}
