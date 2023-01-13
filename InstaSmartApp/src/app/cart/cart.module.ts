import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartlistComponent } from './cartlist.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialExampleModule } from 'src/material.module';
import { cartReducer } from '../state/carts/cart.reducer';
import { CartEffects } from '../state/carts/cart.effects';
import { AppModule } from '../app.module';
import { CarticonComponent } from './carticon.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartlistComponent,
    CarticonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialExampleModule,
    StoreModule.forFeature('carts', cartReducer),
    EffectsModule.forFeature([CartEffects])
  ],
  exports:[
    CarticonComponent
  ]
})
export class CartModule { }
