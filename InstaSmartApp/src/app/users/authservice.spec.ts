import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Component } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AuthService } from "./authservice"
import { User } from "./user";


//Describing the Auth Service
describe('Auth Service',()=>{
    let service:AuthService;

    let injector:TestBed;

    let httpMock: HttpTestingController;

    afterEach(() => {
        httpMock.verify();
      });

    beforeEach(()=>{

        //Configuring the test bed
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[AuthService]
        });

        service=TestBed.get(AuthService);

        injector = getTestBed();

    httpMock = injector.get(HttpTestingController);

   
    });

    //It tests that the service is created or not
    it('should be created',()=>{
        expect(service).toBeTruthy();
      });
    
      //It tests the logout() method
      it('should check the logout() method',()=>{

        service.logout();

        expect(service.currentUser).toEqual(null);

      });

      //It tests the login() method
      it('should check the login() method',()=>{

        service.login('ayantika','password');

        let cuser:User={
            username: 'ayantika',
            password: 'password',
            isAdmin: false
        }

        expect(service.currentUser).toEqual(cuser);

        //const fn=spyOn(service, 'login').and.returnValue(of(cuser));

      });
    
})