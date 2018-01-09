import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../dynamic-components/header/header.component';
import { MenuComponent } from '../../dynamic-components/menu/menu.component';
import { TextComponent } from '../../dynamic-components/text/text.component';
import { FooterComponent } from '../../dynamic-components/footer/footer.component';
import { timeout } from 'q';

@Component({
  selector: 'app-dynamic-holder',
  templateUrl: './dynamic-holder.component.html',
  styleUrls: ['./dynamic-holder.component.scss']
})
export class DynamicHolderComponent implements OnInit {

  components = [
    HeaderComponent,
    MenuComponent,
    TextComponent,
    FooterComponent
  ];

  constructor() { }

  ngOnInit() {
  }

}
