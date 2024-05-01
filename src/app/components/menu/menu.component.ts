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
          label: '¿Quien soy?',
          icon: PrimeIcons.USER,
        },
        {
          label: 'Experiencia',
          icon: PrimeIcons.FILE,
        },
        {
          label: 'Proyectos',
          icon: PrimeIcons.BRIEFCASE,
          routerLink: 'payment'
        },
        {
          label: 'Contacto',
          icon: PrimeIcons.BOOK,
          routerLink: 'confirmation'
        }
    ];
    this.activeItem = this.items[0];
}
}