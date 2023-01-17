import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

import { AboutUsComponent } from './about-us.component';

//Testing The AboutUs Component
describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  //Configuring The Declarations and Imports
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ],
      imports:[MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the aboutus component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the First Article in AboutUs is Created or not
  it('should have the About Us Card One',()=>{
    expect(fixture.debugElement.query(By.css('#card1'))).toBeTruthy();
  });

  //It tests that the Second Article in AboutUs is created or not
  it('should have the About Us Card Two',()=>{
    expect(fixture.debugElement.query(By.css('#card2'))).toBeTruthy();
  });
});
