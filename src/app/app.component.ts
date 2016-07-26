import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { SectionsComponent } from './components/sections/sections.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DescriptionComponent,SectionsComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {

}

