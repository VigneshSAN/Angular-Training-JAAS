import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  Students: any = [
    { name: "Vignesh", Age: 22},
    { name: "Thiru", Age: 40},
    { name: "Thahir", Age: 15},
    { name: "Thahir", Age: 15},
  ];

  constructor() { }

  getStudents() {
    
  }


}
