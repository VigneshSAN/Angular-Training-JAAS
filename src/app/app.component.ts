import { Component } from '@angular/core';
import { StudentService } from './Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public router: Router) {

  }

  navigateStudentList() {
    this.router.navigate(['/student-list'])
  }

  navigateAddStudent() {
    this.router.navigate(['/add-student'])
  }

}
