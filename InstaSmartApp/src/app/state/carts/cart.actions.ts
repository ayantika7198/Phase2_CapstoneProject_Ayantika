import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/products/product";

export const setCurrentProduct= createAction(
    '[Product] Set Current Product',
    props<{ currentProductId: string }>()
);

export const clearCurrentProduct=createAction(
    '[Product] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
    '[Product] Initialize Current Product'
);

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