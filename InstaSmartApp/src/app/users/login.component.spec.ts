import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the UserName',()=>{
    expect(fixture.debugElement.query(By.css('#username'))).toBeTruthy();
  });

  it('should have the Password',()=>{
    expect(fixture.debugElement.query(By.css('#password'))).toBeTruthy();
  });

  it('should check the input type of Username',()=>{

    const username=fixture.debugElement.query(By.css('#username'));
    const username2=username.nativeElement.getAttribute('type');
    expect(username2).toEqual('text');

  });

  it('should check the input type of Password',()=>{

    const password=fixture.debugElement.query(By.css('#password'));
    const password2=password.nativeElement.getAttribute('type');
    expect(password2).toEqual('password');

  });

  it('should have the Login Button',()=>{
    expect(fixture.debugElement.query(By.css('#login'))).toBeTruthy();
  });

  it('should check the input type of Login Button',()=>{

    const login=fixture.debugElement.query(By.css('#login'));
    const login2=login.nativeElement.getAttribute('type');
    expect(login2).toEqual('submit');

  });

  it('should have the Cancel button',()=>{

    expect(fixture.debugElement.query(By.css('#cancel'))).toBeTruthy();

  });

  it('should check the heading Login',()=>{

    expect(fixture.debugElement.query(By.css('#heading'))).toBeTruthy();

    const heading:HTMLElement=fixture.debugElement.query(By.css('#heading')).nativeElement;

    expect(heading.textContent).toEqual('Login');

  })

});
