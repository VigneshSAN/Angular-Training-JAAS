import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(public studentService: StudentService) {

  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  addStudents(pname, page) {

    let student: any = {
      id: this.studentService.Students.length + 1,
      name: pname,
      Age: page
    }

    this.studentService.Students.push(student);

    this.flush();
  }

  updateStudent(id, name, age) {

    for (let i = 0; i < this.studentService.Students.length; i++) {

      if (this.studentService.Students[i].id == id) {
        this.studentService.Students[i].name = name;
        this.studentService.Students[i].Age = age;

        this.studentService.updateFlag = false;
        this.flush();
      }

    }
  }

  flush() {
    this.studentService.student = {
      id: '',
      name: '',
      Age: ''
    }
  }
}
