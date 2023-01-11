import { IProduct } from 'src/app/products/product';
import * as AppState from '../app.state';

export interface State extends AppState.State{
    products: ProductState;
}

export interface ProductState{
    currentProductId:string| null,
    products: IProduct[],
    error:string
}

export const initialProductState:ProductState={
    currentProductId: null,
    products:[],
    error:''
}