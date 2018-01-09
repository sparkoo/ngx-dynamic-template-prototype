import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../../dynamic/dynamic-component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit, DynamicComponent {

  constructor() { }

  ngOnInit() {
  }

  dynamicComponentName() { return 'Text'; }
}
