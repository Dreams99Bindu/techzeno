import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home - Techzeno Solutions' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Us - Techzeno Solutions' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Services - Techzeno Solutions' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { title: 'Portfolio - Techzeno Solutions' }
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: { title: 'Pricing - Techzeno Solutions' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us - Techzeno Solutions' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
