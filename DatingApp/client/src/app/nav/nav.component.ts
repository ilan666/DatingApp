import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from '../Models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  // loggedIn: boolean = false;
  currentUser$: Observable<User | null>;
  constructor(private accountService: AccountService) {
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {}

  logout(){
    this.accountService.logout();
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response); // Error?
      },
      error: (error) => {
        console.log('Failed to login');
      },
      complete: () => {}
    });
  }
}
