import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';

import { User } from '../model/user-model';

@Injectable()
export class UserLoginService {
  public userLoginURL = 'data/user-login.json';
  public forgetPwdURL = 'data/forget-pwd.json';
  public subject: Subject<User> = new Subject<User>();
  public reset_pwd:  Subject<any> = new Subject<any>();
  constructor(public http:Http){}

  public get currentUser():Observable<User>{
      return this.subject.asObservable();
  }

  public get resetPwd():Observable<any>{
    return this.reset_pwd.asObservable();
}

  public login(user:User){
    return this.http
            .get(this.userLoginURL).pipe(
              map((response: Response) => {
                let user = response.json();
                console.log("user object>"+user);
                if(user && user.token){
                  localStorage.setItem("currentUser",JSON.stringify(user));
                  this.subject.next(Object.assign({},user));
                }
                return response;
              })
            )
            .subscribe(
                data => {
                    console.log("login success>"+data);
                },
                error => {
                    console.error(error);
                }
            );
  }

  public reset(any){
    return this.http
            .get(this.forgetPwdURL).pipe(
              map((response: Response) => {
                let code = response.json();
                this.reset_pwd.next(Object.assign({},code));
                return response;
              })
            )
            .subscribe(
                data => {
                    console.log("Code>"+data);
                },
                error => {
                    console.error(error);
                }
            );
  }

  public logout():void{
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }

  public getCurrentUser():any{
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  public isLogin():any{
    return this.getCurrentUser() != null;
  }
}
