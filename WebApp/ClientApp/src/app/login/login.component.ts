import { Component, OnInit, Inject } from '@angular/core';
import { RestApi } from '../Core/Service/RestApi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginParams:any;
  constructor(public restapiClass: RestApi) { }

  ngOnInit() {
  }

  login = (): void => {
    const body = { username: this.loginParams.username, password: this.loginParams.password };
    this.restapiClass.login(body).subscribe(res => {
      //if (res.error) {
      //  return;
      //}
      console.log(res);
    });
    
  }

}
