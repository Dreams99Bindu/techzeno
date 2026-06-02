import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TeamMember } from '../models/team-member.model';
import { MOCK_TEAM_MEMBERS } from './mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor() { }

  getTeamMembers(): Observable<TeamMember[]> {
    return of(MOCK_TEAM_MEMBERS).pipe(delay(500));
  }

  getTeamMemberById(id: string): Observable<TeamMember | undefined> {
    const member = MOCK_TEAM_MEMBERS.find(m => m.id === id);
    return of(member).pipe(delay(300));
  }
}
