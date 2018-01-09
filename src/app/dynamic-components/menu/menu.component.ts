import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../../dynamic/dynamic-component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DynamicComponent {

  constructor() { }

  ngOnInit() {
  }

  dynamicComponentName() { return 'Menu'; }
}
