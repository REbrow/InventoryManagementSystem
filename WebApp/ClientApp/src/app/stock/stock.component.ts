import { Component, OnInit } from '@angular/core';
import { RestApi } from '../Core/Service/RestApi.service';
import { Inventory } from '../Core/Interface/Inventory';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: any; // Inventory[];
  employees: any; //Employee[];
  warehouses: any; //Warehouse[];

  constructor(private restApi: RestApi) { }

  ngOnInit() {
    this.getAllStocks();
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

  getAllStocks() {
    this.restApi.getAllInventory().subscribe(res => {
      this.stocks = res;
    })
  }

  delete(stock: Inventory) {
    this.restApi.deleteStock(stock).subscribe(res => {
      alert(res.success);
    })
  }


}
