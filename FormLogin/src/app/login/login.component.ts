import { Component } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateAccountComponent } from './create-account/create-account.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// constructor(
//   private userService: UserService,
//   private methodService: MethodService,
//   private hanhChinhService: HanhChinhService,
//   public dialog: MatDialog,
//   public alertService: AlertService,
//   public quanLyDanhSachNguoiDungService: QuanLyDanhSachNguoiDungService

// ) {
//   this.coSoKhamBenh = this.hanhChinhService.getLocalStorageCSKCB()!;
// }
export class LoginComponent {
  constructor(
    public dialog: MatDialog
  ) {

 }

  LoginForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  });
  eyeClick(event: any) {
    if (event.type == 'password') {
      event.type = 'text'
    }
    else {
      event.type = 'password'
    }
  }
  openDialogCreateAccount():void{
    const dialogRef = this.dialog.open(CreateAccountComponent,{
      width:'500px'
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);

    })
  }
}
