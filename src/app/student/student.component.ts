import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  constructor(public studentService: StudentService) { }

  ngOnInit() {
  }

  editStudent(data) {

    let student: any = {
      id: data.id,
      name: data.name,
      Age: data.Age
    }

    this.studentService.updateFlag = true;

    this.studentService.student = student;

  }

  deleteStudents(id) {

    for(let i =0; i < this.studentService.Students.length; i++) {
      if(this.studentService.Students[i].id == id) {
        this.studentService.Students.splice(i,1);
      }
    }
  }

}
