import { RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LotteryComponent } from './lottery/lottery.component';
import { LotteryHistoryComponent } from './lottery-history/lottery-history.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const appRoutes=[
	{
		path: 'login',
		component: UserLoginComponent
	},
	{
		path: 'register',
		component: UserRegisterComponent
	},
	{
		path: 'profile',
		component: ProfileComponent
	},
	{
		path: 'lottery',
		component: LotteryComponent
	},
	{
		path: 'history',
		component: LotteryHistoryComponent
	},
	{
		path: 'forgetpwd',
		component: ForgetPwdComponent
	},
	// {
	// 	path: '**',
	// 	component: NotFoundComponent
	// },
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	}
]