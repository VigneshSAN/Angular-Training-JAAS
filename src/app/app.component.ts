import { Component } from '@angular/core';
import { StudentService } from './Services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  student: any = {
    name: '',
    Age: ''
  }

  constructor(public studentService: StudentService) {

  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  addStudents() {
    this.studentService.Students.push(this.student);
  }

}
