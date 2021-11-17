import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {

  starWidth: number = 0;
  @Input() rating: number = 0;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * (120/5);
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.notify.emit("Rating " + this.rating + " has been clicked");
  }

}
