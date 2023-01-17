import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { MaterialExampleModule } from 'src/material.module';

import { TopheaderComponent } from './topheader.component';

//For Describing the TopheaderComponent test cases
describe('TopheaderComponent', () => {
  let component: TopheaderComponent;
  let fixture: ComponentFixture<TopheaderComponent>;

  //Declaring the component and importing the necessary modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopheaderComponent ],
      imports:[MatIconModule]
    })
    .compileComponents();

    //Creating TestBed for TopHeader Component
    fixture = TestBed.createComponent(TopheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the component has header menu logo or not
  it('should have the header menu logo',()=>{
    expect(fixture.debugElement.query(By.css('.header_menu_logo'))).toBeTruthy();
  });

  //It tests that the component has sign in accounts and lists or not
  it('should have the header menu sign in and accounts and lists',()=>{
    expect(fixture.debugElement.query(By.css('#header1'))).toBeTruthy();
  });

  //It tests that the component has returns and orders or not
  it('should have the header menu Returns and Orders',()=>{
    expect(fixture.debugElement.query(By.css('#header2'))).toBeTruthy();
  });

  //It tests that the component has cart or not
  it('should have the cart',()=>{
    expect(fixture.debugElement.query(By.css('.header_menu_cart'))).toBeTruthy();
  });

  //It tests that the component has InstSmart logo or not
  it('should have the logo name as InstaSmart',()=>{

    const logo: HTMLElement=fixture.debugElement.query(By.css('.header_menu_logo')).nativeElement;
    expect(logo.textContent).toEqual('InstaSmart');
  })


});
