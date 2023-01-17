import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './homepage.component';


//Describing the homepage component testcases
describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  //Declaring the component and importing the necessary modules
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      imports:[NgbModule]
    })
    .compileComponents();

    //Creating testbed for home page component
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //It tests that the component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //It tests that the welcome message is comming correctly or not
  it('should have the welcome message correctly',()=>{
    expect(fixture.debugElement.query(By.css('#welcome'))).toBeTruthy();

    const welcome:HTMLElement=fixture.debugElement.query(By.css('#welcome')).nativeElement;
    expect(welcome.textContent).toEqual('Welcome To Our InstaSmart');

  });

  //It tests that the first image in carousal comes or not
  it('should render the image1 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image1'))).toBeTruthy();
  });

  //It tests that the second image in carousal comes or not
  it('should render the image2 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image2'))).toBeTruthy();
  });

  //It tests that the third image in carousal comes or not
  it('should render the image3 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image3'))).toBeTruthy();
  });

  //It tests that the fourth image in carousal comes or not
  it('should render the image4 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image4'))).toBeTruthy();
  });
  
  //It tests that the fifth image in carousal comes or not
  it('should render the image5 in carousal correctly',()=>{
    expect(fixture.debugElement.query(By.css('#image5'))).toBeTruthy();
  });

  
});
