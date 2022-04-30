import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EmployeeShareComponent } from './component-interaction-input-and-output/employee-share/employee-share.component';
import { CreateEmployeeComponent } from './component-interaction-input-and-output/create-employee/create-employee.component';
import { CreateEmployeeUsingViewChildComponent } from './component-interaction-viewchild/create-employee-viewchild/create-employee-viewchild.component';
import { EmployeeShareViewChildComponent } from './component-interaction-viewchild/employee-share-viewchild/employee-share-viewchild.component';
import { CreateEmployeeUsingServiceComponent } from './component-interaction-through-service/create-employee-service/create-employee-service.component';
import { EmployeeShareServiceComponent } from './component-interaction-through-service/employee-share-service/employee-share-service.component';
import { CommunicationServiceComponent } from './component-interaction-through-service/communication-service/communication-service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeShareComponent,
    CreateEmployeeComponent,

    CreateEmployeeUsingViewChildComponent,
    EmployeeShareViewChildComponent,

    CreateEmployeeUsingServiceComponent,
    EmployeeShareServiceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CommunicationServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
