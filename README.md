# Techzeno Solutions - Web Development Agency

A modern, professional, and responsive website for Techzeno Solutions built with Angular 17+, TypeScript, and SCSS.

## Features

- ✨ Modern SaaS-style design with dark theme and blue accents
- 📱 Fully responsive and mobile-first
- ⚡ High performance and optimized
- 🎨 Beautiful animations and transitions
- 🔒 Secure and enterprise-grade
- 📊 SEO-friendly structure
- 🎯 Conversion-focused design

## Technology Stack

- **Frontend**: Angular 17+, TypeScript, SCSS
- **Components**: Standalone components, Reactive Forms
- **Animations**: Angular Animations API
- **Routing**: Angular Router with lazy loading support
- **State Management**: RxJS Observables
- **Build Tool**: Angular CLI

## Project Structure

```
src/
├── app/
│   ├── pages/              # Page components
│   │   ├── home/
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── pricing/
│   │   └── contact/
│   ├── components/         # Shared components
│   │   ├── navbar/
│   │   └── footer/
│   ├── shared/            # Reusable components
│   │   └── components/
│   │       ├── service-card/
│   │       ├── portfolio-card/
│   │       ├── pricing-card/
│   │       ├── testimonial-card/
│   │       └── section-header/
│   ├── services/          # Services
│   │   ├── contact.service.ts
│   │   ├── services.service.ts
│   │   ├── portfolio.service.ts
│   │   ├── pricing.service.ts
│   │   ├── team.service.ts
│   │   ├── testimonial.service.ts
│   │   └── mock-data/
│   ├── models/            # TypeScript interfaces
│   ├── app.routes.ts      # Routing configuration
│   ├── app.component.ts
│   └── app.component.html
├── styles/               # Global SCSS
│   ├── variables.scss
│   ├── mixins.scss
│   └── globals.scss
├── environments/         # Environment configuration
├── index.html
├── main.ts
└── favicon.ico
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Techzeno
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

## Available Commands

### Development
```bash
npm start                  # Start development server
npm run watch             # Build in watch mode
```

### Production
```bash
npm run build             # Build for production
npm run build:prod        # Build with production optimizations
```

### Testing & Quality
```bash
npm test                  # Run unit tests
npm run lint              # Run linter
```

## Pages & Features

### 1. Home Page (`/`)
- Hero section with CTA
- Company introduction
- Services overview
- Why Choose Us section
- Process section with 6 steps
- Portfolio showcase
- Client testimonials
- Final CTA

### 2. About Page (`/about`)
- Company story
- Mission & Vision
- Core values
- Team section with member details
- Why work with us

### 3. Services Page (`/services`)
- All 8 services displayed with details
- Service process timeline
- Technology stack information

### 4. Portfolio Page (`/portfolio`)
- Project showcase with images
- Technology tags
- Client benefits section

### 5. Pricing Page (`/pricing`)
- 3 pricing tiers (Starter, Professional, Enterprise)
- What's included section
- FAQ section

### 6. Contact Page (`/contact`)
- Contact form with validation
- Contact information
- Responsive design
- Success/Error messages

## Component Documentation

### Service Card Component
Displays individual service information with icon, title, description, features, and CTA.

### Portfolio Card Component
Showcases portfolio projects with image, description, technologies, and details button.

### Pricing Card Component
Displays pricing plans with highlighted option for popular plan.

### Testimonial Card Component
Shows client testimonials with rating, avatar, and company info.

### Section Header Component
Reusable header for sections with title, subtitle, and description.

## Services & APIs

All services are mock services using RxJS Observables. They can be easily replaced with real API calls.

### Available Services
- `ContactService` - Handles contact form submissions
- `ServicesService` - Manages service data
- `PortfolioService` - Retrieves portfolio projects
- `PricingService` - Manages pricing plans
- `TeamService` - Retrieves team information
- `TestimonialService` - Manages testimonials

## Styling Architecture

### Variables (`variables.scss`)
- Color palette
- Typography settings
- Spacing system
- Breakpoints
- Shadows and transitions

### Mixins (`mixins.scss`)
- Responsive breakpoint mixin
- Flexbox utilities
- Button styles
- Container utilities
- Custom scrollbar styling

### Globals (`globals.scss`)
- Base styles
- Typography
- Form elements
- Animations
- Utility classes

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1440px

## SEO Features

- Semantic HTML structure
- Meta tags configuration
- Page title management via route data
- Structured content
- Mobile-friendly design

## Performance Optimizations

- Production build with optimization enabled
- Lazy loading routes (can be configured)
- Standalone components (no module overhead)
- Optimized animations
- Efficient SCSS compilation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production
```bash
npm run build:prod
```

The production build will be in the `dist/techzeno-solutions` directory.

### Deploy to Static Hosting
```bash
# Copy dist/techzeno-solutions to your hosting provider
# Popular options:
# - Vercel
# - Netlify
# - GitHub Pages
# - AWS S3 + CloudFront
# - Firebase Hosting
```

### Environment Configuration
Update `src/environments/environment.prod.ts` with your production API URL and settings.

## Customization Guide

### Colors
Edit `src/styles/variables.scss` to change the color scheme:
```scss
$primary-blue: #0066ff;      // Change to your brand color
$secondary-blue: #00d4ff;    // Change to your secondary color
```

### Typography
Modify font family and sizes in `variables.scss`:
```scss
$font-primary: 'Your Font', sans-serif;
$font-size-base: 16px;
```

### Content
Update content in each component's HTML template. Mock data is in `src/app/services/mock-data/mock-data.ts`.

## API Integration

To connect to a real backend:

1. Replace mock services with actual HTTP calls:
```typescript
// services/services.service.ts
getServices(): Observable<Service[]> {
  return this.http.get<Service[]>(`${environment.apiUrl}/services`);
}
```

2. Update environment URLs:
```typescript
// environments/environment.ts
export const environment = {
  apiUrl: 'https://your-api.com'
};
```

## Testing

The project is set up for unit testing with Angular's testing utilities. Add tests in `*.spec.ts` files.

## Future Enhancements

- [ ] Add unit and E2E tests
- [ ] Implement real API integration
- [ ] Add blog section
- [ ] Add user authentication
- [ ] Implement admin dashboard
- [ ] Add multi-language support
- [ ] Add dark/light theme toggle
- [ ] Implement email notifications
- [ ] Add analytics integration

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is proprietary to Techzeno Solutions.

## Support

For support or questions, contact: info@techzeno.com

## Company Information

**Techzeno Solutions**
Building Websites. Growing Businesses.

- 📧 Email: info@techzeno.com
- 📞 Phone: +91 98765 43210
- 🌐 Website: www.techzeno.com
- 📍 Location: New Delhi, India

---

**Version**: 1.0.0
**Last Updated**: June 2024
**Angular Version**: 17+
