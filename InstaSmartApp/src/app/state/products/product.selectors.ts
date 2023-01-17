import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.state";


//selector functions for products

const getProductFeatureState= createFeatureSelector<ProductState>('products');

//selector for getting current product id
export const getCurrentProductId= createSelector(
    getProductFeatureState,
    state=> state.currentProductId
);

//selector for getting current product
export const getCurrentProduct= createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, currentProductId)=>{
        if(currentProductId===''){
            return {
                id:'',
                name:'',
                imageUrl:'',
                description:'',
                price:0,
                category:'',
                sellerName:'',
                sellerLocation:'',
                quantity:0
            };
        }else{
            return currentProductId? state.products.find(p=> p.id===currentProductId): null;
        }
    }
);

//selector for getting all products
export const getProducts= createSelector(
    getProductFeatureState,
    state => state.products
);


//selector for getting error message
export const getError= createSelector(
    getProductFeatureState,
    state => state.error
);

