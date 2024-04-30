import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  items: MenuItem[] | undefined;
    
    ngOnInit() {
      this.items = [
        {
            label: '¿Quien soy?',
            icon: PrimeIcons.USER,
        },
        {
            label: 'Expericencia',
            icon: PrimeIcons.FILE
        },
        {
          label: 'Proyectos',
          icon: PrimeIcons.BRIEFCASE
        },
        {
          label: 'Contacto',
          icon: PrimeIcons.BOOK
      }
    ];
}
}
