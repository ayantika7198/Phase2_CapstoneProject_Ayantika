import { IProduct } from 'src/app/products/product';
import * as AppState from '../app.state';

export interface State extends AppState.State{
    carts: CartState;
}

export interface CartState{
    currentProductId:string| null,
    products: IProduct[],
    error:string
}

export const initialCartState:CartState={
    currentProductId: null,
    products:[],
    error:''
}