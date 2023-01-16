import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';

import { ContactusComponent } from './contactus.component';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusComponent ],
      imports: [FormsModule, ReactiveFormsModule, MaterialExampleModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the first name',()=>{
    expect(fixture.debugElement.query(By.css('.firstname'))).toBeTruthy();
  });

  it('should have the last name',()=>{
    expect(fixture.debugElement.query(By.css('.lastname'))).toBeTruthy();
  });

  it('should have the email',()=>{
    expect(fixture.debugElement.query(By.css('.email'))).toBeTruthy();
  });

  it('should have the Store name',()=>{
    expect(fixture.debugElement.query(By.css('.store'))).toBeTruthy();
  });

  it('should have the comments field',()=>{
    expect(fixture.debugElement.query(By.css('.comment'))).toBeTruthy();
  });

  it('should check the form control name of firstname',()=>{
    const firstname=fixture.debugElement.query(By.css('.firstname'));
    const firstname2=firstname.nativeElement.getAttribute('formControlName');
    expect(firstname2).toEqual('firstname');

  });

  it('should check the form control name of lastname',()=>{
    const lastname=fixture.debugElement.query(By.css('.lastname'));
    const lastname2=lastname.nativeElement.getAttribute('formControlName');
    expect(lastname2).toEqual('lastname');

  });

  it('should check the form control name of email',()=>{
    const email=fixture.debugElement.query(By.css('.email'));
    const email2=email.nativeElement.getAttribute('formControlName');
    expect(email2).toEqual('email');

  });

  it('should check the form control name of Store name',()=>{
    const store=fixture.debugElement.query(By.css('.store'));
    const store2=store.nativeElement.getAttribute('formControlName');
    expect(store2).toEqual('store');

  });

  it('should check the form control name of Comments field',()=>{
    const comment=fixture.debugElement.query(By.css('.comment'));
    const comment2=comment.nativeElement.getAttribute('formControlName');
    expect(comment2).toEqual('comment');

  });

  it('should check the input type of firstname',()=>{

    const firstname3=fixture.debugElement.query(By.css('.firstname'));

    const firstname:any=component.addContact.get("firstname");
    const firstname2='Ayantika';
    firstname.setValue(firstname2);

    fixture.detectChanges();

    expect(firstname3.nativeElement.value).toEqual(firstname2);

  });

  it('should check the input type of lastname',()=>{

    const lastname3=fixture.debugElement.query(By.css('.lastname'));

    const lastname:any=component.addContact.get("lastname");
    const lastname2='Datta';
    lastname.setValue(lastname2);

    fixture.detectChanges();

    expect(lastname3.nativeElement.value).toEqual(lastname2);

  });

  it('should check the input type of email',()=>{

    const email3=fixture.debugElement.query(By.css('.email'));

    const email:any=component.addContact.get("email");
    const email2='ayantika@gmail.com';
    email.setValue(email2);

    fixture.detectChanges();

    expect(email3.nativeElement.value).toEqual(email2);

  });

  /*it('should check input type of Store Name and bind the configured value',()=>{

    const store3=fixture.debugElement.query(By.css('.store')).nativeElement;

    store3.selectedIndex=0;

    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      let text=store3.options[store3.selectedIndex].label;
      expect(text).toBe('ABC Store');
    });

  });*/

  it('should check the input type of Comments Field',()=>{

    const comment3=fixture.debugElement.query(By.css('.comment'));

    const comment:any=component.addContact.get("comment");
    const comment2='This is a comment';
    comment.setValue(comment2);

    fixture.detectChanges();

    expect(comment3.nativeElement.value).toEqual(comment2);

  });
});
