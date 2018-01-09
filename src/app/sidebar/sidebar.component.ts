import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { DynamicComponent } from '../dynamic/dynamic-component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  components: Array<any> = this.pageService.components;

  constructor(private pageService: PageService) { }

  ngOnInit() {
  }

}
