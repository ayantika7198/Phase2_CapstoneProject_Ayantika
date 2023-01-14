import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";
import { IProduct } from "../products/product";
import { CartitemService } from "./cartitem.service"

describe('CartitemService',()=>{

    let service:CartitemService;

    let injector:TestBed;

    let httpMock: HttpTestingController;

    let items:any[]=[];

    afterEach(() => {
        httpMock.verify();
      });

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[CartitemService]
        });

        service=TestBed.get(CartitemService);

        injector=getTestBed();

        httpMock=injector.get(HttpTestingController);

        items=[];
    });

    it('should be created',()=>{
        expect(service).toBeTruthy();
      });

    it('should check the getCartitems() method',
    inject([HttpTestingController,CartitemService],
        (httpMock:HttpTestingController,service:CartitemService)=>{

            service.getProducts().subscribe(resp=>expect(items).toEqual(resp));


      const mockReq = httpMock.expectOne(service.url);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(items);
        }


    ));

    it('should check the createCartitem() method',()=>{

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
     expect(items.length).toEqual(1);

     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     req.flush(item);
    });

    it('should check the deleteCartitem() method',()=>{

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

        items=[...items,item2];

        service.deleteProduct('P015').subscribe(resp=>console.log(resp));

        const req = httpMock.expectOne(`${service.url}/${item2.id}`);
       expect(req.request.method).toBe('DELETE');
       req.flush(item2);

    })
})