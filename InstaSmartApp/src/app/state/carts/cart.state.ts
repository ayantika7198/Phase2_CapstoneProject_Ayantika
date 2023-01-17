import { IProduct } from 'src/app/products/product';
import * as AppState from '../app.state';


// Extends the app state to include the cartitem feature.
// This is required because cartitems are lazy loaded.

export interface State extends AppState.State{
    carts: CartState;
}

export interface CartState{
    currentProductId:string| null,
    products: IProduct[],
    error:string
}

//Initializing the initial cart state
export const initialCartState:CartState={
    currentProductId: null,
    products:[],
    error:''
}