import { Component, OnInit } from '@angular/core';
import { RestApi } from '../../Core/Service/RestApi.service';
import { Employee } from '../../Core/Interface/IEmployee';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RestApi } from '../../Core/Service/RestApi.service';

@Component({
  selector: 'app-employee-create-edit',
  templateUrl: './employee-create-edit.component.html',
  styleUrls: ['./employee-create-edit.component.css']
})
export class EmployeeCreateEditComponent implements OnInit {
  employee: Employee = {
    FullName: null,
    UserName: null,
    Id: null,
    Email: null,
    Updated: null,
    Created: null,
    PhoneNumber: null
  };

  type: string;

  constructor(private route: ActivatedRoute, private restApi: RestApi) {
    this.type = this.route.snapshot.paramMap.get('id');
    if (this.type !== 'new') {
      this.getId(this.type);
    }
  }

  ngOnInit() {
  }

  getId(id) {
    this.employee.Id = id;
    this.restApi.getEmployee(this.employee).subscribe(res => {
     // console.log(res);
    })
  }

  create = () => {
    this.restApi.createEmployee(this.employee).subscribe(res => {
      if (res.errors) {
        alert(res.title);
      }
      console.log(res.title);
    })
  }

  update = () => {
    this.restApi.updateEmployee(this.employee).subscribe(res => {
      console.log(res);
    })
  }

}
