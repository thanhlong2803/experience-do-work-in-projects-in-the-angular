import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

import { localStorageHelper } from 'src/app/localStorage/localStorageHelper';
import { Employee } from '../model/employee';


@Component({
  selector: 'app-employee-share-viewchild',
  templateUrl: './employee-share-viewchild.component.html',
  styleUrls: ['./employee-share-viewchild.component.css']
})
export class EmployeeShareViewChildComponent implements OnInit, OnChanges {
  @Input() employee = {} as Employee;

  employeeList: Array<Employee> = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.employee != undefined && changes.employee != null &&
      changes.employee.currentValue != changes.employee.previousValue) {
      var employee = changes.employee.currentValue;
      if (this.employee.firstname != undefined) {
        this.employeeList.push(employee);
        this.saveEmployee();
      }
    }
  }

  ngOnInit() {
    this.getEmployee();
  }

  btEditEmployee(employee: Employee) {
    this.editEmployee(employee);
  }

  btDeleteEmployee(employee: Employee) {
    this.deleteEmployee(employee);
  }

  private saveEmployee() {
    localStorageHelper.setItem('employeeList', this.employeeList);
  }

  private deleteEmployee(employee: Employee) {
    localStorageHelper.removeItem('employeeList');
    this.employeeList.splice(this.employeeList.findIndex((x: any) => x == employee), 1);
    this.saveEmployee();
  }

  private editEmployee(employee: Employee) {
    localStorageHelper.removeItem('employeeList');
    this.findIndexAndEdit(employee);
    this.saveEmployee();
  }

  private getEmployee() {
    var getAllUser = localStorageHelper.getItem<Array<Employee>>('employeeList');
    if (getAllUser != undefined && getAllUser != null && getAllUser.length > 0) {
      this.employeeList = getAllUser;     
    }
  }

  private findIndexAndEdit(employee: Employee) {
    this.employeeList.forEach(element => {
      if (element.id == employee.id) {
        element.firstname = employee.firstname;
        element.lastname = employee.lastname;
        element.address = employee.address;
      }
    });
  }

  choiceEmployee(): number {
    debugger
    return this.employeeList.filter(c => c.choiceEmployee == true).length;
  }
}
