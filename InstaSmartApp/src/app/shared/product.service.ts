
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";
import { IProduct } from "../products/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    foundIndex:number=0;
    
    //For setting the url to access products in in-memory-web-api
    public url="api/products";

    products:IProduct[]=[];

    private selectedProductSource= new BehaviorSubject<IProduct | null >(null);

    selectedProductChanges$=this.selectedProductSource.asObservable();

    constructor(private http: HttpClient){}

    //For getting all the products
    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.url).pipe(
            tap(data=>{
                this.products=data;
            }),
            catchError(this.errorHandler)
        );
    }

    //For error handling
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

       //For changing the selected product
       changeSelectedProduct(selectedProduct: IProduct | null):void{
           this.selectedProductSource.next(selectedProduct);
       }

       //For creating a new initial product
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

       //For Creating a new product
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

       //For deleting a product
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

       //For Updating a product
       updateProduct(product: IProduct):Observable<IProduct>{

        const headers= new HttpHeaders({'Content-Type':'application/json'});

        const url= `${this.url}/${product.id}`;

        return this.http.put<IProduct>(url, product, {headers}).pipe(
            tap(()=>{

            }),

            map(()=>product),
            catchError(this.errorHandler)
        );
       }

       //For getting a product by id
       getProductById(id:string):Observable<IProduct>{
        
        return this.getProducts().pipe(
            tap(()=>{
                this.foundIndex=this.products.findIndex(item=>item.id==id)
            }),
            map(()=>this.products[this.foundIndex]),
            catchError(this.errorHandler)
        );

       }


}