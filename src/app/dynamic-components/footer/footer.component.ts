import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../../dynamic/dynamic-component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, DynamicComponent {

  constructor() { }

  ngOnInit() {
  }

  dynamicComponentName() { return 'Footer'; }
}