import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './dynamic-components/footer/footer.component';
import { HeaderComponent } from './dynamic-components/header/header.component';
import { MenuComponent } from './dynamic-components/menu/menu.component';
import { TextComponent } from './dynamic-components/text/text.component';
import { NgxDynamicTemplateModule } from 'ngx-dynamic-template';
import { DynamicHolderComponent } from './dynamic/dynamic-holder/dynamic-holder.component';

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
    NgxDynamicTemplateModule.forRoot()
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HeaderComponent,
    MenuComponent,
    TextComponent,
    FooterComponent
  ]
})
export class AppModule {}
