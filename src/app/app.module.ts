import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

import { ReadingListReducer } from './store/reading-list.reducer';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadingListComponent,
    ArticlesComponent,
    ArticleComponent,
    EditArticleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ readingList: ReadingListReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
