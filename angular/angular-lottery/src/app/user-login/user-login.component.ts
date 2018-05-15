import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import { Observable } from 'rxjs';

import { User } from '../model/user-model';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    public user:User = new User();
    public error : Error;

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public userLoginService: UserLoginService
    ) { }

    ngOnInit() {
        let activatedRouteSnapshot:ActivatedRouteSnapshot=this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        this.userLoginService.currentUser
        .subscribe(
            data => {
                this.isLogin = this.userLoginService.isLogin();
                console.log(data)
            },
            error => {
                console.error(error);
            }
        )
    }

    public doLogin():void{
        console.log(this.user);
        this.userLoginService.login(this.user);
    }

    public doLogout():void{
        this.userLoginService.logout();
        // this.router.navigateByUrl("/home");
    }

    public isLogin = this.userLoginService.isLogin();
}
