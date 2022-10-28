import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpComponent } from './components/pages/create-emp/create-emp.component';
import { EmploylistComponent } from './components/pages/employlist/employlist.component';

const routes: Routes = [
   {path:"",component:EmploylistComponent},
  {path:"create",component:CreateEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
