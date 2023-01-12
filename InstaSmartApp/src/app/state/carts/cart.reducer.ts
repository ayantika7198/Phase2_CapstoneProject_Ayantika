import { createReducer, on } from "@ngrx/store";
import { CartState, initialCartState } from "./cart.state";
import * as CartActions from './cart.actions';

export const cartReducer= createReducer<CartState>(
    initialCartState,

    on(CartActions.setCurrentProduct, (state, action): CartState => {
      return {
        ...state,
        currentProductId: action.currentProductId
      };
    }),
    on(CartActions.clearCurrentProduct, (state): CartState => {
      return {
        ...state,
        currentProductId: null
      };
    }),
    on(CartActions.initializeCurrentProduct, (state): CartState => {
      return {
        ...state,
        currentProductId: ''
      };
    }),

    on(CartActions.loadCartitemsSuccess, (state, action): CartState => {
        return {
          ...state,
          products: action.products,
          error: ''
        };
    }),
  
    on(CartActions.loadCartitemsFailure, (state, action): CartState => {
        return {
          ...state,
          products: [],
          error: action.error
        };
    }),
  
    on(CartActions.createCartitemSuccess, (state, action): CartState => {
      return {
        ...state,
        products: [...state.products, action.product],
        currentProductId: action.product.id,
        error: ''
      };
  }),
  
  on(CartActions.createCartitemFailure, (state, action): CartState => {
      return {
        ...state,
        error: action.error
      };
  }),
  
  on(CartActions.deleteCartitemSuccess, (state, action): CartState => {
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.productId),
      currentProductId: null,
      error: ''
    };
  }),
  
  on(CartActions.deleteCartitemFailure, (state, action): CartState => {
    return {
      ...state,
      error: action.error
    };
  })

);