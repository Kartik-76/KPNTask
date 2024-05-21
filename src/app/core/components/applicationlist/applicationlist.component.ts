import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeserviceService } from '../../services/employeeservice.service';

@Component({
  selector: 'app-applicationlist',
  templateUrl: './applicationlist.component.html',
  styleUrls: ['./applicationlist.component.css']
})
export class ApplicationlistComponent implements OnInit {
  employeeData : Employee[] = [];
  showTable : boolean = false;

  constructor(private employeeService : EmployeeserviceService){}

  ngOnInit(): void {
    this.employeeData = this.employeeService.getEmployeeData();
    this.showTable = this.employeeData.length > 0;
  }
  onDelete(employee : Employee){
    this.employeeData = this.employeeData.filter(emp=>emp.employeeId !== employee.employeeId);
    console.log("Employee Details Deleted Successfully", employee);
  }
}

