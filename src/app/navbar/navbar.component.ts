import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
      private translate: TranslateService
  ) { }

  width:number;
  showReadingList: boolean = false;

  ngOnInit() {
      this.width = window.innerWidth;
  }

  changeLanguage(lang){
    this.translate.use(lang); // fonction pour changer de langue
  }

  onResize(event) {
      // console.log(this.width);
      return this.width = event.target.innerWidth;
  }

  showList() {
     return this.showReadingList = !this.showReadingList;
  }

}
