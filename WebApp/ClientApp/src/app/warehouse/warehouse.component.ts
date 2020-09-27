import { Component, OnInit } from '@angular/core';
import { RestApi } from '../Core/Service/RestApi.service';
import { Employee } from '../Core/Interface/IEmployee';
import { Inventory } from '../Core/Interface/Inventory';
import { Warehouse } from '../Core/Interface/Warehouse';


@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  stocks: any;  //Inventory[];
  employees: any; //Employee[];

  warehouses: any; //Warehouse[];

  constructor(private restApi: RestApi) { }

  ngOnInit() {
    this.getAllWarehouses();
  }

  getAllEmployees() {
    this.restApi.getAllEmployees().subscribe(res => {
      this.employees = res;
    })
  }

  getAllWarehouses() {
    this.restApi.getAllWarehouse().subscribe(res => {
      this.warehouses = res;
    })
  }

  delete(warehouse: Warehouse) {
    this.restApi.deleteWarehouse(warehouse).subscribe(res => {
      alert(res.success);
    })
  }