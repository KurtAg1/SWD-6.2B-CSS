import { Component, OnInit } from '@angular/core';
import { Item } from './dto/item.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  total: number = 0;
  items: Item[] = [];

  ngOnInit(): void {
    this.initializeItems();  
  }

  initializeItems(){
    this.items.push(
      new Item(
        1,
        "Keyboard",
        99.99,
      ),
      new Item(
        2,
        "Mouse",
        69.99,
      ),
      new Item(
        3,
        "Monitor",
        230,
      ),
      new Item(
        4,
        "Headset",
        120,
      ),
    );
  }

  onPurchase(price: number): void{
    this.total += price;
  }

}
