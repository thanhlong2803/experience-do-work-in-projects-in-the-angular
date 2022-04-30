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
    //When create it show data to call function services.
    this.communicationServiceComponent.componentChangeCreateNewData$.subscribe(event => {
      this.getEmployee();
    })
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

  private saveEmployee(employee: Employee) {
    this.communicationServiceComponent.createEmployee(employee)
  }

  private deleteEmployee(employee: Employee) {
    localStorageHelper.removeItem('Services');
    this.employeeList.splice(this.employeeList.findIndex((x: any) => x == employee), 1);

  }

  private editEmployee(employee: Employee) {
    localStorageHelper.removeItem('Services');
    this.findIndexAndEdit(employee);
  }

  private getEmployee() {
    var getAllUser = localStorageHelper.getItem<Array<Employee>>('Services');
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

  choiceEmployee() {
    let totalEmloyee = this.employeeList.filter(c => c.choiceEmployee == true).length;
    this.communicationServiceComponent.totalEmployee(totalEmloyee);
  }
}
