import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './dynamic-components/footer/footer.component';
import { HeaderComponent } from './dynamic-components/header/header.component';
import { MenuComponent } from './dynamic-components/menu/menu.component';
import { TextComponent } from './dynamic-components/text/text.component';
import { DynamicHolderComponent } from './dynamic/dynamic-holder/dynamic-holder.component';
import { PageService } from './page.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SidebarComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TextComponent,
    DynamicHolderComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HeaderComponent,
    MenuComponent,
    TextComponent,
    FooterComponent
  ],
  providers: [PageService]
})
export class AppModule { }
