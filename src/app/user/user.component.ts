import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { User } from '../model/user';
import { UserService } from '../services/users.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [
      UserService
  ]
})
export class UserComponent implements OnInit {
    user: User;

  constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {

      console.log(this.location)
      this.route.paramMap
        .switchMap((params: ParamMap) => this.userService.getUser(params.get('_id')))
        .subscribe(user => this.user = user);

      console.log(this.user)
  }

}
