import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { TeamService } from '../../services/team.service';
import { TeamMember } from '../../models/team-member.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerItems', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  teamMembers: TeamMember[] = [];
  isLoading = true;

  values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to stay ahead.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Your success is our success. We work as an extension of your team.'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We never settle for anything less than the best quality.'
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'We help businesses scale and achieve their ambitious goals.'
    }
  ];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeamMembers().subscribe(members => {
      this.teamMembers = members;
      this.isLoading = false;
    });
  }
}
