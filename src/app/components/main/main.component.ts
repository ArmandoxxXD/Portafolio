import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { InformationComponent } from '../information/information.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MenuComponent,
    InformationComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

    
    ngOnInit() {

}

}
