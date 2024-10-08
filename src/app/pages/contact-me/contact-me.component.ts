import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import emailjs from '@emailjs/browser';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  contactForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.contactForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(10)]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  sendMessage() {
    console.log(this.contactForm.value);
    emailjs.init(environment.EMAILJS_USER_ID)

    emailjs.send(environment.EMAILJS_SERVICE_ID, environment.EMAILJS_TEMPLATE_ID, {
      from_name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    })
      // TODO: en faire un toast et clear le form en cas de success
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
    })
  }
}
