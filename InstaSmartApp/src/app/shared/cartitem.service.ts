import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { IProduct } from "../products/product";

@Injectable({
    providedIn: 'root'
})

export class CartitemService{

    public url="api/cartitems";

    products:IProduct[]=[];

    private selectedProductSource= new BehaviorSubject<IProduct | null >(null);
    selectedProductChanges$=this.selectedProductSource.asObservable();

    constructor(private http:HttpClient){}

    getProducts():Observable<IProduct[]>{

        return this.http.get<IProduct[]>(this.url).pipe(
            tap(data=> this.products=data),
            catchError(this.errorHandler)
        );
    }

    errorHandler=(err:any)=>{

        let errorMessage:string;
     
        if(err.error instanceof ErrorEvent)
          {
     
            errorMessage = `An error has occured ${err.error.message}`
          }
          else{
     
           errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
     
          }
          console.log(err);
          return throwError(errorMessage);
     
     
       }

       newProduct():IProduct{
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
    }

    changeSelectedProduct(selectedProduct: IProduct|null):void{
        this.selectedProductSource.next(selectedProduct);
    }

    createProduct(product: IProduct):Observable<IProduct>{

     const headers= new HttpHeaders({'Content-Type':'application/json'});

     const newProduct={...product};

     return this.http.post<IProduct>(this.url, newProduct, {headers}).pipe(
         tap(data=>{

         },
             catchError(this.errorHandler)
         )
     )
    }

    deleteProduct(id: string):Observable<{}>{

     const headers= new HttpHeaders({'Content-Type':'application/json'});

     const url= `${this.url}/${id}`;

     return this.http.delete<IProduct>(url, {headers}).pipe(
         tap(data=>{

         },
             catchError(this.errorHandler)
         )
     );
    }
}