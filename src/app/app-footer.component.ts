import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'partials/app-footer.html'
})

export class AppFooterComponent implements OnInit {
    ngOnInit() {
        console.log("Application Footer component initialized ...");
    }
}
