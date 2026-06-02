import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Pricing', path: '/pricing' }
  ];

  services = [
    'Web Development',
    'E-Commerce Solutions',
    'Angular Development',
    'Custom Applications',
    'SEO Optimization'
  ];

  socials = [
    { icon: '🔗', label: 'LinkedIn', url: '#' },
    { icon: '𝕏', label: 'Twitter', url: '#' },
    { icon: '🐙', label: 'GitHub', url: '#' },
    { icon: '📘', label: 'Facebook', url: '#' }
  ];
}
