import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import { LotteryService } from '../service/lottery.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as $ from 'jquery';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {
  public error: Error;
  public luck_value = 0;
  state = 0;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public userLoginService: UserLoginService,
    public lotteryService: LotteryService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public _elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.loadingText();

    this.userLoginService.currentUser
      .subscribe(
        data => {
          this.isLogin = this.userLoginService.isLogin();
        },
        error => {
          console.error(error);
        }
      )

    this.lotteryService.getIcon
      .subscribe(
        data => {
          this.luck_value = data.luck_value;
          this.roll();

        },
        error => {
          console.error(error);
        }
      )

    this.lotteryService.checkIcon();
  }

  list = [
    { id: "a", value: "A" },
    { id: "b", value: "B" },
    { id: "c", value: "C" },
    { id: "d", value: "D" },
    { id: "e", value: "E" },
    { id: "f", value: "F" },
    { id: "g", value: "G" },
    { id: "h", value: "H" },
    { id: "i", value: "I" },
    { id: "j", value: "J" },
    { id: "k", value: "K" },
    { id: "l", value: "L" },
  ];
  list_choosed = [
    { id: "a", value: "A" },
    { id: "b", value: "B" }];
  checked=[];
  public item_result = { id: "", value: "" };
  public count_back = 0;
  public loadingText: any = () => {
    // setTimeout(() => { this.state = 1; }, 2000);
    // setTimeout(() => {
    //   if (this.state === 1) {
    //     this.state = 2;
    //   };
    // }, 4000);
    setTimeout(() => { 
      this.item_result = this.list[Math.floor(Math.random() * this.list.length)];
    }, 1000);

    // for (let i = 10; i >= 0; i--) {
    //   setTimeout(() => { this.count_back = i; }, (10 - i) * 1000);
    // }

  }
  saveUsername;
  disabled = false;
  selectedItems: number = 0;
  submitChoose() {
    this.disabled = true;
  }
  checkedState(event, checkBox, item) {
    if (checkBox.checked === true) {
      if (this.selectedItems < 2) {
        this.selectedItems++
      } else {
        checkBox.checked = false;
      }
      this.checked.push()
    } else if (this.selectedItems > 0) {
      this.selectedItems--;
    }
  }

  public isLogin = this.userLoginService.isLogin();

  public roll(): any {
    if (this.luck_value >= 100 && this.isLogin) {
      this.snackBar.open('You get a luck icon!', 'Ok', { duration: 2000, });
      this.luck_value -= 100;
    }
  }
  is_done = false;
  class_name;

  openDialog(): void {
    let dialogRef = this.dialog.open(ThreeDDialog, {
      width: '100vh', height: '70vh',
      data: { is_done: this.is_done, class_name: this.class_name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.is_done = result.is_done;
    });
  }



}

@Component({
  selector: 'Three-D-Plant-Dialog',
  templateUrl: 'three-d-plant-dialog.html'
})
export class ThreeDDialog {
  lettory_result;
  constructor(
    public dialogRef: MatDialogRef<ThreeDDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.genCode();
  }
  getLottery = () => {
    if (this.data.is_done === true) {
      return;
    } else {
      this.lettory_result = Math.floor(Math.random() * 100);
      this.data.is_done = true;
      if (this.lettory_result === this.code) {
        this.data.class_name = "success";
        alert("You win!")
      } else {
        this.data.class_name = "error";
        alert("Try next time!")
      }
    }
  }

  public code: Number;
  genCode(): any {
    this.code = Math.floor(Math.random() * 100);
    console.log(this.code);
  }

  returnCode = () => {
    return "this is!"
  }

}