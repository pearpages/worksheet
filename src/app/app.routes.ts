import { provideRouter, RouterConfig } from '@angular/router';
import { SectionComponent } from './components/section/section.component';
import { Routes } from './models/routes';

const routes: RouterConfig = [
    {path: ':type/:section', component: SectionComponent },
    {path: ':type', component: SectionComponent},
  ];

export const appRouterProviders = [
  provideRouter(routes)
];
