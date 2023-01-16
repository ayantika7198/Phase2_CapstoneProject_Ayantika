import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { ProductdetailsComponent } from './productdetails.component';

describe('ProductdetailsComponent', () => {
  let component: ProductdetailsComponent;
  let fixture: ComponentFixture<ProductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsComponent ],
      imports:[RouterTestingModule, HttpClientModule, StoreModule.forRoot({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the product image and name',()=>{
    expect(fixture.debugElement.query(By.css('#imageName'))).toBeTruthy();
  });

  it('should render the Product Details Table',()=>{
    expect(fixture.debugElement.query(By.css('#details'))).toBeTruthy();
  });

  it('should render the Add To Cart Button',()=>{

    expect(fixture.debugElement.query(By.css('#addCart'))).toBeTruthy();

    const addCart: HTMLElement=fixture.debugElement.query(By.css('#addCart')).nativeElement;
    expect(addCart.textContent).toEqual('shopping_cartADD TO CART');

  });

  it('should render the Back To Products Button',()=>{

    expect(fixture.debugElement.query(By.css('#back'))).toBeTruthy();

    const back: HTMLElement=fixture.debugElement.query(By.css('#back')).nativeElement;
    expect(back.textContent).toEqual('BACK TO PRODUCTS');

  });
});
