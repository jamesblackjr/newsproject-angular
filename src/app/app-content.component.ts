import {Component, OnInit} from '@angular/core';
import {ArticleListComponent} from './article-list.component';

@Component({
  selector: 'app-content',
  directives: [ArticleListComponent],
  templateUrl: 'partials/app-content.html'
})

export class AppContentComponent implements OnInit {
    ngOnInit() {
        console.log("Application Content component initialized ...");
    }
}
