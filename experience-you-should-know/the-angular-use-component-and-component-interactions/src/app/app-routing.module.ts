import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './component-interaction-input-and-output/create-employee/create-employee.component';
import { CreateEmployeeUsingViewChildComponent } from './component-interaction-viewchild/create-employee-viewchild/create-employee-viewchild.component';

const routes: Routes = [
  {path:'' , component : CreateEmployeeComponent},
  {path:'viewchild' , component : CreateEmployeeUsingViewChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
