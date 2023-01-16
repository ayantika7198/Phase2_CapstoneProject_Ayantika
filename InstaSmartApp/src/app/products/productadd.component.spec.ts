import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialExampleModule } from 'src/material.module';

import { ProductaddComponent } from './productadd.component';

describe('ProductaddComponent', () => {
  let component: ProductaddComponent;
  let fixture: ComponentFixture<ProductaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductaddComponent ],
      imports:[FormsModule, ReactiveFormsModule, 
        StoreModule.forRoot({}),HttpClientTestingModule , MaterialExampleModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the product id',()=>{
    expect(fixture.debugElement.query(By.css('.id'))).toBeTruthy();
  });

  it('should have the product name',()=>{
    expect(fixture.debugElement.query(By.css('.name'))).toBeTruthy();
  });

  it('should have the product imageUrl',()=>{
    expect(fixture.debugElement.query(By.css('.imageUrl'))).toBeTruthy();
  });

  it('should have the product description',()=>{
    expect(fixture.debugElement.query(By.css('.description'))).toBeTruthy();
  });

  it('should have the product price',()=>{
    expect(fixture.debugElement.query(By.css('.price'))).toBeTruthy();
  });

  it('should have the product category',()=>{
    expect(fixture.debugElement.query(By.css('.category'))).toBeTruthy();
  });

  it('should have the product seller name',()=>{
    expect(fixture.debugElement.query(By.css('.sellerName'))).toBeTruthy();
  });

  it('should have the product seller location',()=>{
    expect(fixture.debugElement.query(By.css('.sellerLocation'))).toBeTruthy();
  });

  it('should have the product quantity',()=>{
    expect(fixture.debugElement.query(By.css('.quantity'))).toBeTruthy();
  });

  it('should check the form control name of product id',()=>{
    const id=fixture.debugElement.query(By.css('.id'));
    const id2=id.nativeElement.getAttribute('formControlName');
    expect(id2).toEqual('id');

  });

  it('should check the form control name of product name',()=>{
    const name=fixture.debugElement.query(By.css('.name'));
    const name2=name.nativeElement.getAttribute('formControlName');
    expect(name2).toEqual('name');

  });

  it('should check the form control name of product imageUrl',()=>{
    const imageUrl=fixture.debugElement.query(By.css('.imageUrl'));
    const imageUrl2=imageUrl.nativeElement.getAttribute('formControlName');
    expect(imageUrl2).toEqual('imageUrl');

  });

  it('should check the form control name of product description',()=>{
    const description=fixture.debugElement.query(By.css('.description'));
    const description2=description.nativeElement.getAttribute('formControlName');
    expect(description2).toEqual('description');

  });

  it('should check the form control name of product price',()=>{
    const price=fixture.debugElement.query(By.css('.price'));
    const price2=price.nativeElement.getAttribute('formControlName');
    expect(price2).toEqual('price');

  });

  it('should check the form control name of product category',()=>{
    const category=fixture.debugElement.query(By.css('.category'));
    const category2=category.nativeElement.getAttribute('formControlName');
    expect(category2).toEqual('category');

  });

  it('should check the form control name of product seller name',()=>{
    const sellerName=fixture.debugElement.query(By.css('.sellerName'));
    const sellerName2=sellerName.nativeElement.getAttribute('formControlName');
    expect(sellerName2).toEqual('sellerName');

  });

  it('should check the form control name of product seller location',()=>{

    const sellerLocation=fixture.debugElement.query(By.css('.sellerLocation'));
    const sellerLocation2=sellerLocation.nativeElement.getAttribute('formControlName');
    expect(sellerLocation2).toEqual('sellerLocation');
  });

  it('should check the form control name of product quantity',()=>{
    const quantity=fixture.debugElement.query(By.css('.quantity'));
    const quantity2=quantity.nativeElement.getAttribute('formControlName');
    expect(quantity2).toEqual('quantity');

  });

  it('should check the input type of product id',()=>{

    const id3=fixture.debugElement.query(By.css('.id'));

    const id:any=component.addProduct.get("id");
    const id2='P100';
    id.setValue(id2);

    fixture.detectChanges();

    expect(id3.nativeElement.value).toEqual(id2);

  });

  it('should check the input type of product name',()=>{

    const name3=fixture.debugElement.query(By.css('.name'));

    const name:any=component.addProduct.get("name");
    const name2='Mango';
    name.setValue(name2);

    fixture.detectChanges();

    expect(name3.nativeElement.value).toEqual(name2);

  });

  it('should check the input type of product image url',()=>{

    const image3=fixture.debugElement.query(By.css('.imageUrl'));

    const image:any=component.addProduct.get("imageUrl");
    const image2='../url';
    image.setValue(image2);

    fixture.detectChanges();

    expect(image3.nativeElement.value).toEqual(image2);

  });

  it('should check the input type of product description',()=>{

    const description3=fixture.debugElement.query(By.css('.description'));

    const description:any=component.addProduct.get("description");
    const description2='This is a mango';
    description.setValue(description2);

    fixture.detectChanges();

    expect(description3.nativeElement.value).toEqual(description2);

  });

  it('should check the input type of product price',()=>{

    const price3=fixture.debugElement.query(By.css('.price'));

    const price:any=component.addProduct.get("price");
    const price2=500;
    price.setValue(price2);

    fixture.detectChanges();

    expect(parseInt(price3.nativeElement.value)).toEqual(price2);

  });

  it('should check the input type of product category',()=>{

    const category3=fixture.debugElement.query(By.css('.category'));

    const category:any=component.addProduct.get("category");
    const category2='fruits';
    category.setValue(category2);

    fixture.detectChanges();

    expect(category3.nativeElement.value).toEqual(category2);

  });

  it('should check the input type of product seller name',()=>{

    const sellerName3=fixture.debugElement.query(By.css('.sellerName'));

    const sellerName:any=component.addProduct.get("sellerName");
    const sellerName2='ABC Seller';
    sellerName.setValue(sellerName2);

    fixture.detectChanges();

    expect(sellerName3.nativeElement.value).toEqual(sellerName2);

  });

  it('should check the input type of product seller location',()=>{

    const sellerLocation3=fixture.debugElement.query(By.css('.sellerLocation'));

    const sellerLocation:any=component.addProduct.get("sellerLocation");
    const sellerLocation2='Kolkata';
    sellerLocation.setValue(sellerLocation2);

    fixture.detectChanges();

    expect(sellerLocation3.nativeElement.value).toEqual(sellerLocation2);

  });

  it('should check the input type of product quantity',()=>{
    const quantity3=fixture.debugElement.query(By.css('.quantity'));

    const quantity:any=component.addProduct.get("quantity");
    const quantity2=50;
    quantity.setValue(quantity2);

    fixture.detectChanges();

    expect(parseInt(quantity3.nativeElement.value)).toEqual(quantity2);

  });

  it('should check the button disabled when invalid',()=>{

    const id:any=component.addProduct.get("id");
    const id2='';
    id.setValue(id2);

    const name:any=component.addProduct.get("name");
    const name2='';
    name.setValue(name2);

    const image:any=component.addProduct.get("imageUrl");
    const image2='../url';
    image.setValue(image2);

    const description:any=component.addProduct.get("description");
    const description2='This is a mango';
    description.setValue(description2);

    const price:any=component.addProduct.get("price");
    const price2=500;
    price.setValue(price2);

    const category:any=component.addProduct.get("category");
    const category2='fruits';
    category.setValue(category2);

    const sellerName:any=component.addProduct.get("sellerName");
    const sellerName2='ABC Seller';
    sellerName.setValue(sellerName2);

    const sellerLocation:any=component.addProduct.get("sellerLocation");
    const sellerLocation2='Kolkata';
    sellerLocation.setValue(sellerLocation2);

    const quantity:any=component.addProduct.get("quantity");
    const quantity2=50;
    quantity.setValue(quantity2);

    fixture.detectChanges();

    const btn=fixture.debugElement.query(By.css('#btn1'));
    expect(btn.nativeElement.disabled).toBeTruthy();

  });

});
