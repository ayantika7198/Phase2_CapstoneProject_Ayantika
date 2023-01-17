import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';


//Describing the Login Component TestCases
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  //Declaring the component and importing the necessary modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule, FormsModule]
    })
    .compileComponents();

    //Creating the testbed for login component
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the component has the username field
  it('should have the UserName',()=>{
    expect(fixture.debugElement.query(By.css('#username'))).toBeTruthy();
  });

  //it tests that the component has the password field
  it('should have the Password',()=>{
    expect(fixture.debugElement.query(By.css('#password'))).toBeTruthy();
  });

  //it tests the input type of username
  it('should check the input type of Username',()=>{

    const username=fixture.debugElement.query(By.css('#username'));
    const username2=username.nativeElement.getAttribute('type');
    expect(username2).toEqual('text');

  });

  //it tests the input type of password
  it('should check the input type of Password',()=>{

    const password=fixture.debugElement.query(By.css('#password'));
    const password2=password.nativeElement.getAttribute('type');
    expect(password2).toEqual('password');

  });

  //it tests the component has login button
  it('should have the Login Button',()=>{
    expect(fixture.debugElement.query(By.css('#login'))).toBeTruthy();
  });

  //it tests the input type of login button
  it('should check the input type of Login Button',()=>{

    const login=fixture.debugElement.query(By.css('#login'));
    const login2=login.nativeElement.getAttribute('type');
    expect(login2).toEqual('submit');

  });

  //it tests that the component has the cancel button or not
  it('should have the Cancel button',()=>{

    expect(fixture.debugElement.query(By.css('#cancel'))).toBeTruthy();

  });

  //It tests the heading in Login Component
  it('should check the heading Login',()=>{

    expect(fixture.debugElement.query(By.css('#heading'))).toBeTruthy();

    const heading:HTMLElement=fixture.debugElement.query(By.css('#heading')).nativeElement;

    expect(heading.textContent).toEqual('Login');

  })

});
