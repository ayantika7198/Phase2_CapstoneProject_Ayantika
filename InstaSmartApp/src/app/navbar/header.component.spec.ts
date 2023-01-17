import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialExampleModule } from 'src/material.module';

import { HeaderComponent } from './header.component';

//For describing the header component testcases
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  //For declaring the component and importing the necessary modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientModule, MaterialExampleModule]
    })
    .compileComponents();

    //Creating the testbed for header component
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that there is home in navbar or not
  it('should have the Home',()=>{
    expect(fixture.debugElement.query(By.css('#home'))).toBeTruthy();

    const home:HTMLElement=fixture.debugElement.query(By.css('#home')).nativeElement;
    expect(home.textContent).toEqual('Home (current)');

  });

  //It tests that there is products in navbar or not
  it('should have the Products',()=>{

    expect(fixture.debugElement.query(By.css('#products'))).toBeTruthy();

    const prds:HTMLElement=fixture.debugElement.query(By.css('#products')).nativeElement;
    expect(prds.textContent).toEqual('Products');

  });

  //It tests that there is aboutus in navbar or not
  it('should have the AboutUs',()=>{

    expect(fixture.debugElement.query(By.css('#aboutus'))).toBeTruthy();

    const about:HTMLElement=fixture.debugElement.query(By.css('#aboutus')).nativeElement;
    expect(about.textContent).toEqual('About Us');

  });

  //It tests that there is contactus in navbar or not
  it('should have the Contact Us',()=>{

    expect(fixture.debugElement.query(By.css('#contactus'))).toBeTruthy();

    const contact:HTMLElement=fixture.debugElement.query(By.css('#contactus')).nativeElement;
    expect(contact.textContent).toEqual('Contact Us');

  });

  //It tests that there is login button in navbar or not
  it('should have the login button',()=>{

    expect(fixture.debugElement.query(By.css('#login'))).toBeTruthy();

  });

 it('should have the logout button when logged in',()=>{

    component.isLogIn=true;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#logOut'))).toBeTruthy();

  });
  
});
