import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PricingPlan } from '../models/pricing.model';
import { MOCK_PRICING_PLANS } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  constructor() { }

  getPricingPlans(): Observable<PricingPlan[]> {
    return of(MOCK_PRICING_PLANS).pipe(delay(500));
  }

  getPlanById(id: string): Observable<PricingPlan | undefined> {
    const plan = MOCK_PRICING_PLANS.find(p => p.id === id);
    return of(plan).pipe(delay(300));
  }
}
