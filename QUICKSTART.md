# Techzeno Solutions - Quick Start Guide

## ⚡ Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
cd c:\Techzeno
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Open in Browser
```
http://localhost:4200
```

## 📁 Project Structure at a Glance

```
Techzeno/
├── src/
│   ├── app/
│   │   ├── pages/                  # Page components
│   │   ├── components/             # Global components (navbar, footer)
│   │   ├── shared/components/      # Reusable components
│   │   ├── services/               # Services (contact, portfolio, etc.)
│   │   ├── models/                 # TypeScript interfaces
│   │   ├── app.routes.ts           # Routing configuration
│   │   └── app.component.ts        # Root component
│   ├── styles/                     # Global SCSS
│   ├── assets/                     # Images, fonts, etc.
│   ├── environments/               # Environment config
│   ├── index.html                  # Main HTML
│   └── main.ts                     # Bootstrap file
├── angular.json                    # Angular configuration
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
└── README.md                       # Full documentation
```

## 🎯 Available Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero, services, portfolio |
| `/about` | About | Company story, team, values |
| `/services` | Services | All 8 services detailed |
| `/portfolio` | Portfolio | Project showcase |
| `/pricing` | Pricing | 3 pricing tiers |
| `/contact` | Contact | Contact form with validation |

## 🛠️ Common Commands

```bash
# Development
npm start              # Start dev server (http://localhost:4200)

# Build
npm run build          # Build for development
npm run build:prod     # Build for production

# Testing
npm test              # Run unit tests
npm run lint          # Run linter

# Watch mode
npm run watch         # Rebuild on changes
```

## 📦 Key Dependencies

- **@angular/core** - Angular framework
- **@angular/router** - Client-side routing
- **@angular/forms** - Reactive forms
- **@angular/animations** - Smooth animations
- **rxjs** - Reactive programming
- **scss** - SCSS compilation

## 🎨 Customization Tips

### Change Colors
Edit `src/styles/variables.scss`:
```scss
$primary-blue: #0066ff;    // Change brand color
$secondary-blue: #00d4ff;  // Change secondary color
```

### Update Content
Edit content in:
- `src/app/pages/*/component.html` - Page content
- `src/app/services/mock-data/mock-data.ts` - Mock data

### Add New Page
1. Create component: `ng g c pages/my-page --standalone`
2. Add route in `app.routes.ts`
3. Add navigation link in navbar

## 📱 Responsive Design

- **Mobile**: 480px and below
- **Tablet**: 481px to 768px
- **Desktop**: 769px and above

All components are fully responsive with mobile-first approach.

## 🚀 Deploy in 5 Minutes

### Vercel
```bash
npm install -g vercel
npm run build:prod
vercel
```

### Netlify
```bash
npm run build:prod
netlify deploy --prod --dir dist/techzeno-solutions
```

### GitHub Pages
```bash
ng build --prod --base-href=/techzeno/
ngh
```

## 📚 File Reference

### Components
- **navbar.component.ts** - Navigation with logo and menu
- **footer.component.ts** - Footer with links and contact
- **service-card.component.ts** - Service display card
- **portfolio-card.component.ts** - Project showcase card
- **pricing-card.component.ts** - Pricing plan card
- **testimonial-card.component.ts** - Client review card

### Services
- **contact.service.ts** - Handle contact form submissions
- **services.service.ts** - Manage services data
- **portfolio.service.ts** - Get portfolio projects
- **pricing.service.ts** - Get pricing plans
- **team.service.ts** - Get team information
- **testimonial.service.ts** - Get testimonials

### Styles
- **variables.scss** - Colors, spacing, sizes
- **mixins.scss** - Reusable SCSS functions
- **globals.scss** - Base styles and utilities

## 🔗 Navigation Structure

```
Home
├── About
├── Services
├── Portfolio
├── Pricing
└── Contact
```

## ⚙️ Configuration Files

- `angular.json` - Angular CLI configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - NPM dependencies
- `tsconfig.app.json` - App-specific TypeScript config
- `tsconfig.spec.json` - Testing TypeScript config

## 🎯 Next Steps

1. **Read full docs**: See `README.md` for complete documentation
2. **Read setup guide**: See `SETUP_GUIDE.md` for detailed instructions
3. **Customize**: Update colors, content, and branding
4. **Deploy**: Choose your hosting provider and deploy
5. **Connect API**: Replace mock services with real APIs

## 📞 Quick Reference

```typescript
// Import a service
import { ContactService } from '../../services/contact.service';

// Inject in component
constructor(private contactService: ContactService) {}

// Use in component
this.contactService.submitContact(data).subscribe(
  response => console.log('Success', response),
  error => console.error('Error', error)
);
```

## ⚡ Performance Notes

- All animations use CSS/Angular animations (no jQuery)
- Images use lazy loading by default
- SCSS is optimized for production builds
- Bundle size is under 500KB (with optimizations)

## 🐛 Troubleshooting

**Issue**: Port 4200 already in use
```bash
ng serve --port 4300
```

**Issue**: SCSS error
```bash
npm uninstall sass
npm install --save-dev sass
```

**Issue**: Build fails
```bash
rm -rf .angular node_modules
npm install
npm run build
```

---

**Ready to start?**
```bash
npm start
```

Then open: http://localhost:4200

Enjoy building with Techzeno Solutions! 🚀
