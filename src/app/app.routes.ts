import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutMeComponent } from './components/sections/about-me/about-me.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';

export const routes: Routes = [
    {path: '', component:MainComponent, children:[
        {path: 'about-me', component:AboutMeComponent},
        {path: 'experience', component:ExperienceComponent},
        {path: 'projects', component:ProjectsComponent},
        {path: 'contact', component:ContactComponent},
        { path: '', redirectTo: 'about-me', pathMatch: 'full' }
    ]},
    {path: '**', redirectTo:''}
];
