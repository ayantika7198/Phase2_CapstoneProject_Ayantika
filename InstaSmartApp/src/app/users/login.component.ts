import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './authservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  pageTitle:string='Log In';

  showAlert:boolean=false;

  @ViewChild('loginForm',{})loginForm!:NgForm;

  //Injecting the AuthService and router
  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(): void {
    
  }

  //It will navigate to the home page
  cancel():void{
    this.router.navigate(['/']);
  }

  //It will check the username and call the authservice login accordingly
  onSubmit(loginForm:NgForm){

    if(loginForm && loginForm.valid){

      const username=loginForm.form.value.username;
      const password=loginForm.form.value.password;

      //console.log(username);

      if(username==='ayantika.admin' || username==='ayantika' || username==='ayantika.user'){

      this.authService.login(username,password);

      if(this.authService.redirectToUrl){
        this.router.navigateByUrl(this.authService.redirectToUrl);
      }else{
        this.router.navigate(['products']);
      }
    }else{
      this.showAlert=true;
    }
    }
  }

}
