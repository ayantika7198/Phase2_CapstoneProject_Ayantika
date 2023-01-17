import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/products/product";

/*Ngrx action for setting current cartitem*/
export const setCurrentProduct= createAction(
    '[Product] Set Current Product',
    props<{ currentProductId: string }>()
);

/*Ngrx action for clearing current cartitem*/
export const clearCurrentProduct=createAction(
    '[Product] Clear Current Product'
);

/*Ngrx action for initializing current cartitem*/
export const initializeCurrentProduct = createAction(
    '[Product] Initialize Current Product'
);

/*Ngrx actions for loading cart items*/
export const loadCartitems= createAction(
    '[Cartitems] Load'
);

export const loadCartitemsSuccess= createAction(
    '[Cartitems] Load Success',
  props<{ products: IProduct[] }>()
);

export const loadCartitemsFailure= createAction(
    '[Cartitems] Load Fail',
    props<{ error: string }>()
);


/*Ngrx actions for creating new cartitem*/
export const createCartitem= createAction(
    '[Cartitem] Create Cartitem',
  props<{ product: IProduct }>()
);

export const createCartitemSuccess= createAction(
    '[Cartitem] Create Cartitem Success',
  props<{ product: IProduct }>()
);

export const createCartitemFailure= createAction(
    '[Cartitem] Create Cartitem Fail',
  props<{ error: string }>()
);

/*Ngrx actions for deleting cart item*/
export const deleteCartitem= createAction(
    '[Cartitem] Delete Cartitem',
  props<{ productId: string }>()
);

export const deleteCartitemSuccess= createAction(
    '[Cartitem] Delete Cartitem Success',
    props<{ productId: string }>()
);

export const deleteCartitemFailure= createAction(
    '[Cartitem] Delete Cartitem Fail',
  props<{ error: string }>()
);