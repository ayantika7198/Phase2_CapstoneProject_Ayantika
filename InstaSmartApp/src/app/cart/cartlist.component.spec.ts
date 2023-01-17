import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { CartlistComponent } from './cartlist.component';


//Describing the Cartlist Component Test Cases
describe('CartlistComponent', () => {
  let component: CartlistComponent;
  let fixture: ComponentFixture<CartlistComponent>;

  //Declaring the Cartlist Component and Importing the Necessary Modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartlistComponent ],
      imports:[HttpClientModule, StoreModule.forRoot({})]
    })
    .compileComponents();
    //It will create the testbed for the component
    fixture = TestBed.createComponent(CartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the component will be created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the div containing the cart items will be rendered or not
  it('should render the Cart Items',()=>{
    expect(fixture.debugElement.query(By.css('.cont1'))).toBeTruthy();
  });

  //It tests that the total price div is rendered or not
  it('should show the total price',()=>{
    expect(fixture.debugElement.query(By.css('.total'))).toBeTruthy();
  });

  //It tests that the checkout button comes or not
  it('should have the checkout button',()=>{
    expect(fixture.debugElement.query(By.css('#checkout'))).toBeTruthy();

    const checkout:HTMLElement= fixture.debugElement.query(By.css('#checkout')).nativeElement;
    expect(checkout.textContent).toEqual('CHECKOUT');
  });

  //It tests that the continue shopping button comes or not
  it('should have the continue shopping button',()=>{
    expect(fixture.debugElement.query(By.css('#back'))).toBeTruthy();

    const back:HTMLElement= fixture.debugElement.query(By.css('#back')).nativeElement;
    expect(back.textContent).toEqual('CONTINUE SHOPPING');
  });

  //It tests that the checkout button will be disabled when the cart is empty
  it('should check the checkout button as disabled when cart is empty',()=>{

    const btn=fixture.debugElement.query(By.css('#checkout'));
    expect(btn.nativeElement.disabled).toBeTruthy();

  });
});
