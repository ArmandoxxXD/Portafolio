import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TimelineModule } from 'primeng/timeline';
import { TranlateModule } from '../../../module/tranlate/tranlate.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    PanelModule,
    TranlateModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    ImageModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  events: EventItem[];

  constructor() {
      this.events = [
          { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
          { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
          { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' }
      ];
  }
}
