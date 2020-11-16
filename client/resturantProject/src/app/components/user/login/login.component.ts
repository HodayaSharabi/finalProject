import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Login } from 'src/app/shared/modals/login';
import { Visitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Visiters } from 'src/app/shared/modals/visiters';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  hide = true;
  formGroupLogin: FormGroup;
  loginData: Login = new Login();

  constructor(private _bottomSheet: MatBottomSheet,public userService: UserService, public router: Router, private _formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.formGroupLogin = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginData.password = this.formGroupLogin.controls["password"].value;
    this.loginData.username = this.formGroupLogin.controls["username"].value;
  }


  login() {
    this._bottomSheet.dismiss()
    console.log(this.loginData);
    // this.loginData.password = this.formGroupLogin.controls["password"].value;
    // this.loginData.username = this.formGroupLogin.controls["username"].value;
    localStorage.clear();
    this.userService.login(this.loginData).subscribe(res => {

      if (res == null) {
        alert("null")
      }
      else {
        this.userService.CurrentUser = res;
        alert("רשום במערכת")
        console.log(this.userService.CurrentUser);
      }
    });
  }

}
