import {Component, OnInit} from '@angular/core';
import {Article} from './article';
import {ArticleService} from './article.service';
import {ArticleItemComponent} from './article-item.component';

@Component({
    selector: 'article-list',
    directives: [ArticleItemComponent],
    providers: [ArticleService],
    templateUrl: 'partials/articles/article-list.html'
})

export class ArticleListComponent implements OnInit {
    articles: Article[];

    constructor(private articleService: ArticleService) {}

    getArticles() {
        this.articleService.getArticles().then(articles => {
            this.articles = articles;
        });
    }

    ngOnInit() {
        this.getArticles();
    }
}
