import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ADD_TO_LIST, DELETE_FROM_LIST, RESET, LENGTH } from '../store/reading-list.reducer';
import {TranslateService} from '@ngx-translate/core';

interface AppState {
  readingList: any[];
}

@Component({
  selector: 'reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})

export class ReadingListComponent implements OnInit {

    readingList: Observable<any>;
    @Input() showReadingList: boolean;

  constructor(
      private store: Store<AppState>,
      private translate: TranslateService
  ) {
      this.readingList = store.select('readingList');
  }

  ngOnInit() {
  }

  removeArticle(article){
      this.store.dispatch({
          type: DELETE_FROM_LIST,
          payload: article
      });
}

  reset(){
      this.store.dispatch({ type: RESET });
  }

  changeLanguage(lang){
        this.translate.use(lang); // fonction pour changer de langue
    }

}
