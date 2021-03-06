import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { ManagerMessege } from 'src/app/shared/modals/ManagerMessege';
import { ManagerService } from 'src/app/shared/services/manager.service';

@Component({
  selector: 'app-manager-massege',
  templateUrl: './manager-massege.component.html',
  styleUrls: ['./manager-massege.component.css']
})
export class ManagerMassegeComponent implements OnInit {


  hide = true;
  formGroupLogin: FormGroup;
massegeManager: ManagerMessege= new ManagerMessege();
  constructor(private _bottomSheet: MatBottomSheet, 
     public router: Router, 
     private _formBuilder: FormBuilder,
     public managerService: ManagerService

  ) { }
  ngOnInit(): void {
    this.formGroupLogin = this._formBuilder.group({
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.massegeManager.subject = this.formGroupLogin.controls["subject"].value;
    this.massegeManager.message = this.formGroupLogin.controls["message"].value;
  }
  send()
  {
    debugger
    this.managerService.EmloyeeToMesseg.AlreadyRead= false;
    this.managerService.EmloyeeToMesseg.Date= new Date();
    this.managerService.sendManagerMassegeToEmloyee().subscribe(res =>{
    this.managerService.EmloyeeToMesseg= res;
   this.hide = false}
)
  }
}
