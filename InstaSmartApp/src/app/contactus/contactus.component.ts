import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{

  addContact!:FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    
    this.addContact=this.formBuilder.group({
      firstname:['',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      lastname:['',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      email:['',[Validators.required, Validators.email]],
      store:['',[Validators.required]],
      comment:['',[Validators.required]]
    });
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.addContact.controls[controlName].hasError(errorName);
    }


  contactSubmit(){
    alert("Form Submitted Successfully");
  }
}
