import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TranlateModule } from '../../module/tranlate/tranlate.module';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    PanelModule,
    ImageModule,
    ChipModule,
    CardModule,
    DividerModule,
    ButtonModule,
    TranlateModule
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

  constructor(){

  }

  descargarCV() {
    const fileName = 'Currículum Vitae.pdf';
    const filePath = `/assets/docs/${fileName}`;
    
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
