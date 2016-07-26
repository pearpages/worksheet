import { Component, OnInit } from '@angular/core';
import { Routes } from '../../models/routes';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sections',
  templateUrl: 'sections.component.html',
  styleUrls: ['sections.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SectionsComponent implements OnInit {

  @Input() type: string;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {}

  getLinks() {
    return Routes.getRoutes().filter((r) => r.type === this.type);
  }

}
