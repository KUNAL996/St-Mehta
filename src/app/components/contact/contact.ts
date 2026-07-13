import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Footer } from "../../core/modules/footer/footer";

@Component({
  selector: 'app-contact',
  imports: [Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',

  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.8s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class Contact {
  contactDetails = {
    address: 'Junction of Cama and Hansoti Lane, Ghatkopar (W), Mumbai – 400086',
    email: 'rnshethengpri@gmail.com',
    alternateemail: 'smstmehta@gmail.com',
    phone: '022- 25140623',
    timings: 'Monday to Friday: 7.30 AM to 2.30 PM\nSaturday: 11.00 AM to 3.00 PM\nSunday: Closed'
  };
}
