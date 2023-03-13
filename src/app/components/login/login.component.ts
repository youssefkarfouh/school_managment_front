import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/inetrfaces/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  alertMsg!: string;
  user: IUser = {
    username: '',
    password: '',
  };

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  login() {
    this.userService.login(this.user).subscribe((data) => {

      console.log(data);
      
      if (data) {
        this.router.navigate(['dashboard']);
      } else {
        this.alertMsg = 'username or password are incorrect';
      }
    });
  }
}
