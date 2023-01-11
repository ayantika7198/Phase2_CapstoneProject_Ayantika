import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.state";

const getProductFeatureState= createFeatureSelector<ProductState>('products');

export const getCurrentProductId= createSelector(
    getProductFeatureState,
    state=> state.currentProductId
);

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

export const getProducts= createSelector(
    getProductFeatureState,
    state=> state.products
);

export const getError= createSelector(
    getProductFeatureState,
    state=> state.error
);
