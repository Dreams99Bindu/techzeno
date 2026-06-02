# Techzeno Solutions - Setup & Development Guide

## Complete Setup Instructions

### Step 1: Initial Setup
```bash
# Navigate to project directory
cd c:\Techzeno

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:4200`

---

## Angular CLI Commands Reference

### Generate Components
```bash
# Generate a new component
ng generate component components/my-component
ng g c components/my-component

# Generate a standalone component (already used in this project)
ng generate component components/my-component --standalone

# Generate with SCSS
ng generate component components/my-component --style=scss
```

### Generate Services
```bash
# Generate a service
ng generate service services/my-service
ng g s services/my-service

# Provide in root
ng g s services/my-service --providedIn root
```

### Generate Models/Interfaces
```bash
# Create a new interface file
# (Manually create or use:)
ng generate interface models/my-interface
```

### Generate Modules
```bash
# Generate routing module
ng generate module app-routing --routing

# Generate feature module
ng generate module modules/feature
```

### Other Useful Commands
```bash
# Build for production
ng build --configuration production

# Run development server with specific port
ng serve --port 4300

# Run tests
ng test

# Run e2e tests
ng e2e

# Lint code
ng lint
```

---

## Project Structure Reference

### Adding a New Page

1. **Create the page component**:
```bash
ng g c pages/my-page --standalone
```

2. **Create the page TypeScript file** (`src/app/pages/my-page/my-page.component.ts`):
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  ngOnInit(): void {
    // Component logic
  }
}
```

3. **Add route** in `src/app/app.routes.ts`:
```typescript
{
  path: 'my-page',
  component: MyPageComponent,
  data: { title: 'My Page - Techzeno Solutions' }
}
```

4. **Update navigation** in `src/app/components/navbar/navbar.component.ts`:
```typescript
navLinks = [
  // ... existing links
  { label: 'My Page', path: '/my-page' }
];
```

### Adding a New Service

1. **Create the service**:
```bash
ng g s services/my-service
```

2. **Create models** for the service in `src/app/models/`:
```typescript
export interface MyModel {
  id: string;
  name: string;
}
```

3. **Implement the service** (`src/app/services/my-service.service.ts`):
```typescript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MyModel } from '../models/my-model';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor() { }

  getItems(): Observable<MyModel[]> {
    return of([]).pipe(delay(500));
  }
}
```

4. **Use in component**:
```typescript
constructor(private myService: MyService) {}

ngOnInit(): void {
  this.myService.getItems().subscribe(items => {
    // Handle items
  });
}
```

### Adding a Reusable Component

1. **Create in shared/components**:
```bash
ng g c shared/components/my-card --standalone
```

2. **Add @Input properties**:
```typescript
@Input() title: string = '';
@Input() description: string = '';
```

3. **Use in multiple places**:
```typescript
import { MyCardComponent } from '../../shared/components/my-card/my-card.component';

@Component({
  imports: [MyCardComponent],
  // ...
})
export class MyComponent {
  // ...
}
```

---

## Development Workflow

### Daily Development

1. **Start development server**:
```bash
npm start
```

2. **Open in browser**:
```
http://localhost:4200
```

3. **Make changes** - Hot module replacement (HMR) is enabled
4. **View changes** immediately in browser

### Before Committing

1. **Run linting**:
```bash
npm run lint
```

2. **Build for production**:
```bash
npm run build:prod
```

3. **Check output size**:
```bash
# Check dist folder size
dir dist/techzeno-solutions
```

4. **Commit changes**:
```bash
git add .
git commit -m "Description of changes"
```

---

## Styling Guide

### SCSS Structure

All styles are organized in `src/styles/`:
- `variables.scss` - Color, spacing, typography variables
- `mixins.scss` - Reusable SCSS mixins
- `globals.scss` - Global base styles

### Adding Custom Styles

1. **Component styles** - Use component `.scss` file:
```scss
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';

.my-class {
  color: $text-white;
  padding: $spacing-md;

  @media (max-width: $mobile-breakpoint) {
    padding: $spacing-sm;
  }
}
```

2. **Use variables and mixins**:
```scss
// Colors
color: $primary-blue;
background: $dark-bg;

// Spacing
padding: $spacing-md;
margin: $spacing-lg;

// Mixins
@include flex-center;
@include respond-to('mobile') {
  // Mobile styles
}
```

3. **Animations**:
```scss
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animated {
  animation: slideIn 0.3s ease;
}
```

---

## TypeScript Best Practices

### Strong Typing
```typescript
// ✓ Good - with types
interface User {
  id: string;
  name: string;
  email: string;
}

