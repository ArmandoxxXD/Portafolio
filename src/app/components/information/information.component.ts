import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    PanelModule
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

}
