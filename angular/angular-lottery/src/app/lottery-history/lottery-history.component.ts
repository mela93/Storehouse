import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lottery-history',
  templateUrl: './lottery-history.component.html',
  styleUrls: ['./lottery-history.component.css']
})
export class LotteryHistoryComponent implements OnInit {
  public error : Error;

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
  }

  public isLogin = this.userLoginService.isLogin();
  

}
