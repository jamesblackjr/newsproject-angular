import {Component, OnInit} from '@angular/core';
import {Article} from './article';
import {ArticleService} from './article.service';
import {ArticleItemComponent} from './article-item.component';

@Component({
    selector: 'article-list',
    directives: [ArticleItemComponent],
    providers: [ArticleService],
    templateUrl: 'partials/article-list.html'
})

export class ArticleListComponent implements OnInit {
    articles: Article[];

    constructor(private articleService: ArticleService) {}

    getArticles() {
        this.articleService.get().then(articles => {
            this.articles = articles;
        });
    }

    ngOnInit() {
        this.getArticles();
    }
}
