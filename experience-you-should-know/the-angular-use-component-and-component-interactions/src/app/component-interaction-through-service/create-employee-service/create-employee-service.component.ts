import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommunicationServiceComponent } from '../communication-service/communication-service';
import { Employee } from '../model/employee';



@Component({
  selector: 'app-create-employee-service',
  templateUrl: './create-employee-service.component.html',
  styleUrls: ['./create-employee-service.component.css'],
})
export class CreateEmployeeUsingServiceComponent {
  title = 'Create employee';
  employee: Employee = new Employee();
  createModel: Employee = new Employee();
  totalChoiceEmployee: number = 0;

  constructor(private communicationServiceComponent: CommunicationServiceComponent) {
    this.employee = new Employee();

    //load page next Subject Called service return total number success
    this.communicationServiceComponent.totalWhenChoiceEmployee$.subscribe(event => {
       this.totalChoiceEmployee = event;
    })

  }

  btAddEmployee() {
    this.employee.id = this.employee.id + 1;
    this.createModel = this.employee;
    this.communicationServiceComponent.createEmployee(this.createModel);
    this.employee = new Employee();
  }

}

