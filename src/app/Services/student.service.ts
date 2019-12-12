import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  updateFlag: boolean = false;

  student: any = {
    id: '',
    name: '',
    Age: ''
  }

  Students: any = [
    { id: 1, name: "Vignesh", Age: 22 },
    { id: 2, name: "Thiru", Age: 40 },
    { id: 3, name: "Thahir", Age: 15 },
    { id: 4, name: "Thahir", Age: 15 },
  ];

  constructor() { }

  getStudents() {

  }


}
