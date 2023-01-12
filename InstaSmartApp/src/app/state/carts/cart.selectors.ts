import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";

const getCartFeatureState= createFeatureSelector<CartState>('carts');

export const getCurrentProductId= createSelector(
    getCartFeatureState,
    state=> state.currentProductId
);

export const getCurrentProduct= createSelector(
    getCartFeatureState,
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

export const getCartitems= createSelector(
    getCartFeatureState,
    state=> state.products
);

export const getCartErrors= createSelector(
    getCartFeatureState,
    state=> state.error
);