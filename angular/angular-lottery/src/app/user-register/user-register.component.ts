import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { User } from '../model/user-model';
import { UserRegisterService } from '../service/user-register.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public userInfo: User = new User();
  public userForm: FormGroup;
  checked = false;

  constructor(
    public fb: FormBuilder,
    public userRegisterService: UserRegisterService,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    // this.buildForm();
  }

  doRegister() {
      // this.userInfo = this.userForm.value;
      this.userRegisterService.register(this.userInfo)
        .subscribe(
          data => {
            this.router.navigateByUrl("/login");
          },
          error => {
            console.error(error);
          }
        );
    console.log(this.userInfo);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PrivacyPolicy, {
      width: '100vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'Privacy-Policy-Dialog',
  templateUrl: 'privacy-policy-dialog.html',
})
export class PrivacyPolicy {
  public company_name = "MG lottery";
  constructor(
    public dialogRef: MatDialogRef<PrivacyPolicy>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
