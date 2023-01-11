import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { getCurrentProduct, getError, getProducts } from '../state/products/product.selectors';
import { State } from '../state/products/product.state';
import { IProduct } from './product';
import * as ProductActions from '../state/products/product.actions';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnDestroy{

  errorMessage:string='';
  sub!:Subscription;
  products:IProduct[]=[];
  href:string='';
  pageTitle:string="List Of Our Products";


  products$!:Observable<IProduct[]>;
  selectedProduct$!:Observable<any>;
  errorMessage$!: Observable<string>;

  constructor(private productService:ProductService, private router:Router, private store:Store<State>){}

  dataReceived=this.productService.getProducts();
  obsProducts$!:Observable<IProduct[]>;


  ngOnInit(): void {
    this.href=this.router.url;

    this.products$=this.store.select(getProducts);

    this.products$.subscribe(resp=>{this.products=resp});

    this.errorMessage$=this.store.select(getError);

    this.store.dispatch(ProductActions.loadProducts());

    this.selectedProduct$=this.store.select(getCurrentProduct);


  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  newProduct():void{
    this.store.dispatch(ProductActions.initializeCurrentProduct());
    this.router.navigate([this.href,'addProduct']);
  }

  productSelected(product: IProduct):void{
    this.store.dispatch(ProductActions.setCurrentProduct({currentProductId:product.id}));
    this.router.navigate([this.href,'editProduct']);
  }

  deleteProduct(product: IProduct):void{
    if(product && product.id){
      if(confirm(`Are You Sure to Delete ${product.id} ${product.name} Details`)){
        this.store.dispatch(ProductActions.deleteProduct({productId:product.id}));
      }else{
        this.store.dispatch(ProductActions.clearCurrentProduct());
      }
    }
  }

}
