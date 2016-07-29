import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'description',
  templateUrl: 'description.component.html',
  styleUrls: ['description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() account: any;

  constructor() {}

  ngOnInit() {
  }

}
