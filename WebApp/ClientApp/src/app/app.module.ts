import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from '../app/employees/employees.component';
import { WarehouseComponent } from '../app/warehouse/warehouse.component';
import { StockComponent } from '../app/stock/stock.component';

import { RestApi } from './Core/Service/RestApi.service';
import { DefaultInterceptor } from './Core/Service/httpInterceptor';
import { EmployeeCreateEditComponent } from '../app/employees/employee-create-edit/employee-create-edit.component';
import { from } from 'rxjs';
import { WarehouseCreateEditComponent } from './warehouse/warehouse-create-edit/warehouse-create-edit.component';
import { StockCreateEditComponent } from './stock/stock-create-edit/stock-create-edit.component';
const INTERCEPTOR_PROVIDES = [{ provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    EmployeesComponent,
    WarehouseComponent,
    StockComponent,
    EmployeeCreateEditComponent,
    WarehouseCreateEditComponent,
    StockCreateEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'employees/:id', component: EmployeeCreateEditComponent },
      { path: 'warehouse', component: WarehouseComponent },
      { path: 'warehouse/:id', component: WarehouseCreateEditComponent },
      { path: 'inventory', component: StockComponent },
      { path: 'inventory/:id', component: StockCreateEditComponent },

    ])
  ],
  providers: [RestApi, ...INTERCEPTOR_PROVIDES,],
  bootstrap: [AppComponent]
})
export class AppModule { }
