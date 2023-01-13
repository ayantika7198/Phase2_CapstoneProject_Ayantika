import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../users/authservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router, private authService:AuthService){}

  get isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  get username():string{
    if(this.authService.currentUser)
      return this.authService.currentUser?.username;

    return '';
  }

  logout():void{
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
