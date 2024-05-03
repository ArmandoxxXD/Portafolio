import { Component, Inject, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { InformationComponent } from '../information/information.component';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ScrollTopModule } from 'primeng/scrolltop';

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
    ScrollTopModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
configDialogVisible: boolean = false;
position: string = '';
darkModeEnabled!:Boolean;
englishLanguageEnabled!:Boolean;
    
constructor(@Inject(DOCUMENT) private document: Document){
 const localStorage = document.defaultView?.localStorage;
 if (localStorage) {
  let theme = localStorage.getItem('theme');
    if (theme === 'dark') {	
      this.loadDarkTheme();
    } else {
      this.loadLightTheme();
    }
  }
}

ngOnInit() {
}

showConfigDialog() {
  this.position = 'top';
  this.configDialogVisible = true;
}

toggleNotifications(): void {
  this.darkModeEnabled = !this.darkModeEnabled;
  if (this.darkModeEnabled) {
    this.loadDarkTheme();
  } else {
    this.loadLightTheme();
  }
}

loadLightTheme() {
 const theme = 'light';
 localStorage.setItem("theme",theme);
 let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
 themeLink.href = 'aura-'+ theme+ '-blue.css';
}

loadDarkTheme() {
 const theme = 'dark';
 localStorage.setItem("theme",theme);
 let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
 themeLink.href = 'aura-'+ theme+ '-blue.css';
}

toggleTwoAuthFactor(): void {
  this.englishLanguageEnabled = !this.englishLanguageEnabled;
}

}
