import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      massage: new FormControl(''),
    });

  }

  // convenience getter for easy access to form fields
  get email() { return this.contactForm.get('email'); }
  onSubmit() {

    console.log(this.contactForm.value);


  }

}
