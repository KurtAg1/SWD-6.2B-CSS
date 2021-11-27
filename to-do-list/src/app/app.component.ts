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
    this.items.push(
      new TodoItem(1, 'Finish Homework', false),
      new TodoItem(2, 'Study for assignmennt', false),
      new TodoItem(3, 'Start home assignments', true),
      new TodoItem(1, 'Finish Homework', false),
      new TodoItem(2, 'Study for assignmennt', false),
      new TodoItem(3, 'Start home assignments', true),
    );
  }
}
