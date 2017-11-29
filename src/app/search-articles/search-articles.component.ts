import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.css']
})
export class SearchArticlesComponent implements OnInit {
    @Input() articles : any;
    searchMode = false;
    searchResult: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  search(world) {
      if (world.length){
          this.searchMode = true;
          this.articles.map((item) => {if(item.title.toUpperCase().includes(world.toUpperCase()) && (this.searchResult.includes(item)==false)){ return this.searchResult.push(item) }})
     } else {
         this.searchMode = false;
         this.searchResult = []
     }
  }

}
