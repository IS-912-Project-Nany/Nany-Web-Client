import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-add-product',
  templateUrl: './button-add-product.component.html'
})
export class ButtonAddProductComponent implements OnInit {
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
