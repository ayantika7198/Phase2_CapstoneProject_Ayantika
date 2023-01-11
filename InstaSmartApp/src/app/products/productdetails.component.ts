import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnDestroy{

  id:string='';
  prd:IProduct|undefined;
  sub!:Subscription;
  errorMessage:string='';

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private service:ProductService){}


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

}
