import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  providers : [ UserService ]
})
export class UsersComponent implements OnInit {

    users: User[];
    newUser: User;
    searchCriteria: string;


  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.newUser = User.CreateDefault();
    this.searchCriteria = '';
    this.getUsers();

  }

  getUsers(){
    this.userService.getUsers(this.searchCriteria)
    .subscribe(
      data => {
         this.users = [];
         data.forEach(
           element => {
             var newUser = new User(element._id,
                                element.name,
                                element.age,
                                element.location,
                                element.blog);
             this.users.push(newUser);
           })
      })
  }

  insertUser() {
    this.userService
    .insertNewUser(this.newUser)
    .subscribe(
      data => {
         this.newUser._id = data.id;
         this.users.push(this.newUser);
         this.newUser = User.CreateDefault();

         console.log("Added user.");
      }
    )
  }
}
