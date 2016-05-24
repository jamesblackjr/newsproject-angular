import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ArticleListComponent} from './articles/article-list.component';

@Component({
  selector: 'app-content',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'partials/app-content.html'
})

export class AppContentComponent implements OnInit {
    ngOnInit() {
        console.log("Application Content component initialized ...");
    }
}
