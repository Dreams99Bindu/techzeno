import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Service } from '../models/service.model';
import { MOCK_SERVICES } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor() { }

  getServices(): Observable<Service[]> {
    return of(MOCK_SERVICES).pipe(delay(500));
  }

  getServiceById(id: string): Observable<Service | undefined> {
    const service = MOCK_SERVICES.find(s => s.id === id);
    return of(service).pipe(delay(300));
  }
}
