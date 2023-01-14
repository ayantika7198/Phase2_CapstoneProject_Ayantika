import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { IProduct } from '../products/product';
import { CartitemService } from '../shared/cartitem.service';
import { getCartitems } from '../state/carts/cart.selectors';
import { State } from '../state/carts/cart.state';

@Component({
  selector: 'app-carticon',
  templateUrl: './carticon.component.html',
  styleUrls: ['./carticon.component.css']
})
export class CarticonComponent implements OnInit, OnDestroy{

  sub!:Subscription;
  prod!:IProduct;
  products:IProduct[]=[];
  lent:number=0;


  constructor(private cartitemService: CartitemService, private store:Store<State>){}

  products$!:Observable<IProduct[]>;

  
  ngOnInit(): void {
    this.products$ = this.store.select(getCartitems);
    this.products$.subscribe(resp=>this.products=resp);

    //onsole.log(this.cartitemService.pay);
    //console.log(this.products.length);

    
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  
}
