import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstValue: number = 0;
  secondValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): number{
    return this.firstValue * this.secondValue;
  }

}
