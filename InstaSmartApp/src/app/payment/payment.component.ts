import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from '../products/product';
import { CartitemService } from '../shared/cartitem.service';
import { getCartitems } from '../state/carts/cart.selectors';
import { State } from '../state/carts/cart.state';
import * as CartActions from '../state/carts/cart.actions';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  addPayment!:FormGroup;

  startDate = new Date(2023, 0, 1);

  products:IProduct[]=[];

  cont1:boolean=true;
  cont2:boolean=false;

  //For injecting the formbuilder, router, cartitem service and ngrx store for cartitems
  constructor(private formBuilder: FormBuilder, private router:Router, private cartitemService:CartitemService,
    private store:Store<State>){}

    products$!:Observable<IProduct[]>;

  ngOnInit(): void {


    //It will create the add payment form group with proper validations on each form control
    this.addPayment=this.formBuilder.group({
      card:['',[Validators.required, Validators.minLength(12)]],
      name:['',[Validators.required, Validators.minLength(5)]],
      date:['2022-01-12',[Validators.required]],
      cvv:['',[Validators.required, Validators.maxLength(3)]]
    });
   
  }

  //The function will be invoked if we want to show any error message on Violating the validations 
  //of each form control
  public myError = (controlName: string, errorName: string) =>{
    return this.addPayment.controls[controlName].hasError(errorName);
    }


    //This function will be called upon clicking on apply coupons
  apply():void{
    alert("Coupon Successfully Applied");
  }

  //This function will be called after payment
  afterPay():void{
    this.cont1=false;
    this.cont2=true;

    //This will fetch all cart products from store
    this.products$ = this.store.select(getCartitems);
    this.products$.subscribe(resp=>this.products=resp);

    //This will delete all products present in cart and make the cart empty
    for(let prd of this.products){
      this.store.dispatch(CartActions.deleteCartitem({productId:prd.id}));
    }
  }


  //This will be invoked on clicking on continue shopping products
  //which fetch the user to the products
  shop():void{

    

    this.router.navigate(['/products']);

    //this.cartitemService.pay=false;

    //window.location.reload();

  }
}
