import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { CarticonComponent } from './carticon.component';

describe('CarticonComponent', () => {
  let component: CarticonComponent;
  let fixture: ComponentFixture<CarticonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarticonComponent ],
      imports:[HttpClientModule, StoreModule.forRoot({}),MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarticonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the Cart Icon',()=>{


    expect(fixture.debugElement.query(By.css('.header_menu_cart'))).toBeTruthy();
  });
});
