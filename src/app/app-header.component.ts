import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'partials/app-header.html'
})

export class AppHeaderComponent implements OnInit {
    ngOnInit() {
        console.log("Application Header component initialized ...");
    }
}
