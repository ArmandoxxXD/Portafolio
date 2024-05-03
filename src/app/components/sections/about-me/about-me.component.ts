import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    PanelModule,
    SplitterModule,
    CardModule,
    AccordionModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
