import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartitemService } from '../shared/cartitem.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  addPayment!:FormGroup;

  startDate = new Date(2023, 0, 1);

  cont1:boolean=true;
  cont2:boolean=false;

  constructor(private formBuilder: FormBuilder, private router:Router, private cartitemService:CartitemService){}

  ngOnInit(): void {



    this.addPayment=this.formBuilder.group({
      card:['',[Validators.required, Validators.maxLength(12),Validators.pattern('[0-9]{12}'), Validators.minLength(12)]],
      name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*'), Validators.minLength(5)]],
      date:['2022-01-12',[Validators.required]],
      cvv:['',[Validators.required, Validators.maxLength(3)]]
    });
   
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.addPayment.controls[controlName].hasError(errorName);
    }



  apply():void{
    alert("Coupon Successfully Applied");
  }

  afterPay():void{
    this.cont1=false;
    this.cont2=true;
  }

  shop():void{

    this.router.navigate(['/products']);

    //this.cartitemService.pay=false;

    window.location.reload();

  }
}
