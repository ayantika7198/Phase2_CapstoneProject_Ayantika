import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { tap } from "rxjs";
import { User } from "./user";

@Injectable({
    providedIn:'root'
})

export class AuthService implements OnInit{

    url="api/users";

    users:User[]=[];

    currentUser!:User | null;
    redirectToUrl!:string;

    //Injecting the http client
    constructor(private http:HttpClient){}

    ngOnInit(): void {
        //Fetching all the data from users
        this.http.get<User[]>(this.url).pipe(
            tap(data=>{
                this.users=data;
            })
        )

        //console.log(this.users);
    }

    //login method will be invoked after login
    login(username: string, password:string):void{

        if(username==="ayantika.admin"){

        this.currentUser={
            username,
            password,
            isAdmin:true
         };

        }else{
            this.currentUser={
                username,
                password,
                isAdmin:false
            }
        }
        //console.log(this.currentUser);

        this.users.push(this.currentUser);

        //console.log(this.currentUser);

        //console.log(this.users);
    }

    //logout method
    logout():void{
        this.currentUser=null;
    }



    //Checking that the user is logged in or not
    isLoggedIn():boolean{
        return !!this.currentUser;
    }
}