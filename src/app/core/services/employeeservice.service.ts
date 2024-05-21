import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  //creating mock employess
  private employeeData : Employee[] = [
    {employeeId : 23001, employeeName : 'Raj Kapoor', gender: 'Male', department: 'HR'},
    {employeeId : 23002, employeeName : 'Jayesh Dey', gender: 'Male', department: 'AMS'},
    {employeeId : 23003, employeeName : 'Khushi Sharma', gender: 'Female', department: 'QA'},
    {employeeId : 23004, employeeName : 'Rishabh Jain', gender: 'Male', department: 'Development'},
 ];

  constructor() { }

  //getEmployeeData() will return all the employees
  getEmployeeData() : Employee[]{
    return this.employeeData;
  }

  //addEmployee() will push the new employee to the employeeData
  addEmployee(newEmployee : Employee){
    this.employeeData.push(newEmployee);
  }

  //getEmployeeById() will fetch the employee with a particular employee id
  getEmployeeById(id: number): Employee | undefined{
    return this.employeeData.find(emp=>emp.employeeId === id);
  }

  //updateEmployee() will update the exisiting employee
  updateEmployee(updatedEmployee : Employee){
    const index = this.employeeData.findIndex(emp=>emp.employeeId == updatedEmployee.employeeId);
    if(index !== -1){
      this.employeeData[index] = updatedEmployee;
      console.log("Employee details updated", updatedEmployee);
    }else{
      console.log("Employee not found");
    }
  }
}
