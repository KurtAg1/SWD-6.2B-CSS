import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../dto/item.dto';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {

  @Input() item: Item = new Item(0, "N/A", 0);
  @Output() onPurchase: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.onPurchase.emit(this.item.price);
  }

}
