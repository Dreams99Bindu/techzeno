import { Component, OnInit } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = false;

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set default meta tags
    this.metaService.updateTag({
      name: 'description',
      content: 'Techzeno Solutions - Professional web development agency. Building Websites. Growing Businesses.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'web development, Angular development, Node.js, web design, digital agency'
    });
    this.metaService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    });

    // Listen to router events for loading state
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        this.isLoading = true;
        window.scrollTo(0, 0);
      });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isLoading = false;
        // Update page title based on route data
        const title = this.router.routerState.root.firstChild?.snapshot.data['title'];
        if (title) {
          this.titleService.setTitle(title);
        }
      });
  }
}
