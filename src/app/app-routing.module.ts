import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationlistComponent } from './core/components/applicationlist/applicationlist.component';
import { NewemployeeapplicationComponent } from './core/components/newemployeeapplication/newemployeeapplication.component';
import { UpdateemployeeComponent } from './core/components/updateemployee/updateemployee.component';

const routes: Routes = [
  {
    path:'',
    component: ApplicationlistComponent
  },
  {
    path: 'addnewemployee',
    component: NewemployeeapplicationComponent
  },
  {
    path: 'updateapplication/:id',
    component: UpdateemployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
