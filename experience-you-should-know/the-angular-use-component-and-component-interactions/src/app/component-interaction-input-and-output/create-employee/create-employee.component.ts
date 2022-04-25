import { Component } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  title = 'Create employee';
  employee: Employee = new Employee();
  createModel: Employee = new Employee();
  totalChoiceEmployee: number = 0;

  constructor() {
    this.employee = new Employee();
  }

  btAddEmployee() {
    this.employee.id = this.employee.id + 1;
    this.createModel = this.employee;
    this.employee = new Employee();
  }

  totalChoiceEmpolyee(total: number) {
    this.totalChoiceEmployee = total;
  }
}