getUserById(id: string): Observable<User> {
  // ...
}

// ✗ Avoid - without types
getUserById(id) {
  return of({});
}
```

### Observable Handling
```typescript
// ✓ Good - unsubscribe
subscription: Subscription;

ngOnInit(): void {
  this.subscription = this.service.getData().subscribe(data => {
    // handle data
  });
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

// ✓ Better - use async pipe
data$ = this.service.getData();

// In template
{{ data$ | async }}
```

### Error Handling
```typescript
this.service.getData().subscribe({
  next: (data) => {
    // Handle success
  },
  error: (error) => {
    // Handle error
    console.error('Error:', error);
  },
  complete: () => {
    // Handle completion
  }
});
```

---

## Deployment Guide

### Prerequisites
- Node.js v18+ installed
- npm or yarn
- Git repository set up

### Production Build

1. **Build the application**:
```bash
npm run build:prod
```

2. **Output location**: `dist/techzeno-solutions/`

3. **Verify build size**:
```bash
# Should be under 500KB for main bundle (with budget limits in angular.json)
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build:prod

# Deploy
netlify deploy --prod --dir dist/techzeno-solutions
```

### Deploy to GitHub Pages

```bash
# Build with base href for GitHub Pages
ng build --configuration production --base-href=/techzeno/

# Deploy using angular-cli-ghpages
npm install -g angular-cli-ghpages
ngh --dir=dist/techzeno-solutions
```

### Deploy to AWS S3 + CloudFront

```bash
# Build
npm run build:prod

# Upload to S3
aws s3 sync dist/techzeno-solutions s3://your-bucket-name/

# Invalidate CloudFront cache (if using)
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Deploy to Firebase

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize
firebase init hosting

# Build and deploy
npm run build:prod
firebase deploy
```

---

## Environment Configuration

### Development Environment
File: `src/environments/environment.ts`
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Techzeno Solutions',
  appVersion: '1.0.0'
};
```

### Production Environment
File: `src/environments/environment.prod.ts`
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.techzeno.com',
  appName: 'Techzeno Solutions',
  appVersion: '1.0.0'
};
```

### Using Environment Variables
```typescript
import { environment } from '../environments/environment';

export class ApiService {
  apiUrl = environment.apiUrl;
  
  constructor() {
    console.log('API URL:', this.apiUrl);
    console.log('Is Production:', environment.production);
  }
}
```

---

## Performance Optimization Tips

### Bundle Size
```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
ng build --stats-json
webpack-bundle-analyzer dist/techzeno-solutions/stats.json
```

### Lazy Loading Routes
```typescript
export const routes: Routes = [
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component')
      .then(m => m.ServicesComponent)
  }
];
```

### Image Optimization
```html
<!-- Use WebP with fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### Change Detection
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  @Input() data: any;
}
```

---

## Troubleshooting

### Port Already in Use
```bash
# Use different port
ng serve --port 4300

# On Windows, find and kill process using port 4200
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### SCSS Compilation Error
```bash
# Reinstall sass
npm uninstall sass
npm install --save-dev sass
```

### Build Failed
```bash
# Clear Angular cache
rm -rf .angular
npm run build:prod
```

---

## Version Updates

### Update Angular
```bash
# Check for updates
ng update @angular/cli @angular/core

# Update to latest
ng update @angular/cli @angular/core --allow-dirty --force
```

### Update Dependencies
```bash
# List outdated packages
npm outdated

# Update all
npm update

# Update specific package
npm install package-name@latest
```

---

## Security Best Practices

1. **Sanitize user input**:
```typescript
import { DomSanitizer } from '@angular/platform-browser';

constructor(private sanitizer: DomSanitizer) {}

getSafeUrl(url: string) {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
```

2. **Use Content Security Policy**:
```html
<!-- In index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self'">
```

3. **Environment Variables**:
- Never commit `.env` files
- Use GitHub Secrets for CI/CD
- Rotate API keys regularly

---

## Useful Resources

- [Angular Documentation](https://angular.io/docs)
- [SCSS Guide](https://sass-lang.com/guide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular CLI Commands](https://angular.io/cli)

---

## Support & Contact

For issues or questions:
- 📧 Email: support@techzeno.com
- 🐛 Issue Tracker: GitHub Issues
- 💬 Discussions: GitHub Discussions

---

**Last Updated**: June 2024
**Version**: 1.0.0
