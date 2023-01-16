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

  constructor(private formBuilder: FormBuilder, private router:Router, private cartitemService:CartitemService,
    private store:Store<State>){}

    products$!:Observable<IProduct[]>;

  ngOnInit(): void {



    this.addPayment=this.formBuilder.group({
      card:['',[Validators.required, Validators.minLength(12)]],
      name:['',[Validators.required, Validators.minLength(5)]],
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

    this.products$ = this.store.select(getCartitems);
    this.products$.subscribe(resp=>this.products=resp);

    for(let prd of this.products){
      this.store.dispatch(CartActions.deleteCartitem({productId:prd.id}));
    }
  }

  shop():void{

    

    this.router.navigate(['/products']);

    //this.cartitemService.pay=false;

    //window.location.reload();

  }
}
