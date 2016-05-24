import {Injectable} from '@angular/core';
import {ARTICLES} from './mock-articles';

@Injectable()
export class ArticleService {
    get() {
        return Promise.resolve(ARTICLES);
    }
}
