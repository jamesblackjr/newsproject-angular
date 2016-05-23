import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './app/app-content.html'
})

export class AppContentComponent implements OnInit {
    ngOnInit() {
        console.log("Application Content component initialized ...");
    }
}
