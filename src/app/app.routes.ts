import { provideRouter, RouterConfig } from '@angular/router';
import { SectionComponent } from './components/section/section.component';
import { Routes } from './models/routes';
import { ShowroomComponent } from './showroom/showroom.component';

const routes: RouterConfig = [
    {path: 'wkt/:type/:section', component: SectionComponent },
    {path: 'wkt/:type', component: SectionComponent},
    {path: ':showroom', component: ShowroomComponent }
  ];

export const appRouterProviders = [
  provideRouter(routes)
];
