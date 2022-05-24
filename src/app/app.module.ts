import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEnquiryComponent } from './project-enquiry/project-enquiry.component';
import { ProjectTypesService } from './project-types.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { BoldPipe } from './bold.pipe';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SinghComponent } from './singh/singh.component';
import { EmpDashboradComponent } from './Newchanges/emp-dashborad/emp-dashborad.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectEnquiryComponent,
    EmployeeComponent,
    EmployeeListComponent,
    BoldPipe,
    AddEmployeeComponent,
<<<<<<< HEAD
    SinghComponent
=======
    EmpDashboradComponent
>>>>>>> ead983671cb636682c4fe0aeffef02e500ca585d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProjectTypesService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
