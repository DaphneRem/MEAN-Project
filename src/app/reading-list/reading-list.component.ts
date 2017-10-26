import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ADD_TO_LIST, DELETE_FROM_LIST, RESET, LENGTH } from '../store/reading-list.reducer';

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

  constructor(private store: Store<AppState>) {
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

  findLength() {

  }

}
