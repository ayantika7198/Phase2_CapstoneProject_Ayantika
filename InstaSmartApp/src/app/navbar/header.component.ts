import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../users/authservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogIn:boolean=false;

  //For injecting the router and auth service
  constructor(private router:Router, private authService:AuthService){}

  //For getting the loggedin status
  get isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  //For getting the username if logged in
  get username():string{
    if(this.authService.currentUser)
      return this.authService.currentUser?.username;

    return '';
  }

  //For logging out
  logout():void{
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
