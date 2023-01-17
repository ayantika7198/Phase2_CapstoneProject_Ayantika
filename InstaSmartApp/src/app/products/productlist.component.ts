import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, shareReplay, Subscription } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { getCurrentProduct, getError, getProducts } from '../state/products/product.selectors';
import { State } from '../state/products/product.state';
import { IProduct } from './product';
import * as ProductActions from '../state/products/product.actions';
import { AuthService } from '../users/authservice';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  animations:[
    trigger('change',[
      state('start',style({
        width:'180px' , height:'150px'
       })),
       state('end',style({
        height:'170px',width:'220px'
      })),
      transition('start=>end',[
        animate('0s 1s')
      ]),
      transition('end=>start',[
        animate('0s 1s')
      ])

    ])
  ]
})
export class ProductlistComponent implements OnInit, OnDestroy{


  errorMessage:string='';
  sub!:Subscription;
  products:IProduct[]=[];
  filteredProducts:IProduct[]=[];
  href:string='';
  pageTitle:string="List Of Our Products";

  isHover:boolean[]=[false];


  products$!:Observable<IProduct[]>;
  selectedProduct$!:Observable<any>;
  errorMessage$!: Observable<string>;

  data:any;

  showIcon:boolean=false;

  //injecting the product service, router, ngrx store for products and auth service
  constructor(private productService:ProductService, private router:Router, private store:Store<State>,
    private authService:AuthService){}

  dataReceived=this.productService.getProducts();
  obsProducts$!:Observable<IProduct[]>;
  @Output() OnProductSelection:EventEmitter<IProduct>=new EventEmitter<IProduct>();


  ngOnInit(): void {
    this.href=this.router.url;

    this.products$=this.store.select(getProducts);

    this.products$.subscribe(resp=>{this.products=resp;
      this.filteredProducts=this.products;
    });

    this.errorMessage$=this.store.select(getError);

    //it will dispatch the product action for loading all products
    this.store.dispatch(ProductActions.loadProducts());

    this.selectedProduct$=this.store.select(getCurrentProduct);

    //if the user is only admin then the edit, delete, add icon will be there
    if(this.authService.currentUser?.isAdmin){
      this.showIcon=true;
    }


  }


  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  //For creating a new product
  newProduct():void{
    this.store.dispatch(ProductActions.initializeCurrentProduct());
    this.router.navigate([this.href,'addProduct']);
  }

  //for editing a product
  productSelected(product: IProduct):void{
    this.store.dispatch(ProductActions.setCurrentProduct({currentProductId:product.id}));
    this.router.navigate([this.href,'editProduct']);
  }

  //for deleting a product
  deleteProduct(product: IProduct):void{
    if(product && product.id){
      if(confirm(`Are You Sure to Delete ${product.id} ${product.name} Details`)){
        this.store.dispatch(ProductActions.deleteProduct({productId:product.id}));
      }else{
        this.store.dispatch(ProductActions.clearCurrentProduct());
      }
    }
  }
//for applying animation in image
  applyAnimation(i:number){
    this.isHover[i]=!this.isHover[i];

 }

 /*Filtering Products By Category*/

 showVegetable():void{

  this.filteredProducts=[];

   for(let pr of this.products){
     if(pr.category==='Vegetables'){
       this.filteredProducts.push(pr);
     }
   }
 }

 showFruit():void{

  this.filteredProducts=[];

   for(let pr of this.products){
     if(pr.category==='Fruits'){
       this.filteredProducts.push(pr);
     }
   }

 }

 showDevice():void{
  this.filteredProducts=[];

  for(let pr of this.products){
    if(pr.category==='Electronic Device'){
      this.filteredProducts.push(pr);
    }
  }
 }

 showJeans():void{
  this.filteredProducts=[];

  for(let pr of this.products){
    if(pr.category==='Jeans'){
      this.filteredProducts.push(pr);
    }
  }

 }

 showGrocery():void{
  this.filteredProducts=[];

  for(let pr of this.products){
    if(pr.category==='Grocery'){
      this.filteredProducts.push(pr);
    }
  }
 }

 /*Filtering Products By Price*/
 show1():void{
    this.filteredProducts=[];

    for(let pr of this.products){
      if(pr.price>=0 && pr.price<1000){
        this.filteredProducts.push(pr);
      }
    }
 }

 show2():void{
  this.filteredProducts=[];

  for(let pr of this.products){
    if(pr.price>=1000 && pr.price<=5000){
      this.filteredProducts.push(pr);
    }
  }
}

show3():void{
  this.filteredProducts=[];

  for(let pr of this.products){
    if(pr.price>5000 && pr.price<=10000){
      this.filteredProducts.push(pr);
    }
  }
}

show4():void{
  this.filteredProducts=[];

  for(let pr of this.products){
    if(pr.price>10000 && pr.price<=50000){
      this.filteredProducts.push(pr);
    }
  }
}

show5():void{
  this.filteredProducts=[];

  for(let pr of this.products){
    if(pr.price>50000){
      this.filteredProducts.push(pr);
    }
  }
}

}
