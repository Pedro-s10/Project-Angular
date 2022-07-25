import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Valorant';
  menuItems: MenuItem [] = [
    {
      icon: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard',
    },
    {
      icon: 'sports_martial_arts',
      routerLink: '/agents',
      toolTipText: 'Agents',
    }
  ];
}
