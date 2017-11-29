import { Component, OnInit, Input } from '@angular/core';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ADD_TO_LIST, FIND} from '../store/reading-list.reducer';

interface AppState {
  readingList: any[];
}

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})



export class ThumbnailComponent implements OnInit {
    @Input() article: any;

    readingList: Observable<Array<any>>;


  constructor(
      private store: Store<AppState>
  ) {
      this.readingList = store.select('readingList');
  }

  ngOnInit() {
       console.log(this.readingList)
  }

  addToFavorites(article){
      this.store.dispatch({ type: ADD_TO_LIST, payload: article });
  }

  star(article) {
      this.store.dispatch({ type: FIND, payload: article });
  }

}
