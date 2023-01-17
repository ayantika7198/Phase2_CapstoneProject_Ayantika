import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { getCurrentProduct } from '../state/products/product.selectors';
import { State } from '../state/products/product.state';
import { IProduct } from './product';
import * as ProductActions from '../state/products/product.actions';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit, OnDestroy{

  pageTitle:string='ADD NEW PRODUCT';
  errorMessage='';
  product$!: Observable<IProduct | null | undefined  >;

  addProduct!: FormGroup;
  product!:IProduct | null | undefined;
  sub!:Subscription;

  //Injecting the ngrx store for products,
  //Formbuilder, Router and Product Service
  constructor(private store:Store<State>, private formBuilder: FormBuilder, private router:Router,
    private productService:ProductService){}



  
  ngOnInit(): void {

    //Creating the form builder group with necessary form controls
    this.addProduct= this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
      imageUrl:['',[Validators.required]],
      description:['',[Validators.required]],
      price:[0,[Validators.required, Validators.min(0), Validators.max(50000)]],
      category:['',[Validators.required]],
      sellerName:['',[Validators.required, Validators.minLength(2),Validators.maxLength(25)]],
      sellerLocation:['',[Validators.required]],
      quantity:[0,[Validators.required]]
    });

    //Fetching the Current Product from Product Store
    this.product$= this.store.select(getCurrentProduct).pipe(
      tap(currentProduct=> this.displayProduct(currentProduct))
    );
    this.sub= this.product$.subscribe(resp=>this.product=resp);


  }

  //This function will be invoked when any violation happens in form validity to show the error message
  public myError = (controlName: string, errorName: string) =>{
    return this.addProduct.controls[controlName].hasError(errorName);
    }


    //getters

  get id(){
    return this.addProduct.get("id");
  }

  get name(){
    return this.addProduct.get("name");
  }

  get imageUrl(){
    return this.addProduct.get("imageUrl");
  }

  get description(){
    return this.addProduct.get("description");
  }

  get price(){
    return this.addProduct.get("price");
  }

  get category(){
    return this.addProduct.get("category");
  }

  get sellerName(){
    return this.addProduct.get("sellerName");
  }

  get sellerLocation(){
    return this.addProduct.get("sellerLocation");
  }

  get quantity(){
    return this.addProduct.get("quantity");
  }

  //This method is for showing the product and patching the form control values to addProduct
  displayProduct(productParam: IProduct| null | undefined):void{
    this.product=productParam;

    if(this.product){
      this.addProduct.reset();

      this.addProduct.patchValue({
        id:this.product.id,
        name:this.product.name,
        imageUrl:this.product.imageUrl,
        description: this.product.description,
        price:this.product.price,
        category:this.product.category,
        sellerName:this.product.sellerName,
        sellerLocation:this.product.sellerLocation,
        quantity:this.product.quantity
      })
    }
  }

  //This method is used to save the product
  saveProduct(originalProduct: IProduct | undefined | null):void{
    if(this.addProduct.valid){
      if(this.addProduct.dirty){

        const product={...originalProduct,...this.addProduct.value};

        //It will dispatch the product action to create a new product
        this.store.dispatch(ProductActions.createProduct({product}));
      }

      //It will navigate to the products page
      this.router.navigate(['products']);
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
