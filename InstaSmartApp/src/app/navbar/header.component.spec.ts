import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialExampleModule } from 'src/material.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientModule, MaterialExampleModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the Home',()=>{
    expect(fixture.debugElement.query(By.css('#home'))).toBeTruthy();

    const home:HTMLElement=fixture.debugElement.query(By.css('#home')).nativeElement;
    expect(home.textContent).toEqual('Home (current)');

  });

  it('should have the Products',()=>{

    expect(fixture.debugElement.query(By.css('#products'))).toBeTruthy();

    const prds:HTMLElement=fixture.debugElement.query(By.css('#products')).nativeElement;
    expect(prds.textContent).toEqual('Products');

  });

  it('should have the AboutUs',()=>{

    expect(fixture.debugElement.query(By.css('#aboutus'))).toBeTruthy();

    const about:HTMLElement=fixture.debugElement.query(By.css('#aboutus')).nativeElement;
    expect(about.textContent).toEqual('About Us');

  });

  it('should have the Contact Us',()=>{

    expect(fixture.debugElement.query(By.css('#contactus'))).toBeTruthy();

    const contact:HTMLElement=fixture.debugElement.query(By.css('#contactus')).nativeElement;
    expect(contact.textContent).toEqual('Contact Us');

  });

  it('should have the login button',()=>{

    expect(fixture.debugElement.query(By.css('#login'))).toBeTruthy();

  });

 /* it('should have the logout button',()=>{

    component.isLoggedIn=true;


    expect(fixture.debugElement.query(By.css('#logout'))).toBeTruthy();

  });*/
  
});
