import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/inetrfaces/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  alertMsg!: string;

  user: IUser = {
    username: '',
    password: '',
    confirmPsd: '',
  };

  constructor(private userService: UserServiceService , private router:Router) {}

  createUser() {
    if (this.user.password === this.user.confirmPsd) {
      
      const user = {"username":this.user.username , "password" : this.user.password}
        
      this.userService.addUser(user).subscribe((data) => {
        console.log(data);
      });

      this.router.navigateByUrl("/home/login")
    } else this.alertMsg = "Password Doesn't match";
  }
}
