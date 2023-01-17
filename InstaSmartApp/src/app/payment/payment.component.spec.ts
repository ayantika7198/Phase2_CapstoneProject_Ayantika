import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { MaterialExampleModule } from 'src/material.module';

import { PaymentComponent } from './payment.component';


//Describing the Payment Component Testcases
describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  //Declaring the Component and importing the necessary modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
      imports:[FormsModule, ReactiveFormsModule, HttpClientTestingModule , MaterialExampleModule, BrowserAnimationsModule,
      StoreModule.forRoot({})]
    })
    .compileComponents();

    //Creating TestBed for Payment Component
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the component has card number or not
  it('should have the Card Number', ()=>{
    expect(fixture.debugElement.query(By.css('.card'))).toBeTruthy();
  });

  //It tests that the component has card holder name or not
  it('should have the Card Holder Name',()=>{
    expect(fixture.debugElement.query(By.css('.name'))).toBeTruthy();
  });

  //It tests that the component has card expiry date or not
  it('should have the Card Expiry Date',()=>{
    expect(fixture.debugElement.query(By.css('.date'))).toBeTruthy();
  });

  //It tests that the component has card cvv or not
  it('should have the Card cvv',()=>{
    expect(fixture.debugElement.query(By.css('.cvv'))).toBeTruthy();
  });

  //It tests the form control name of credit card number
  /*it('should check the formControlName of Card Number',()=>{
    const card=fixture.debugElement.query(By.css('.card'));
    const card2=card.nativeElement.getAttribute('formControlName');
    expect(card2).toEqual('card');
  });*/

  //it tests the form control name of credit card holder name
  it('should check the formControlName of Card Holder Name',()=>{
    const name=fixture.debugElement.query(By.css('.name'));
    const name2=name.nativeElement.getAttribute('formControlName');
    expect(name2).toEqual('name');

  });

  //it tests the form control name of credit card expiry date
  it('should check the formControlName of Card Expiry Date',()=>{
    const date=fixture.debugElement.query(By.css('.date'));
    const date2=date.nativeElement.getAttribute('formControlName');
    expect(date2).toEqual('date');

  });

  //it tests the form control name of credit card cvv
  it('should check the formControlName of Card cvv',()=>{
    const cvv=fixture.debugElement.query(By.css('.cvv'));
    const cvv2=cvv.nativeElement.getAttribute('formControlName');
    expect(cvv2).toEqual('cvv');

  });

  //it tests the input type of card number
  /*it('should check the input type of card number',()=>{

    const card3=fixture.debugElement.query(By.css('.card'));

    const card:any=component.addPayment.get("card");
    const card2='789067894563';
    card.setValue(card2);

    fixture.detectChanges();

    expect(card3.nativeElement.value).toEqual(card2);
  });*/

  //it tests the input type of card holder name
  it('should check the input type of card holder name',()=>{

    const name3=fixture.debugElement.query(By.css('.name'));

    const name:any=component.addPayment.get("name");
    const name2='Ayantika';
    name.setValue(name2);

    fixture.detectChanges();

    expect(name3.nativeElement.value).toEqual(name2);
  });

  //it tests the input type of card expiry date
  it('should check the input type of card expiry date',()=>{

    const date3=fixture.debugElement.query(By.css('.date'));

    const date:any=component.addPayment.get("date");
    const date2='2022-12-12';
    date.setValue(date2);

    fixture.detectChanges();

    expect(date3.nativeElement.value).toEqual('12/12/2022');
  });

  //it tests the input type of card cvv
  it('should check the input type of card cvv',()=>{

    const cvv3=fixture.debugElement.query(By.css('.cvv'));

    const cvv:any=component.addPayment.get("cvv");
    const cvv2='789';
    cvv.setValue(cvv2);

    fixture.detectChanges();

    expect(cvv3.nativeElement.value).toEqual(cvv2);
  });

  //it tests the save button will be disabled when the form is invalid
  it('should check the save button when invalid',()=>{

    const num:any=component.addPayment.get("card");
    const num2='7890';
    num.setValue(num2);

    const name:any=component.addPayment.get("name");
    const name2='Ayantika';
    name.setValue(name2);

    const date:any=component.addPayment.get("date");
    const date2='2022-12-12';
    date.setValue(date2);

    const cvv:any=component.addPayment.get("cvv");
    const cvv2='789';
    cvv.setValue(cvv2);

    fixture.detectChanges();

    const btn=fixture.debugElement.query(By.css('#btn1'));
    expect(btn.nativeElement.disabled).toBeTruthy();



  });


});
