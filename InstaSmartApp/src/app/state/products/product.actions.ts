import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/app/products/product";

/*Ngrx action for Setting Current Product*/
export const setCurrentProduct= createAction(
    '[Product] Set Current Product',
    props<{ currentProductId: string }>()
);

/*Ngrx action for clearing current Product*/
export const clearCurrentProduct=createAction(
    '[Product] Clear Current Product'
);

/*Ngrx action for initializing current Product*/
export const initializeCurrentProduct = createAction(
    '[Product] Initialize Current Product'
);
 
/*Ngrx actions for loading the products*/
export const loadProducts = createAction(
    '[Product] Load'
);

export const loadProductsSuccess = createAction(
    '[Product] Load Success',
    props<{ products: IProduct[] }>()
);
  
export const loadProductsFailure = createAction(
    '[Product] Load Fail',
    props<{ error: string }>()
);

/*Ngrx actions for updating the product*/
export const updateProduct = createAction(
    '[Product] Update Product',
    props<{ product: IProduct }>()
);
  
export const updateProductSuccess = createAction(
    '[Product] Update Product Success',
    props<{ product: IProduct }>()
);
  
export const updateProductFailure = createAction(
    '[Product] Update Product Fail',
    props<{ error: string }>()
);

/*Ngrx actions for creating new products*/
export const createProduct = createAction(
    '[Product] Create Product',
    props<{ product: IProduct }>()
);
  
export const createProductSuccess = createAction(
    '[Product] Create Product Success',
    props<{ product: IProduct }>()
);
  
export const createProductFailure = createAction(
    '[Product] Create Product Fail',
    props<{ error: string }>()
);

/*Ngrx actions for deleting the Product*/
export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ productId:string }>()
  );
  
export const deleteProductSuccess = createAction(
    '[Product] Delete Product Success',
    props<{ productId:string }>()
);
  
export const deleteProductFailure = createAction(
    '[Product] Delete Product Fail',
    props<{ error: string }>()
);



