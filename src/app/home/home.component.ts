import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/articles.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [
      ArticleService
   ]
})
export class HomeComponent implements OnInit {

    articles: Article[];
    lastArticles: Article[] = [];


  constructor(
      private articleService: ArticleService,
      private translate: TranslateService,
      private router: Router,
  ) { }

  ngOnInit() {
      this.getArticles();
  }

  getArticles(){
    this.articleService.getArticles()
    .subscribe(
        (data) => {
             this.articles = data;
             data.forEach((item) => {
                 if (data.indexOf(item) > (data.length - 4)) {
                     return this.lastArticles.push(item)
                 }
             }
        )}
  )}



}
