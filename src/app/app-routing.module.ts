import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpDashboradComponent } from './Newchanges/emp-dashborad/emp-dashborad.component';
import { ProjectEnquiryComponent } from './project-enquiry/project-enquiry.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FeaturesComponent } from './features/features.component';
import { SinghComponent } from './singh/singh.component';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  {path:"projects",component:ProjectListComponent},
  {path:"project-enquiry",component:ProjectEnquiryComponent},
  {path:"employee-list",component:EmployeeListComponent},
  {path:"add-employee",component:AddEmployeeComponent},
  {path:"features",Component:FeaturesComponent},
  {path:"singh",component:SinghComponent},
  {path:"emp-dashborad",component:EmpDashboradComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
