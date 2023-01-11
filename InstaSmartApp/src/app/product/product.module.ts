import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from '../state/products/product.effects';
import { productReducer } from '../state/products/product.reducer';
import { ProductlistComponent } from '../products/productlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product.routing.module';
import { MaterialExampleModule } from 'src/material.module';
import { ProductaddComponent } from '../products/productadd.component';
import { ProducteditComponent } from '../products/productedit.component';
import { ProductdetailsComponent } from '../products/productdetails.component';




@NgModule({
  declarations: [
    ProductlistComponent, ProductaddComponent,
    ProducteditComponent, ProductdetailsComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    ProductRoutingModule,
    MaterialExampleModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }
