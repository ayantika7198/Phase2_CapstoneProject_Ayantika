import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";


//selector function for cart items

const getCartFeatureState= createFeatureSelector<CartState>('carts');

//selector for getting current product id in cart
export const getCurrentProductId= createSelector(
    getCartFeatureState,
    state=> state.currentProductId
);

//selector for getting current cartitem
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

//selector for getting all the cartitems
export const getCartitems= createSelector(
    getCartFeatureState,
    state=> state.products
);


//selector for getting the cartitem error message
export const getCartErrors= createSelector(
    getCartFeatureState,
    state=> state.error
);