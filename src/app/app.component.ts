import {Component, OnInit} from '@angular/core';
import {AppHeaderComponent} from './app-header.component';
import {AppSidebarComponent} from './app-sidebar.component';
import {AppContentComponent} from './app-content.component';
import {AppFooterComponent} from './app-footer.component';

@Component({
  selector: 'app',
  directives: [AppHeaderComponent, AppSidebarComponent, AppContentComponent, AppFooterComponent],
  templateUrl: 'partials/app.html'
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
