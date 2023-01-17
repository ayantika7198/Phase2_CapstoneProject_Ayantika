import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IProduct } from "../products/product";
import { User } from "../users/user";

@Injectable({
    providedIn: 'root'
})

export class InMemoryEventDbService implements InMemoryDbService{

    createDb(){
        //in-memory-web-api for products
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

        //in-memory-web-api for cartitems
        const cartitems:IProduct[]=[

        ];

        //in-memory-web-api for users
        const users:User[]=[
            {
                "username": "ayantika.admin",
                "password":"password",
                "isAdmin":true
            },
            {
                "username": "ayantika.user",
                "password": "password",
                "isAdmin": false
            },
            {
                "username": "ayantika",
                "password": "password",
                "isAdmin" : false
            }
              
        ]

        return {products, users, cartitems};
    }

}