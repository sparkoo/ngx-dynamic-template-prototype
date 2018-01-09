import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { DynamicComponent } from '../dynamic/dynamic-component';
import { HeaderComponent } from '../dynamic-components/header/header.component';
import { TextComponent } from '../dynamic-components/text/text.component';
import { MenuComponent } from '../dynamic-components/menu/menu.component';
import { FooterComponent } from '../dynamic-components/footer/footer.component';
import { DragulaService } from 'ng2-dragula/components/dragula.provider';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  components: Array<any> = this.pageService.components;

  constructor(private pageService: PageService,
    private dragulaService: DragulaService) { 
      this.dragulaService.setOptions('bag-one', {
        removeOnSpill: true,
      });
    }

  ngOnInit() {
  }

  addHeaderComponent() {
    this.pageService.components.push(HeaderComponent);
  }

  addTextComponent() {
    this.pageService.components.push(TextComponent);
  }
  addMenuComponent() {
    this.pageService.components.push(MenuComponent);
  }
  addFooterComponent() {
    this.pageService.components.push(FooterComponent);
  }
}
