import { Component, OnInit } from '@angular/core';
import { TodoItem } from './dto/todo-item.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  items: TodoItem[] = [];

  ngOnInit(): void {
    this.initializeTodoItems();
  }

  private initializeTodoItems() : void{
    this.items.push(
      new TodoItem(1, 'Finish Homework', false),
      new TodoItem(2, 'Study for assignmennt', true),
      new TodoItem(3, 'Start home assignments', false),
      new TodoItem(4, 'Finish Homework', false),
      new TodoItem(5, 'Study for assignmennt', false),
      new TodoItem(6, 'Start home assignments', true),
      new TodoItem(7, 'Finish Homework', true),
      new TodoItem(8, 'Study for assignmennt', false),
      new TodoItem(9, 'Start home assignments', false),
    );
  }
}
