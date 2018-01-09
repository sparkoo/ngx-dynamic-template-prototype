import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../../dynamic/dynamic-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DynamicComponent {

  constructor() { }

  ngOnInit() {
  }

  dynamicComponentName() { return 'Header'; }
}
