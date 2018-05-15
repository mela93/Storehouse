import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../service/user-login.service';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {
  public email="111@qq.com";
  public reset;

  constructor(
    public userLoginService: UserLoginService
  ) { }

  ngOnInit() {
    this.userLoginService.resetPwd
    .subscribe(
        data => {
            let code = data.status;
            if(code === 200){
              this.reset = true;
            }
            console.log(data);
        },
        error => {
            console.error(error);
        }
    )
  }
  
  public doReset():any {
    this.userLoginService.reset(this.email);
  }
}
