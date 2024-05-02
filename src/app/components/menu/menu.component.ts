import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    TabMenuModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

ngOnInit() {
    this.items = [
        {
          label: '¿Quien es?',
          icon: PrimeIcons.USER,
          routerLink: 'about-me'
        },
        {
          label: 'Experiencia',
          icon: PrimeIcons.FILE,
          routerLink: 'experience'
        },
        {
          label: 'Proyectos',
          icon: PrimeIcons.BRIEFCASE,
          routerLink: 'projects'
        },
        {
          label: 'Contacto',
          icon: PrimeIcons.BOOK,
          routerLink: 'contact'
        }
    ];
    this.activeItem = this.items[0];
}
}