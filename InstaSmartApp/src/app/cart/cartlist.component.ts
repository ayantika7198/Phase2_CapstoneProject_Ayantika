import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../products/product';
import { CartitemService } from '../shared/cartitem.service';
import * as CartActions from '../state/carts/cart.actions';
import { getCartErrors, getCartitems } from '../state/carts/cart.selectors';
import { State } from '../state/carts/cart.state';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit, OnDestroy{

  errorMessage:string='';
  sub!:Subscription;
  prod!:IProduct;
  products:IProduct[]=[];
  pageTitle:string="Cart Products List";
  href:string='';

  constructor(private cartitemService: CartitemService, private router:Router, private store:Store<State>){}

  products$!:Observable<IProduct[]>;
  selectedProduct$!:Observable<any>;
  errorMessage$!: Observable<string>;

  dataReceived=this.cartitemService.getProducts();
  obsProducts$!:Observable<IProduct[]>;

  total:number=0;


  ngOnInit(): void {
    this.href=this.router.url;

    this.products$ = this.store.select(getCartitems);
    this.products$.subscribe(resp=>this.products=resp);

    this.errorMessage$ = this.store.select(getCartErrors);

    this.store.dispatch(CartActions.loadCartitems());

    for(let p of this.products){
      this.total+=(p.price*p.quantity);
    }


  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  goBack():void{
    this.router.navigate(['/products']);
  }

  goPayment():void{

    this.router.navigate(['/payment']);
  }

  deleteProduct(product:IProduct):void{
    if(product && product.id){

      this.total=this.total-(product.price*product.quantity);

      this.store.dispatch(CartActions.deleteCartitem({productId:product.id}));

    }
  }
  

}
