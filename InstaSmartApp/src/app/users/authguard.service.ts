import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./authservice";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{

    //injecting authservice and router
    constructor(private authService:AuthService, private router:Router){}

    //canactivate in authguard confirms that the user should be logged in before going to products or cart
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
        return this.checkLoggedIn(state.url);
    }

    //this method is for checking that the user is logged in or not
    checkLoggedIn(url:string):boolean{

        if(this.authService.isLoggedIn()){
            return true;
        }

        this.authService.redirectToUrl=url;

        this.router.navigate(['/login']);

        return false;
    }
}