import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  EmailValidator,
  FormBuilder,
} from '@angular/forms';

import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) {}

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      massage: new FormControl(''),
    });
  }

  // convenience getter for easy access to form fields
  get email() {
    return this.contactForm.get('email');
  }
  onSubmit(contactForm: any) {
    console.log(contactForm);
    this.contact.postMessege(contactForm).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
