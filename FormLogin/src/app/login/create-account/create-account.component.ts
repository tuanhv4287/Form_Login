import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }
  CreatForm = new FormGroup({
    userName : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required),
    email : new FormControl('',Validators.email),
    phoneNumber : new FormControl('')
  });
  save(){
    if(this.CreatForm.invalid){
    }
    else{
      let element: REGISTER = new REGISTER
      element.USER_NAME= this.CreatForm.value.userName;
      element.PASS_WORD= this.CreatForm.value.password;
      element.EMAIL= this.CreatForm.value.email;
      element.PHONE_NUMBER= this.CreatForm.value.phoneNumber;
      this.ServiveAPISave(element)
      this.showSuccessAlert('Lưu thành công')
      this.dialog.closeAll()
    }
  }
  Close(){
    this.dialog.closeAll()
  }
  showSuccessAlert(messenger:string) {
    this.snackBar.open(messenger, '', {
      duration: 1000,
      panelClass: ['success-snackbar'], // Define a custom CSS class for success alerts
    });
  }
  ServiveAPISave(element:any){
  }
}
class REGISTER {
USER_NAME:string | undefined | null;
PASS_WORD:string | undefined | null;
EMAIL:string | undefined | null;
PHONE_NUMBER:string | undefined | null;
}
