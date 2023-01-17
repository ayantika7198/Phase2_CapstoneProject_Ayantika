import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { ProductlistComponent } from './productlist.component';

//Describing the ProductList Component
describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  //Declaring the component and importing the modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistComponent ],
      imports:[HttpClientModule, StoreModule.forRoot({}),RouterTestingModule]
    })
    .compileComponents();

    //Creating Testbed for component
    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it tests that component should be created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //it tests that filter by category is there or not
  it('should render the Filter By Category',()=>{
    expect(fixture.debugElement.query(By.css('#filterCategory'))).toBeTruthy();
  });

  //it tests that filter by price is there or not
  it('should render the Filter By Price',()=>{
    expect(fixture.debugElement.query(By.css('#filterPrice'))).toBeTruthy();
  });

  //it tests that heading is proper or not
  it('should render the heading and show List Of Products',()=>{

    expect(fixture.debugElement.query(By.css('#heading'))).toBeTruthy();

    const heading:HTMLElement=fixture.debugElement.query(By.css('#heading')).nativeElement;
    expect(heading.textContent).toEqual('List Of Our Products');

  });

  //it tests that the products are rendering properly or not
  it('should render products correctly',()=>{

    component.products=[
      {
        "id":"P015",
        "name":"Grey Jeans",
        "imageUrl":"../../assets/images/jeans3.jpg",
        "description":"This is a Grey Jeans",
        "price": 6000,
        "category": "Jeans",
        "sellerName":"LOP Seller",
        "sellerLocation":"Jaipur",
        "quantity":0
    }
    ];

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.cont'))).toBeTruthy();

  });

  //it tests that the add, edit, delete button should be disabled for user
  it('should check the add, edit, delete is hidden when logged in as user',()=>{
    component.showIcon=false;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('#addnew'))).toBeFalsy();
    expect(fixture.debugElement.query(By.css('#edit'))).toBeFalsy();
    expect(fixture.debugElement.query(By.css('#delete'))).toBeFalsy();
  });

});
