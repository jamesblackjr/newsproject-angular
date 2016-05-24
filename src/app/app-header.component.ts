import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'app-header',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'partials/app-header.html'
})

export class AppHeaderComponent implements OnInit {
    ngOnInit() {
        console.log("Application Header component initialized ...");
    }
}
