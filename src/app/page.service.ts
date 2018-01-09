import { Injectable } from '@angular/core';
import { HeaderComponent } from './dynamic-components/header/header.component';
import { MenuComponent } from './dynamic-components/menu/menu.component';
import { TextComponent } from './dynamic-components/text/text.component';
import { FooterComponent } from './dynamic-components/footer/footer.component';
import { DynamicComponent } from './dynamic/dynamic-component';

@Injectable()
export class PageService {

  public components: Array<any> = [
    HeaderComponent, 
    MenuComponent, 
    TextComponent, 
    FooterComponent];

  constructor() { }

}
