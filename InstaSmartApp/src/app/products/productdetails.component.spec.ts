import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { ProductdetailsComponent } from './productdetails.component';


//Describing the ProductDetails Component TestCases
describe('ProductdetailsComponent', () => {
  let component: ProductdetailsComponent;
  let fixture: ComponentFixture<ProductdetailsComponent>;

  //Declaring Component and importing the modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsComponent ],
      imports:[RouterTestingModule, HttpClientModule, StoreModule.forRoot({})]
    })
    .compileComponents();

    //Creating testbed for component
    fixture = TestBed.createComponent(ProductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the component should be created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the product image and name are coming or not
  it('should render the product image and name',()=>{
    expect(fixture.debugElement.query(By.css('#imageName'))).toBeTruthy();
  });

  //It tests that the Product Details Table is rendered or not
  it('should render the Product Details Table',()=>{
    expect(fixture.debugElement.query(By.css('#details'))).toBeTruthy();
  });

  //It tests that the add to cart button is there with proper text
  it('should render the Add To Cart Button',()=>{

    expect(fixture.debugElement.query(By.css('#addCart'))).toBeTruthy();

    const addCart: HTMLElement=fixture.debugElement.query(By.css('#addCart')).nativeElement;
    expect(addCart.textContent).toEqual('shopping_cartADD TO CART');

  });

  //It tests that the back to products button is there with proper text
  it('should render the Back To Products Button',()=>{

    expect(fixture.debugElement.query(By.css('#back'))).toBeTruthy();

    const back: HTMLElement=fixture.debugElement.query(By.css('#back')).nativeElement;
    expect(back.textContent).toEqual('BACK TO PRODUCTS');

  });
});
