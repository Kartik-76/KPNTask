import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeserviceService } from '../../services/employeeservice.service';

@Component({
  selector: 'app-newemployeeapplication',
  templateUrl: './newemployeeapplication.component.html',
  styleUrls: ['./newemployeeapplication.component.css']
})
export class NewemployeeapplicationComponent {
  employeeId : number = 0;
  employeeName : string = ' ';
  gender :string = '';
  department : string = '';

 constructor(private empservice : EmployeeserviceService, private router: Router){}
 onSubmit(){
  const newEmployee : Employee = {
    employeeId : this.employeeId,
    employeeName : this.employeeName,
    gender : this.gender,
    department : this.department

    
  };
  this.empservice.addEmployee(newEmployee);
  this.router.navigateByUrl('/');
 }

}
