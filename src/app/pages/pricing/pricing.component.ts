import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { PricingCardComponent } from '../../shared/components/pricing-card/pricing-card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { PricingService } from '../../services/pricing.service';
import { PricingPlan } from '../../models/pricing.model';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, PricingCardComponent, SectionHeaderComponent],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations: [
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
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PricingComponent implements OnInit {
  plans: PricingPlan[] = [];
  isLoading = true;

  faqs = [
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade your plan anytime. We\'ll pro-rate the difference.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Absolutely! Our Enterprise plan is fully customizable based on your specific needs.'
    },
    {
      question: 'What\'s included in the support?',
      answer: 'All plans include email support. Starter includes 1 month, Professional includes 3 months, and Enterprise includes ongoing support.'
    },
    {
      question: 'How long does a project take?',
      answer: 'Typical projects range from 4-8 weeks depending on complexity and scope.'
    },
    {
      question: 'Do you provide hosting?',
      answer: 'We help you set up on reliable hosting providers and can manage it for you.'
    },
    {
      question: 'Can you integrate with my existing systems?',
      answer: 'Yes, we specialize in API integrations and can connect your website with your existing tools and databases.'
    }
  ];

  constructor(private pricingService: PricingService) {}

  ngOnInit(): void {
    this.pricingService.getPricingPlans().subscribe(plans => {
      this.plans = plans;
      this.isLoading = false;
    });
  }

  toggleFaq(index: number): void {
    // FAQ toggle functionality
  }
}
