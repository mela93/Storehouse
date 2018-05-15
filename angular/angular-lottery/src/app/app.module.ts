import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent, PrivacyPolicy } from './user-register/user-register.component';
import { LotteryComponent, ThreeDDialog } from './lottery/lottery.component';
import { LotteryHistoryComponent } from './lottery-history/lottery-history.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { appRoutes } from './app.routes';
import { UserLoginService } from './service/user-login.service';
import { UserRegisterService } from './service/user-register.service';
import { LotteryService } from './service/lottery.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    LotteryComponent,
    LotteryHistoryComponent,
    ProfileComponent,
    ForgetPwdComponent,
    ThreeDDialog,
    PrivacyPolicy,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    MatGridListModule,
    AngularFontAwesomeModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    UserLoginService,
    UserRegisterService,
    LotteryService
  ],
  entryComponents: [LotteryComponent, ThreeDDialog, LotteryHistoryComponent, PrivacyPolicy],
  bootstrap: [AppComponent]
})
export class AppModule { }
