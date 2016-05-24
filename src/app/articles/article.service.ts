import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Article} from './article';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {
    private articlesUrl = 'app/articles'; // URL to web api

    constructor(private http: Http) {}

    getArticles(): Promise<Article[]> {
        return this.http.get(this.articlesUrl).toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
