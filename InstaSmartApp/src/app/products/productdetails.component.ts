import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { State } from '../state/carts/cart.state';
import { IProduct } from './product';
import * as CartActions from '../state/carts/cart.actions';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnDestroy{

  id:string='';
  prd!:IProduct;
  sub!:Subscription;
  errorMessage:string='';

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private service:ProductService, private store:Store<State>){}


  ngOnInit(): void {
    this.sub= this.activatedRoute.paramMap.subscribe((params)=>{
      let idd=params.get('id');

      if(idd){
        this.id=idd;
      }

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

  back():void{
    this.router.navigate(['products']);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addToCart(product:IProduct):void{

      this.store.dispatch(CartActions.createCartitem({product}));
  }

}
