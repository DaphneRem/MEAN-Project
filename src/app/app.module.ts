
import { HttpClient, HttpClientModule } from "@angular/common/http";
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

import {TranslateModule, TranslateLoader,  MissingTranslationHandler } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MyMissingTranslationHandler } from './missingtemplate.component';


export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

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
    HttpClientModule,
    StoreModule.forRoot({ readingList: ReadingListReducer }),
    TranslateModule.forRoot({
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},

      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
