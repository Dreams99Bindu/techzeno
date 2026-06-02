import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Testimonial } from '../models/testimonial.model';
import { MOCK_TESTIMONIALS } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  constructor() { }

  getTestimonials(): Observable<Testimonial[]> {
    return of(MOCK_TESTIMONIALS).pipe(delay(500));
  }

  getTestimonialById(id: string): Observable<Testimonial | undefined> {
    const testimonial = MOCK_TESTIMONIALS.find(t => t.id === id);
    return of(testimonial).pipe(delay(300));
  }
}
