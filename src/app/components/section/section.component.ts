import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Routes } from '../../models/routes';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SectionsComponent } from '../sections/sections.component';

@Component({
  moduleId: module.id,
  selector: 'section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css'],
  directives: [SectionsComponent,ROUTER_DIRECTIVES]
})
export class SectionComponent implements OnInit {

  ngOnInit() {}

  constructor(private route: ActivatedRoute) {}

  getType(): string {
    return this.route.snapshot.params['type'];
  }

  getSection():string  {
    return this.route.snapshot.params['section'];
  }

  getTitle() {
    let section: string = this.getSection();
    if(section) {
      return Routes.getRoutes().filter((r) => r.type === this.getType()).find((r) => r.url === section).name;
    } else {
      return this.getType().toUpperCase();
    }
    
  }

}
