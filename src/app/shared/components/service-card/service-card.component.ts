import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Service } from '../../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
  animations: [
    trigger('hover', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServiceCardComponent {
  @Input() service!: Service;

  getIcon(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      'globe': '🌐',
      'shopping-cart': '🛒',
      'code': '💻',
      'zap': '⚡',
      'server': '🖥️',
      'database': '🗄️',
      'shield': '🔒',
      'search': '🔍'
    };
    return iconMap[iconName] || '✨';
  }
}
