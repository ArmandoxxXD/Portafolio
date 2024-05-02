import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    PanelModule,
    SplitterModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
