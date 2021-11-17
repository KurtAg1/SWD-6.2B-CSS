import { Component, OnInit } from '@angular/core';
import { Student } from './dto/student.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'improving-components-rev';
  students: Student[] = [];

  ngOnInit(): void {
    this.students.push(
      new Student("11111M", "https://dummyimage.com/200x200/000/ffffff&text=Joe+Borg", "Joe", "Borg", 20),
      new Student("22222M", "https://dummyimage.com/200x200/000/ffffff&text=Peter+Attard", "Peter", "Attard", 55),
      new Student("33333M", "https://dummyimage.com/200x200/000/ffffff&text=Jane+Portelli", "Jane", "Portelli", 75),
      new Student("44444M", "https://dummyimage.com/200x200/000/ffffff&text=Jill+Zahra", "Jill", "Zahra", 88)
    );
  }

}
