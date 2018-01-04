import { Component } from '@angular/core';
@Component({
    selector: 'employee-info',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
  })
export class EmployeeComponent{
    id:number=35823;
    name:string="Praveen";
    email:string="praveenS2@hexaware.com";
}