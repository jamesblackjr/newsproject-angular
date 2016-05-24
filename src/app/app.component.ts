import {Component, OnInit} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AppHeaderComponent} from './app-header.component';
import {AppSidebarComponent} from './app-sidebar.component';
import {AppContentComponent} from './app-content.component';
import {AppFooterComponent} from './app-footer.component';
import {ArticleListComponent} from './articles/article-list.component';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, AppHeaderComponent, AppSidebarComponent, AppContentComponent, AppFooterComponent],
  templateUrl: 'partials/app.html'
})

@Routes([
    {path: '/', component: ArticleListComponent},
    {path: '/news/articles', component: ArticleListComponent}
])

export class AppComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        this.router.navigate(['/news/articles']);

        console.log("Application component initialized ...");
    }
}
