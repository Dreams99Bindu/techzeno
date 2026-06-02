import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { PortfolioCardComponent } from '../../shared/components/portfolio-card/portfolio-card.component';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ServicesService } from '../../services/services.service';
import { PortfolioService } from '../../services/portfolio.service';
import { TestimonialService } from '../../services/testimonial.service';
import { Service } from '../../models/service.model';
import { PortfolioProject } from '../../models/portfolio.model';
import { Testimonial } from '../../models/testimonial.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ServiceCardComponent,
    PortfolioCardComponent,
    TestimonialCardComponent,
    SectionHeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  services: Service[] = [];
  portfolioProjects: PortfolioProject[] = [];
  testimonials: Testimonial[] = [];
  isLoading = true;

  whyChooseUs = [
    {
      icon: '🎯',
      title: 'Strategic Approach',
      description: 'We align our solutions with your business goals for maximum impact.'
    },
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'Latest technologies and best practices in every project.'
    },
    {
      icon: '🤝',
      title: 'Client-Centric',
      description: 'Your success is our success. Dedicated support every step.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality.'
    }
  ];

  processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We understand your business, goals, and target audience.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive plan tailored to your needs.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Create beautiful, user-friendly designs.'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Build robust, scalable solutions.'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Rigorous QA to ensure perfection.'
    },
    {
      number: '06',
      title: 'Launch',
      description: 'Deploy and monitor your solution.'
    }
  ];

  constructor(
    private servicesService: ServicesService,
    private portfolioService: PortfolioService,
    private testimonialService: TestimonialService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    Promise.all([
      this.servicesService.getServices().toPromise(),
      this.portfolioService.getProjects().toPromise(),
      this.testimonialService.getTestimonials().toPromise()
    ]).then(([services, projects, testimonials]) => {
      this.services = services || [];
      this.portfolioProjects = projects || [];
      this.testimonials = testimonials || [];
      this.isLoading = false;
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isLastStep(step: any): boolean {
    return this.processSteps[this.processSteps.length - 1] === step;
  }
}
