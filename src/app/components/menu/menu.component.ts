import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    TabMenuModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.loadMenuItems();
    });
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.translate.get('MENU').subscribe((menuTranslations) => {
      this.items = [
        {
          label: menuTranslations.ABOUT_ME,
          icon: PrimeIcons.USER,
          routerLink: 'about-me'
        },
        {
          label: menuTranslations.EXPERIENCE,
          icon: PrimeIcons.FILE,
          routerLink: 'experience'
        },
        {
          label: menuTranslations.PROJECTS,
          icon: PrimeIcons.BRIEFCASE,
          routerLink: 'projects'
        }
      ];
      this.activeItem = this.items[0];
    });
  }

}