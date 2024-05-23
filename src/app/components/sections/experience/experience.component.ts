import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TimelineModule } from 'primeng/timeline';
import { TranlateModule } from '../../../module/tranlate/tranlate.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    PanelModule,
    TranlateModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    ImageModule,
    ChipModule,
    DividerModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  databases = [
    { icon: 'devicon-postgresql-plain', name: 'PostgreSQL' },
    { icon: 'devicon-mysql-plain', name: 'MySQL' },
    { icon: 'devicon-microsoftsqlserver-plain', name: 'SQLServer' },
    { icon: 'devicon-mongodb-plain', name: 'MongoDB' }
  ];

  constructor() {
  }
}
