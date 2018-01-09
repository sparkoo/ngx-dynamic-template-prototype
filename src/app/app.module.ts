import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './dynamic/header/header.component';
import { MenuComponent } from './dynamic/menu/menu.component';
import { TextComponent } from './dynamic/text/text.component';
import { FooterComponent } from './dynamic/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    HeaderComponent,
    MenuComponent,
    TextComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
