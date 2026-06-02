import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ContactRequest, ContactResponse } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() { }

  submitContact(request: ContactRequest): Observable<ContactResponse> {
    // Simulate API call
    return of({
      success: true,
      message: 'Thank you for reaching out! We will contact you shortly.',
      timestamp: new Date()
    }).pipe(delay(1000));
  }

  validateEmail(email: string): Observable<boolean> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return of(emailRegex.test(email)).pipe(delay(300));
  }

  validatePhone(phone: string): Observable<boolean> {
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    return of(phoneRegex.test(phone) && phone.length >= 10).pipe(delay(300));
  }
}
