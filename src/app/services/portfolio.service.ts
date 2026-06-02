import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PortfolioProject } from '../models/portfolio.model';
import { MOCK_PORTFOLIO_PROJECTS } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor() { }

  getProjects(): Observable<PortfolioProject[]> {
    return of(MOCK_PORTFOLIO_PROJECTS).pipe(delay(500));
  }

  getProjectById(id: string): Observable<PortfolioProject | undefined> {
    const project = MOCK_PORTFOLIO_PROJECTS.find(p => p.id === id);
    return of(project).pipe(delay(300));
  }

  getProjectsByCategory(category: string): Observable<PortfolioProject[]> {
    const filtered = MOCK_PORTFOLIO_PROJECTS.filter(p => p.category === category);
    return of(filtered).pipe(delay(400));
  }
}
