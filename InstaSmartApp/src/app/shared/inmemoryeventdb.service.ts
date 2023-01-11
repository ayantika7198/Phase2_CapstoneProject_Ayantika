import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProduct } from "../products/product";

@Injectable({
    providedIn: 'root'
})

export class InMemoryEventDbService implements InMemoryDbService{

    createDb(){
        const products:IProduct[]=[

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
                "category": "Mobile",
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
            }

        ]

        return {products}
    }

}