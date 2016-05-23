import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'partials/app-sidebar.html'
})

export class AppSidebarComponent implements OnInit {
    ngOnInit() {
        console.log("Application Sidebar component initialized ...");
    }
}
