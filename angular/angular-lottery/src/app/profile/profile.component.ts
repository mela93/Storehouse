import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public error : Error;
  public currentUser;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public userLoginService: UserLoginService
  ) { }

  ngOnInit() {
    this.userLoginService.currentUser
    .subscribe(
        data => {
            this.isLogin = this.userLoginService.isLogin(); 
        },
        error => {
            console.error(error);
        }
    )
    this.currentUser = this.userLoginService.getCurrentUser();
    console.log(this.currentUser);
  }

  public isLogin = this.userLoginService.isLogin();

}
