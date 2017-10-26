import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Article } from '../model/article';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleService {

    constructor(private http: Http) {}

    getArticles() : Observable<Article[]> {
            return this.http.get("http://localhost:3000/getArticles")
            .map((res:any) => {
                return res.json() as Article[];
            })
            .catch((error:any) => {
                return Observable.throw(error.json ? error.json().error : error || 'Server error')
            });
    }

    getArticle(id: string): Observable<Article> {
      return this.getArticles()
        .map(articles => articles.find(article => article._id === id));
    }

    insertNewArticle(article:Article): Observable<any>{
        return this.http.post("http://localhost:3000/addArticle", article)
            .map((res:any) => {
                return res.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json ? error.json().error : error || 'Server error')
            });
    }

    updateArticle(article:Article): Observable<any>{
        return this.http.post("http://localhost:3000/updateArticle", article)
            .map((res:any) => {
                return res.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json ? error.json().error : error || 'Server error')
            });
    }

    deleteArticle(article:Article): Observable<any>{
        return this.http.post("http://localhost:3000/deleteArticle", { id: article._id })
        .map((res:any) => {
            return res.json();
        })
        .catch((error:any) => {
            return Observable.throw(error.json ? error.json().error : error || 'Server error')
        });
    }


}
