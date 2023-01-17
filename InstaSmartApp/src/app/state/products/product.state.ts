import { IProduct } from 'src/app/products/product';
import * as AppState from '../app.state';


// Extends the app state to include the product feature.
// This is required because products are lazy loaded.

export interface State extends AppState.State{
    products: ProductState;
}


export interface ProductState{
    currentProductId:string| null;
    products: IProduct[];
    error:string;
}


//Initializing the initial product state
export const initialProductState:ProductState={
    currentProductId: null,
    products:[],
    error:''
}


