import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { localStorageHelper } from "src/app/localStorage/localStorageHelper";
import { Employee } from "../model/employee";


@Injectable()
export class CommunicationServiceComponent {
    private componentChangeData = new Subject();
    private componentChangeCreateNewData = new Subject<Array<Employee>>();
    private totalWhenChoiceEmployee = new Subject<number>();

    componentChangeData$ = this.componentChangeData.asObservable();
    componentChangeCreateNewData$ = this.componentChangeCreateNewData.asObservable();
    totalWhenChoiceEmployee$ = this.totalWhenChoiceEmployee.asObservable();

    createEmployee(employee: Employee) {
        var getAllEmployee = localStorageHelper.getItem<Array<Employee>>('Services');
        if (getAllEmployee.length > 0) {
            getAllEmployee.push(employee);
            localStorageHelper.setItem('Services', getAllEmployee);
            this.componentChangeCreateNewData.next(getAllEmployee)
        }
        else {
            let employees = new Array<Employee>();
            employees.push(employee);
            localStorageHelper.setItem('Services', employees);
        }
    }

    totalEmployee(total: number) {
        this.totalWhenChoiceEmployee.next(total);
    }
}