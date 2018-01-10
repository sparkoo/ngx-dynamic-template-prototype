import { Injectable } from '@angular/core';
import { HeaderComponent } from './dynamic-components/header/header.component';
import { MenuComponent } from './dynamic-components/menu/menu.component';
import { TextComponent } from './dynamic-components/text/text.component';
import { FooterComponent } from './dynamic-components/footer/footer.component';

@Injectable()
export class PageService {

  public components: Array<DynamicComponentType> = [
    HeaderComponent,
    MenuComponent,
    TextComponent,
    FooterComponent];

  constructor() { }

}

export interface DynamicComponentType {
  dynamicComponentName: string;
}
