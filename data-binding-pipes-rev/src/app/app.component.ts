import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-pipes-rev';
  birthday: Date = new Date(2021,11,13);

  isShortDate : boolean = true;

  toggleFormat(): void{
    this.isShortDate = !this.isShortDate;
  }
}
