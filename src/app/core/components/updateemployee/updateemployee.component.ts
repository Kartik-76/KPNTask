import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from '../../services/employeeservice.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
    employeeId : number = 0 ;
    employeeName : string = '';
    gender : string = '' ;
    department : string = '';

    constructor(private route: ActivatedRoute,private router:Router, private employeeService: EmployeeserviceService){}
    ngOnInit(): void {
      if (this.route.snapshot && this.route.snapshot.paramMap) {
          const idParam = +this.route.snapshot.paramMap.get('id')!;
          if (!isNaN(idParam)) {
              const employee = this.employeeService.getEmployeeById(idParam);
              if (employee) {
                  this.employeeId = employee.employeeId;
                  this.employeeName = employee.employeeName;
                  this.gender = employee.gender;
                  this.department = employee.department;
              } else {
                  console.log("Employee with ID not found");
                  this.router.navigate(['/']);
              }
          } else {
              console.log("Invalid ID parameter");
              this.router.navigate(['/']);
          }
      } else {
          console.log("Route snapshot or paramMap is null");
          this.router.navigate(['/']);
      }
  }

    updateEmployee(){
      const updatedEmployee = {
        employeeId : this.employeeId ,
        employeeName : this.employeeName,
        gender : this.gender,
        department :this.department
      };
      this.employeeService.updateEmployee(updatedEmployee);
      this.router.navigate(['/']);
    }
}
