import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of, concatMap } from "rxjs";
import { CartitemService } from "src/app/shared/cartitem.service";
import * as CartActions from './cart.actions';

@Injectable()
export class CartEffects{

    constructor(private actions$:Actions, private cartitemService:CartitemService){}

    loadCartitems$ = createEffect(() => {
        return this.actions$
          .pipe(
            ofType(CartActions.loadCartitems),
            mergeMap(() => this.cartitemService.getProducts()
              .pipe(
                map(products => CartActions.loadCartitemsSuccess({ products })),
                catchError(error => of(CartActions.loadCartitemsFailure({ error })))
              )
            )
          );
      });

      createCartitem$ = createEffect(() => {
        return this.actions$
          .pipe(
            ofType(CartActions.createCartitem),
            concatMap(action =>
              this.cartitemService.createProduct(action.product)
                .pipe(
                  map(product => CartActions.createCartitemSuccess({ product })),
                  catchError(error => of(CartActions.createCartitemFailure({ error })))
                )
            )
          );
      });

      deleteCartitem$ = createEffect(() => {
        return this.actions$
          .pipe(
            ofType(CartActions.deleteCartitem),
            mergeMap(action =>
              this.cartitemService.deleteProduct(action.productId).pipe(
                map(() => CartActions.deleteCartitemSuccess({ productId: action.productId })),
                catchError(error => of(CartActions.deleteCartitemFailure({ error })))
              )
            )
          );
      });
}