import { Component, OnInit } from '@angular/core';
import { RestApi } from '../Core/Service/RestApi.service';
import { Employee } from '../Core/Interface/IEmployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any; // Employee[];

  constructor(private restApi: RestApi) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.restApi.getAllEmployees().subscribe(res => {
      this.employees = res; 
      console.log(this.employees);
    })
  }

}
