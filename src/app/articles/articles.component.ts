import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/articles.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ADD_TO_LIST, DELETE_FROM_LIST, RESET } from '../store/reading-list.reducer';


interface AppState {
  readingList: any[];
}

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  providers : [
      ArticleService
   ]
})
export class ArticlesComponent implements OnInit {

    readingList: Observable<Array<any>>;

    articles: Article[];
    newArticle: Article;
    editArticle: Article;
    searchMode = false;
    searchResult: any[] = [];
    selectedArticle: Article;


  constructor(
    private articleService: ArticleService,
    private router: Router,
    private store: Store<AppState>
  ) {
      this.readingList = store.select('readingList');
  }

  addToList(article){
      this.store.dispatch({ type: ADD_TO_LIST, payload: article });
  }

  ngOnInit() {
    this.newArticle = Article.CreateDefault();
    this.editArticle = Article.CreateDefault();
    this.getArticles();

  }

  gotoDetail(article): void {
      this.router.navigate(['/articles', article._id]);
  }


  search(world) {
      if (world.length){
          this.searchMode = true;
          this.articles.map((item) => {if(item.title.includes(world) && (this.searchResult.includes(item)==false)){ return this.searchResult.push(item) }})
     } else {
         this.searchMode = false;
         this.searchResult = []
     }
  }


  getArticles(){
    this.articleService.getArticles()
    .subscribe(
        data => this.articles = data
    //   data => {
    //      this.articles = [];
        //  data.forEach(
        //    element => {
        //        console.log(element)
        //      var newArticle = new Article(element._id,
        //                         element.title,
        //                         element.subTitle,
        //                         element.body,
        //                         element.author,
        //                         element.links,
        //                         element.postDate,
        //                         element.editDate);
        //      this.articles.push(newArticle);
        //      console.log(this.articles)
         //
        //    })
    //   })
)}

  insertArticle() {
    this.articleService
    .insertNewArticle(this.newArticle)
    .subscribe(
      data => {
         this.newArticle._id = data.id;
         this.articles.push(this.newArticle);
         this.newArticle = Article.CreateDefault();
         console.log("Added article.");
      }
    )
  }

  // updateArticle(article:Article) {
  //     this.articleService
  //     .updateArticle(this.newArticle)
  //     .subscribe(
  //         data => {
  //            var index = this.articles.findIndex(item => item._id === this.editArticle._id);
  //             this.articles[index] = this.editArticle;
  //           //   this.editArticle = Article.CreateDefault();
  //             console.log(this.editArticle)
  //             console.log("Added article.");
  //   })
  // }

  deleteArticle(article:Article) {
      this.articleService.deleteArticle(article)
      .subscribe(
          data => {
              this.articles.splice(this.articles.indexOf(article), 1);
              console.log("Article deleted!");
      })
  }

  setEditArticle(article: Article){
      let date = new Date();
      this.editArticle = new Article(article._id, article.title, article.subTitle, article.body, article.author, article.links, article.postDate, date);
  }

}
