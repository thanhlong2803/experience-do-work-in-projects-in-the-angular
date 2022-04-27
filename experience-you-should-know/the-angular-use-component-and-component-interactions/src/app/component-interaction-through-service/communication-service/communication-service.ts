import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { localStorageHelper } from "src/app/localStorage/localStorageHelper";
import { Employee } from "../model/employee";


@Injectable()
export class CommunicationServiceComponent {
    private componentChangeData = new Subject();
    private componentChangeCreateNewData = new Subject<Array<Employee>>();

    componentChangeData$ = this.componentChangeData.asObservable();
    componentChangeCreateNewData$ = this.componentChangeCreateNewData.asObservable();

    getEmployee() {
        var getAllUser = localStorageHelper.getItem<Array<Employee>>('ViewChild');
        this.componentChangeCreateNewData.next(getAllUser);
    }

    createEmployee(employee: Employee) {
        var getAllUser = localStorageHelper.getItem<Array<Employee>>('ViewChild');
        getAllUser.push(employee)
        localStorageHelper.setItem('ViewChild', getAllUser);
        this.componentChangeCreateNewData.next(getAllUser)
    }

    onRefreshEmployee() {
        this.componentChangeData.next();
    }
}