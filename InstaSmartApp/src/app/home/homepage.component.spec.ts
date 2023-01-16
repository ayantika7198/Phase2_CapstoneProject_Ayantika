import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      imports:[NgbModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the welcome message correctly',()=>{
    expect(fixture.debugElement.query(By.css('#welcome'))).toBeTruthy();

    const welcome:HTMLElement=fixture.debugElement.query(By.css('#welcome')).nativeElement;
    expect(welcome.textContent).toEqual('Welcome To Our InstaSmart');

  });

  it('should render the image1 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image1'))).toBeTruthy();
  });

  it('should render the image2 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image2'))).toBeTruthy();
  });

  it('should render the image3 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image3'))).toBeTruthy();
  });

  it('should render the image4 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image4'))).toBeTruthy();
  });

  it('should render the image5 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image5'))).toBeTruthy();
  });

  
});
