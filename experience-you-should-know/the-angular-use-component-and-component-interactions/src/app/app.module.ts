import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EmployeeShareComponent } from './component-interaction-input-and-output/employee-share/employee-share.component';
import { CreateEmployeeComponent } from './component-interaction-input-and-output/create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeShareComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
