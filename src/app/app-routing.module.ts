import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoanAppFormComponent} from './loan-app-form/loan-app-form.component';
import {AppComponent} from './app.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

const appRoutes: Routes = [
    { path: '', component: AppComponent},
 
  { path: 'loanForm', component: LoanAppFormComponent }
];
export class AppRoutingModule { 

  
}
