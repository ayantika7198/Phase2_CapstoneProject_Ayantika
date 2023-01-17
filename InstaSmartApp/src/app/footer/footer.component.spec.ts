import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

//Describing the FooterComponent TestCases
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  //Declaring the Footer Component
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    //Creating TestBed for Footer Component
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the Footer Component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the container containing footer images and link is coming or not
  it('should have the container containing footer images and the link',()=>{
    expect(fixture.debugElement.query(By.css('.container'))).toBeTruthy();
  });
});
