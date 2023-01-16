import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { CartlistComponent } from './cartlist.component';

describe('CartlistComponent', () => {
  let component: CartlistComponent;
  let fixture: ComponentFixture<CartlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartlistComponent ],
      imports:[HttpClientModule, StoreModule.forRoot({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Cart Items',()=>{
    expect(fixture.debugElement.query(By.css('.cont1'))).toBeTruthy();
  });

  it('should show the total price',()=>{
    expect(fixture.debugElement.query(By.css('.total'))).toBeTruthy();
  });

  it('should have the checkout button',()=>{
    expect(fixture.debugElement.query(By.css('#checkout'))).toBeTruthy();

    const checkout:HTMLElement= fixture.debugElement.query(By.css('#checkout')).nativeElement;
    expect(checkout.textContent).toEqual('CHECKOUT');
  });

  it('should have the continue shopping button',()=>{
    expect(fixture.debugElement.query(By.css('#back'))).toBeTruthy();

    const back:HTMLElement= fixture.debugElement.query(By.css('#back')).nativeElement;
    expect(back.textContent).toEqual('CONTINUE SHOPPING');
  });

  it('should check the checkout button as disabled when cart is empty',()=>{

    const btn=fixture.debugElement.query(By.css('#checkout'));
    expect(btn.nativeElement.disabled).toBeTruthy();

  });
});
