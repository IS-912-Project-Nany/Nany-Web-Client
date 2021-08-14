import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-add-producto',
  templateUrl: './button-add-producto.component.html'
})
export class ButtonAddProductoComponent implements OnInit {
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
