import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../../services/articles.service';
import { Article } from '../../model/article';
import { ADD_TO_LIST, DELETE_FROM_LIST, UPDATE_TO_LIST, RESET } from '../../store/reading-list.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  readingList: any[];
}

@Component({
  selector: 'edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers : [
      ArticleService
   ]
})
export class EditArticleComponent implements OnInit {
    @Input() editArticle: Article;
    @Input() articles: Article[];

    readingList: Observable<any>;


  constructor(
      private articleService: ArticleService,
      private store: Store<AppState>
) {
      this.readingList = store.select('readingList');
  }

  ngOnInit() {
  }

  updateArticle(article:Article) {
      this.articleService
      .updateArticle(article)
      .subscribe(
          data => {
             data = this.editArticle;
             if (this.articles) {
             let index = this.articles.findIndex(item => item._id === this.editArticle._id);
             this.articles[index] = this.editArticle;
            }
              console.log("Updated article.");
          }
      );
      this.store.dispatch({ type: UPDATE_TO_LIST, payload: article });
  }

}
