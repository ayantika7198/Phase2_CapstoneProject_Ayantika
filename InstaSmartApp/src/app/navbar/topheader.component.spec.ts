import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { MaterialExampleModule } from 'src/material.module';

import { TopheaderComponent } from './topheader.component';

describe('TopheaderComponent', () => {
  let component: TopheaderComponent;
  let fixture: ComponentFixture<TopheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopheaderComponent ],
      imports:[MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the header menu logo',()=>{
    expect(fixture.debugElement.query(By.css('.header_menu_logo'))).toBeTruthy();
  });

  it('should have the header menu sign in and accounts and lists',()=>{
    expect(fixture.debugElement.query(By.css('#header1'))).toBeTruthy();
  });

  it('should have the header menu Returns and Orders',()=>{
    expect(fixture.debugElement.query(By.css('#header2'))).toBeTruthy();
  });

  it('should have the cart',()=>{
    expect(fixture.debugElement.query(By.css('.header_menu_cart'))).toBeTruthy();
  });

  it('should have the logo name as InstaSmart',()=>{

    const logo: HTMLElement=fixture.debugElement.query(By.css('.header_menu_logo')).nativeElement;
    expect(logo.textContent).toEqual('InstaSmart');
  })


});
