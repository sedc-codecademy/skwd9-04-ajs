import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  constructor(private _userService: UserService) { }

  users: Array<User> = []

  ngOnInit(): void {
      console.log("ng on init triggered!")
      this.getUsers();
  }

  getUsers() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(res => {
    //     res.forEach(user => {
    //       this.users.push(new User(user.name, user.email, user.website))
    //     })
    //   })

    this._userService.getUsers().subscribe({
      next: response => {
        response.forEach(user => {
          this.users.push(new User(user.name, user.email, user.website))
        })
      },
      error: err => console.warn(err.message),
      complete: () => {
        console.log("done")
      }
    })
  }

}
