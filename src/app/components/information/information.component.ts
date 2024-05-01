import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    PanelModule,
    ImageModule,
    ChipModule,
    CardModule,
    DividerModule,
    ButtonModule
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

  constructor(){

  }

}
