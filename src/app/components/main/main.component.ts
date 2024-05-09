import { Component, Inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { InformationComponent } from '../information/information.component';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MenuComponent,
    InformationComponent,
    RouterOutlet,
    ButtonModule,
    DialogModule,
    CommonModule,
    ScrollTopModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  configDialogVisible: boolean = false;
  position: string = '';
  darkModeEnabled: boolean = false;
  englishLanguageEnabled: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'es']);
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.darkModeEnabled = theme === 'dark';
        const themeLink = this.document.getElementById(
          'app-theme'
        ) as HTMLLinkElement;
        themeLink.href = 'aura-' + theme + '-blue.css';
      }

      const lang = localStorage.getItem('lang');
      if (lang) {
        this.englishLanguageEnabled = lang === 'en';
        this.translate.use(lang);
      } else {
        const browserLang = this.translate.getBrowserLang();
        const langToUse = /(en|es)/.test(browserLang!) ? browserLang : 'en';
        this.translate.use(langToUse!);
      }
    }
  }

  showConfigDialog(): void {
    this.position = 'top';
    this.configDialogVisible = true;
  }

  toggleThemes(): void {
    this.darkModeEnabled = !this.darkModeEnabled;
    if (this.darkModeEnabled) {
      this.loadDarkTheme();
    } else {
      this.loadLightTheme();
    }
  }

  loadLightTheme(): void {
    const theme = 'light';
    localStorage.setItem('theme', theme);
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    themeLink.href = 'aura-' + theme + '-blue.css';
  }

  loadDarkTheme(): void {
    const theme = 'dark';
    localStorage.setItem('theme', theme);
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    themeLink.href = 'aura-' + theme + '-blue.css';
  }

  toggleLanguages(): void {
    this.englishLanguageEnabled = !this.englishLanguageEnabled;
    if (this.englishLanguageEnabled) {
      this.loadLanguageEn();
    } else {
      this.loadLanguageEs();
    }
  }

  loadLanguageEn(): void {
    const lang = 'en';
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  loadLanguageEs(): void {
    const lang = 'es';
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
