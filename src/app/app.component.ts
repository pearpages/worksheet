import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { SectionsComponent } from './components/sections/sections.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Worksheet } from './models/Worksheet';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DescriptionComponent,SectionsComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {

  worksheet: Worksheet;

  constructor () {
    this.worksheet = new Worksheet('BIF','Nice Bank','12335',new Date(),true,'Marsh','3455');
  }
}

