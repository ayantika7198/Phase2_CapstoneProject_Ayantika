import { getTestBed, inject, TestBed } from "@angular/core/testing";
import { ProductService } from "./product.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { IProduct } from "../products/product";
import { of } from "rxjs";


//Describing the product service testcases
describe('ProductService',()=>{
    let service:ProductService;

    let injector: TestBed;

    let httpMock: HttpTestingController;

    let items:any[]=[];

    afterEach(() => {
        httpMock.verify();
      });

    beforeEach(()=>{

        //configuring the testbed
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[ProductService]
        });

        service=TestBed.get(ProductService);

        injector= getTestBed();

        httpMock=injector.get(HttpTestingController);

        items=[

            {
                "id":"P001",
                "name":"Potato",
                "imageUrl":"../../assets/images/potato.jpg",
                "description":"This is a Potato",
                "price": 200,
                "category": "Vegetables",
                "sellerName":"ABC Seller",
                "sellerLocation":"Kolkata",
                "quantity":0
            },
            {
                "id":"P002",
                "name":"Apple",
                "imageUrl":"../../assets/images/apple.jpg",
                "description":"This is a Apple",
                "price": 500,
                "category": "Fruits",
                "sellerName":"DEF Seller",
                "sellerLocation":"Pune",
                "quantity":0
            },
            {
                "id":"P003",
                "name":"Realme 1 Pro",
                "imageUrl":"../../assets/images/mobile1.jpg",
                "description":"This is a Realme 1 Pro Mobile",
                "price": 15000,
                "category": "Electronic Device",
                "sellerName":"DCGH Seller",
                "sellerLocation":"Kolkata",
                "quantity":0
            },
            {
                "id":"P004",
                "name":"Blue Jeans",
                "imageUrl":"../../assets/images/jeans1.jpg",
                "description":"This is a Blue Jeans",
                "price": 2000,
                "category": "Jeans",
                "sellerName":"HJK Seller",
                "sellerLocation":"Chennai",
                "quantity":0
            },
            {
                "id":"P005",
                "name":"Sunlight",
                "imageUrl":"../../assets/images/grocery1.jpg",
                "description":"This is a Sunlight Detergent",
                "price": 600,
                "category": "Grocery",
                "sellerName":"UIJ Seller",
                "sellerLocation":"Mumbai",
                "quantity":0
            },
            {
                "id":"P006",
                "name":"Onion",
                "imageUrl":"../../assets/images/onion.jpg",
                "description":"This is a Onion",
                "price": 300,
                "category": "Vegetables",
                "sellerName":"JKL Seller",
                "sellerLocation":"Kolkata",
                "quantity":0
            },
            {
                "id":"P007",
                "name":"Pumpkin",
                "imageUrl":"../../assets/images/pumpkin.jpg",
                "description":"This is a Pumpkin",
                "price": 400,
                "category": "Vegetables",
                "sellerName":"JKU Seller",
                "sellerLocation":"Ahmedabad",
                "quantity":0
            },
            {
                "id":"P008",
                "name":"Banana",
                "imageUrl":"../../assets/images/banana.jpg",
                "description":"This is a Banana",
                "price": 300,
                "category": "Fruits",
                "sellerName":"BVF Seller",
                "sellerLocation":"Mumbai",
                "quantity":0
            },
            {
                "id":"P009",
                "name":"Grapes",
                "imageUrl":"../../assets/images/grapes.jpg",
                "description":"This is the Grapes",
                "price": 400,
                "category": "Fruits",
                "sellerName":"VFG Seller",
                "sellerLocation":"Patna",
                "quantity":0
            },
            {
                "id":"P010",
                "name":"Sunflower Oil",
                "imageUrl":"../../assets/images/oil.jpg",
                "description":"This is the Sunflower Oil",
                "price": 1100,
                "category": "Grocery",
                "sellerName":"HJK Seller",
                "sellerLocation":"Delhi",
                "quantity":0
            },
            {
                "id":"P011",
                "name":"AB Sugar",
                "imageUrl":"../../assets/images/sugar.jpg",
                "description":"This is the AB Sugar",
                "price": 800,
                "category": "Grocery",
                "sellerName":"UIO Seller",
                "sellerLocation":"Chennai",
                "quantity":0
            },
            {
                "id":"P012",
                "name":"Lenovo Tab M2",
                "imageUrl":"../../assets/images/tab.jpg",
                "description":"This is Lenovo M2 Tab",
                "price": 70000,
                "category": "Electronic Device",
                "sellerName":"GFD Seller",
                "sellerLocation":"Ranchi",
                "quantity":0
            },
            {
                "id":"P013",
                "name":"Boat 1 Wireless EarPhone",
                "imageUrl":"../../assets/images/earphone.jpg",
                "description":"This is Boat 1 Wireless Earphone",
                "price": 8000,
                "category": "Electronic Device",
                "sellerName":"BHJ Seller",
                "sellerLocation":"Kolkata",
                "quantity":0
            },
            {
                "id":"P014",
                "name":"Black Jeans",
                "imageUrl":"../../assets/images/jeans2.jpg",
                "description":"This is a Black Jeans",
                "price": 3000,
                "category": "Jeans",
                "sellerName":"HOI Seller",
                "sellerLocation":"Mumbai",
                "quantity":0
            },
            {
                "id":"P015",
                "name":"Grey Jeans",
                "imageUrl":"../../assets/images/jeans3.jpg",
                "description":"This is a Grey Jeans",
                "price": 6000,
                "category": "Jeans",
                "sellerName":"LOP Seller",
                "sellerLocation":"Jaipur",
                "quantity":0
            }

        ];
    });

    //it tests that the product service should be there
    it('should be created',()=>{
        expect(service).toBeTruthy();
      });
    
      //it tests that the getallproducts method should return all the products
      it('should getAllProducts',
      inject([HttpTestingController,ProductService],
        (httpMock:HttpTestingController,service:ProductService)=>{
  
  
  
        service.getProducts().subscribe(resp=>expect(items).toEqual(resp));
  
  
        const mockReq = httpMock.expectOne(service.url);
  
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(items);
  
  
      }
    ));

    //it tests that createproduct should post the product
    it('createProduct() should post a product and return the product',()=>{

        const item:IProduct={
            "id":"P016",
                "name":"Grey Jeans",
                "imageUrl":"../../assets/images/jeans3.jpg",
                "description":"This is a Grey Jeans",
                "price": 6000,
                "category": "Jeans",
                "sellerName":"LOP Seller",
                "sellerLocation":"Kanpur",
                "quantity":0
        };

    items =[...items,item];
     service.createProduct(item).subscribe(resp=>expect(resp).toEqual(item));
     expect(items.length).toEqual(16);

     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     req.flush(item);


    });

    //it tests that the updateproduct should update the product
    it("updateProduct() should Update The Product and return the product",()=>{

        const item2:IProduct={
            "id":"P015",
                "name":"Grey Jeans",
                "imageUrl":"../../assets/images/jeans3.jpg",
                "description":"This is a Grey Jeans",
                "price": 6000,
                "category": "Jeans",
                "sellerName":"LOP Seller",
                "sellerLocation":"Kanpur",
                "quantity":0
        };

        service.updateProduct(item2).subscribe(resp=>expect(resp).toEqual(item2) )


       const req = httpMock.expectOne(`${service.url}/${item2.id}`);
       expect(req.request.method).toBe('PUT');
       req.flush({item2 });


    });

    //it tests that the getproductbyid should fetch the product by its id
    it("should check getProductById() method",()=>{

        let response:IProduct;

        const item3:IProduct={
            "id":"P015",
                "name":"Grey Jeans",
                "imageUrl":"../../assets/images/jeans3.jpg",
                "description":"This is a Grey Jeans",
                "price": 6000,
                "category": "Jeans",
                "sellerName":"LOP Seller",
                "sellerLocation":"Kanpur",
                "quantity":0
        };

        const fn=spyOn(service, 'getProductById').and.returnValue(of(item3));

      service.getProductById('P015').subscribe(res=>{response=res;expect(response).toEqual(item3);});

     expect(fn).toHaveBeenCalled();
    });

    //it tests that the deleteproduct should delete a product
    it('should check deleteProduct() method',()=>{

        const item4:IProduct={
            "id":"P015",
                "name":"Grey Jeans",
                "imageUrl":"../../assets/images/jeans3.jpg",
                "description":"This is a Grey Jeans",
                "price": 6000,
                "category": "Jeans",
                "sellerName":"LOP Seller",
                "sellerLocation":"Kanpur",
                "quantity":0
        };

        service.deleteProduct('P015').subscribe(resp=>console.log(resp));

        const req = httpMock.expectOne(`${service.url}/${item4.id}`);
       expect(req.request.method).toBe('DELETE');
       req.flush(item4);


    });


})