import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  students;
  
  getStudent(): object{
    this.students = {
      studNo: this.studNo,
      studFname: this.studFname,
      studLname: this.studLname,
      studProg: this.studProg,
      studYr: this.studYr
    };
    
    this.studNo = null;
    this.studFname = null;
    this.studLname = null;
    this.studProg = null;
    this.studYr = null;
    return this.students;
  }

  constructor() { }

  ngOnInit() {
  }

}