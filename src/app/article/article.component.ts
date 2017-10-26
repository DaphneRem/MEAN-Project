import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Article } from '../model/article';
import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers : [
      ArticleService
  ]
})
export class ArticleComponent implements OnInit {
    article: Article;

  constructor(
      private articleService: ArticleService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.articleService.getArticle(params.get('_id')))
        .subscribe(article => this.article = article);
  }

}
