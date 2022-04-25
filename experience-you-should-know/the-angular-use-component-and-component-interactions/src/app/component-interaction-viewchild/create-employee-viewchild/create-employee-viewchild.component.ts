import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EmployeeShareViewChildComponent } from '../employee-share-viewchild/employee-share-viewchild.component';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-create-employee-viewchild',
  templateUrl: './create-employee-viewchild.component.html',
  styleUrls: ['./create-employee-viewchild.component.css'],
  
  
})
export class CreateEmployeeUsingViewChildComponent implements AfterViewInit {
  title = 'Create employee';
  employee: Employee = new Employee();
  createModel: Employee = new Employee();
  totalChoiceEmployee: number = 0;

  @ViewChild('viewChildRefName', {read: EmployeeShareViewChildComponent})  employeeShareViewChildComponent!: EmployeeShareViewChildComponent;

  constructor() {
    this.employee = new Employee();
  }

  btAddEmployee() {
    this.employee.id = this.employee.id + 1;
    this.createModel = this.employee;
    this.employee = new Employee();
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("primaryColorSample:", this.employeeShareViewChildComponent);
  }  

  totalChoiceEmpolyee() {
    debugger;
    this.totalChoiceEmployee = this.employeeShareViewChildComponent.choiceEmployee();
  }

}

