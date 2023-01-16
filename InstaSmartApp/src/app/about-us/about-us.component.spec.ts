import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the About Us Card One',()=>{
    expect(fixture.debugElement.query(By.css('#card1'))).toBeTruthy();
  });

  it('should have the About Us Card Two',()=>{
    expect(fixture.debugElement.query(By.css('#card2'))).toBeTruthy();
  });
});
