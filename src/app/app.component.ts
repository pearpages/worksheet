import { Component } from '@angular/core';
import { DescriptionComponent } from './components/description/description.component';
import { SectionsComponent } from './components/sections/sections.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DescriptionComponent,SectionsComponent]
})
export class AppComponent {
  title = 'app works!';
}
