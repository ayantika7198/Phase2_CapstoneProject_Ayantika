import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { CarticonComponent } from './carticon.component';


//Describing the test cases for CartIcon Component
describe('CarticonComponent', () => {
  let component: CarticonComponent;
  let fixture: ComponentFixture<CarticonComponent>;

  //For Declaraing the Component And Importing the required modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarticonComponent ],
      imports:[HttpClientModule, StoreModule.forRoot({}),MatIconModule]
    })
    .compileComponents();

    //For Creating the testbed for the component
    fixture = TestBed.createComponent(CarticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the carticon component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the icon of cart is properly shown or not
  it('should show the Cart Icon',()=>{


    expect(fixture.debugElement.query(By.css('.header_menu_cart'))).toBeTruthy();
  });
});
