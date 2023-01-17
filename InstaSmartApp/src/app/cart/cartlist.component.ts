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

  //It will inject the cartitem service and router and ngrx store for cart items
  constructor(private cartitemService: CartitemService, private router:Router, private store:Store<State>){}

  products$!:Observable<IProduct[]>;
  selectedProduct$!:Observable<any>;
  errorMessage$!: Observable<string>;

  dataReceived=this.cartitemService.getProducts();
  obsProducts$!:Observable<IProduct[]>;

  total:number=0;

  qty:number[]=[];

  ngOnInit(): void {
    this.href=this.router.url;

    //It will fetch the cartitem products and store it in the products array
    this.products$ = this.store.select(getCartitems);
    this.products$.subscribe(resp=>this.products=resp);

    //It will fetch the errormessage from store if any
    this.errorMessage$ = this.store.select(getCartErrors);

    //It will dispatch the cart actions to load the cart items
    this.store.dispatch(CartActions.loadCartitems());


    //The maximum size of the cart can be 256. It is for initializing the quantity of cart items
    for(let i=0; i<256; i++){
      this.qty.push(1);
    }

    
    //It is for calculating the Total Price of the products present in cart
    for(let i=0;i<this.products.length; i++){
      this.total+=(this.products[i].price*this.qty[i]);
    }


  }

  //It will calculate the Total Price on input the quantity accordingly
  calculate():void{
    this.total=0;
    for(let i=0;i<this.products.length; i++){
      
      this.total+=(this.products[i].price*this.qty[i]);
    }
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  //It will navigate to the products page
  goBack():void{
    this.router.navigate(['/products']);
  }


  //It will navigate to the payment page
  goPayment():void{

    this.router.navigate(['/payment']);
  }

  //This function will be called when we click on the delete icon beside the product in cart.
  //Here first argument is the product and second argument is the index
  deleteProduct(product:IProduct, i:number):void{
    if(product && product.id){

      this.total=0;
      //After deleting that product the quantity of the product will be 0
      this.qty[i]=0;

      //It will calculate the Products total price after deleting
      for(let i=0;i<this.products.length; i++){
        this.total+=(this.products[i].price*this.qty[i]);
      }

      //The store will dispatch the Cart Action for deleting the product
      this.store.dispatch(CartActions.deleteCartitem({productId:product.id}));

    }
  }
  

}
