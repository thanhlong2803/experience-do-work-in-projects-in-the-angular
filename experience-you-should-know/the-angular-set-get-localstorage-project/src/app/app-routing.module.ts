import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootrapAndLocalStorageComponent } from './bootstrap-localStorage/bootstrap-localStorage.component';

const routes: Routes = [
  { path: '',component: BootrapAndLocalStorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
