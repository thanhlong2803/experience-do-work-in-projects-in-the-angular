import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

import { localStorageHelper } from 'src/app/localStorage/localStorageHelper';
import { CommunicationServiceComponent } from '../communication-service/communication-service';
import { Employee } from '../model/employee';


@Component({
  selector: 'app-employee-share-service',
  templateUrl: './employee-share-service.component.html',
  styleUrls: ['./employee-share-service.component.css']
})
export class EmployeeShareServiceComponent implements OnInit {
  @Input() employee = {} as Employee;

  employeeList: Array<Employee> = [];

  constructor(private communicationServiceComponent: CommunicationServiceComponent) {
     //load page next Subject 
     this.communicationServiceComponent.componentChangeData$.subscribe(event => {
       debugger
       this.communicationServiceComponent.getEmployee();
    })
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.employee != undefined && changes.employee != null &&
      changes.employee.currentValue != changes.employee.previousValue) {
      var employee = changes.employee.previousValue;
      if (employee.firstname != undefined) {
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
    this.communicationServiceComponent.
  }

  private deleteEmployee(employee: Employee) {
    localStorageHelper.removeItem('ViewChild');
    this.employeeList.splice(this.employeeList.findIndex((x: any) => x == employee), 1);
    this.saveEmployee();
  }

  private editEmployee(employee: Employee) {
    localStorageHelper.removeItem('ViewChild');
    this.findIndexAndEdit(employee);
    this.saveEmployee();
  }

  private getEmployee() {
    var getAllUser = localStorageHelper.getItem<Array<Employee>>('ViewChild');
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
    return this.employeeList.filter(c => c.choiceEmployee == true).length;
  }
}
