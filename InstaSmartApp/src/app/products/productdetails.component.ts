import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { State } from '../state/carts/cart.state';
import { IProduct } from './product';
import * as CartActions from '../state/carts/cart.actions';
import { CartitemService } from '../shared/cartitem.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnDestroy{

  id:string='';
  prd!:IProduct | null | undefined;
  sub!:Subscription;
  errorMessage:string='';

  //Injecting activatedroute, router,
  //cartitem service, product service, ngrx store for cartitems
  constructor(private activatedRoute:ActivatedRoute, private router:Router, 
    private cartitemService:CartitemService, private service:ProductService, private store:Store<State>){}


  ngOnInit(): void {
    this.sub= this.activatedRoute.paramMap.subscribe((params)=>{
      let idd=params.get('id');

      if(idd){
        this.id=idd;
      }

      //It will fetch the provide by giving it's id
      this.service.getProductById(this.id).subscribe(
        (resp)=>{
          this.prd=resp;
        },
        err=>{
          this.errorMessage=err;
          console.log(err);
        }

      )
    })
  }

  //It will navigate to the products page
  back():void{
    this.router.navigate(['products']);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  count:number=0;

  //It is called at the time of adding into cart
  addToCart(product:IProduct | null | undefined):void{

    if(product && this.count<1){
      
      //It will dispatch the cart action to create a cart item
      this.store.dispatch(CartActions.createCartitem({product}));

      this.count++;
    }
  }

}
