import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserLoginService } from './service/user-login.service';
import { UserRegisterService } from './service/user-register.service';
import { fadeIn } from './animations/fade-in';

import { User } from './model/user-model';
import { merge } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
		fadeIn
	]
})
export class AppComponent {
	title = 'app';
	public currentUser: User;

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public userLoginService: UserLoginService,
		public userRegisterService: UserRegisterService
	) {

	}

	ngOnInit() {

		this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

		this.userLoginService.currentUser.pipe(
			merge(this.userRegisterService.currentUser)
		).subscribe(
			data => {
				this.currentUser = data;
				let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
				let routerState: RouterState = this.router.routerState;
				let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

				// console.log(activatedRouteSnapshot);
				// console.log(routerState);
				// console.log(routerStateSnapshot);
				this.isLogin = this.userLoginService.isLogin();
				//如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
				if (routerStateSnapshot.url.indexOf("/login") != -1) {
					this.router.navigateByUrl("/login");
				}

			},
			error => console.error(error)
		);

	}

	public isLogin = this.userLoginService.isLogin();

	toggle(button: any) {
		console.log(button);
	}

	public doLogout(): void {
		this.userLoginService.logout();
		console.log('退出成功');
		// this.router.navigateByUrl("");
	}
	show_egg = false;
	showEgg(): any {
		if (this.show_egg == false) {
			this.show_egg = true;
			setTimeout( () => { this.show_egg = false; }, 5000);
		} else if (this.show_egg == true) {
			this.show_egg = false;
		}
	}
}
