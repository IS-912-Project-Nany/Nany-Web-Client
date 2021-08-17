import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-add-producto',
  templateUrl: './button-add-producto.component.html'
})
export class ButtonAddProductoComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  counter: number = 1
  
  constructor() { }

  ngOnInit(): void {
    this.onChange.emit(this.counter);
  }

  plusProduct() {
    this.counter++;
    this.onChange.emit(this.counter);
  }

  minusProduct() {
    this.counter--;
    this.onChange.emit(this.counter);
  }

}
