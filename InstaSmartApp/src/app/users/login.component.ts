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

  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(): void {
    
  }

  cancel():void{
    this.router.navigate(['/']);
  }

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
