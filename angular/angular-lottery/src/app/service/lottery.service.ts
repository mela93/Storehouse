import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';

import { User } from '../model/user-model';

@Injectable()
export class LotteryService {
  public checkIconURL = 'data/lottery.json';

  public get_icon:  Subject<any> = new Subject<any>();

  constructor(public http:Http){}


  public get getIcon():Observable<any>{
    return this.get_icon.asObservable();
}

  public checkIcon(){
    return this.http
      .get(this.checkIconURL).pipe(
        map((response: Response) => {
          let icon = response.json();
          this.get_icon.next(Object.assign({}, icon));
          return response;
        })
      )
      .subscribe(
        data => {
          console.log("success>" + data);
        },
        error => {
          console.error(error);
        }
      );
  }
}
