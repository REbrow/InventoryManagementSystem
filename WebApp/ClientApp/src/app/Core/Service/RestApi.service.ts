import { Observable } from 'rxjs';
import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApi {
  baseUrlUri: string;
  constructor(private http: HttpClient, private injector: Injector,
    @Inject('BASE_URL') baseUrl: string) {
    this.baseUrlUri = baseUrl;
  }

  login(body) {
    return this.http.post(this.baseUrlUri+'/login', body);
  }

  //EMPLOYEES

  getAllEmployees() {
    return this.http.get(this.baseUrlUri+'employee/all', {});
  }

  getEmployee(body) {
    return this.http.post(this.baseUrlUri + 'employee/', body);
  }

  createEmployee(body) {
    return this.http.post(this.baseUrlUri+'employee/new', body);
  }

  updateEmployee(body) {
    return this.http.post(this.baseUrlUri+'employee/update', body);
  }

  deleteEmployee(id) {
    return this.http.delete(this.baseUrlUri+'employee'+id);
  }

  //STOCKS

  getAllInventory() {
    return this.http.get(this.baseUrlUri+'stock/all', {});
  }

  getStock(body) {
    return this.http.post(this.baseUrlUri + 'stock', body);
  }

  createStock(body) {
    return this.http.post(this.baseUrlUri+'stock/new', body);
  }

  updateStock(body) {
    return this.http.post(this.baseUrlUri+'stock/update', body);
  }

  deleteStock(id) {
    return this.http.delete(this.baseUrlUri+'stock/delete'+id);
  }

  //WAREHOUSE

  getAllWarehouse() {
    return this.http.get(this.baseUrlUri+'warehouse/all', {});
  }

  getWarehouse(body) {
    return this.http.post(this.baseUrlUri + 'warehouse', body);
  }

  createWarehouse(body) {
    return this.http.post(this.baseUrlUri+'warehouse/new', body);
  }

  updateWarehouse(body) {
    return this.http.post(this.baseUrlUri+'warehouse/update', body);
  }

  deleteWarehouse(id) {
    return this.http.delete(this.baseUrlUri+'warehouse'+id);
  }

  //DASHBOARD STATUS

  getDashboardCounts() {
    return this.http.get(this.baseUrlUri+'/status', {});
  }

}
