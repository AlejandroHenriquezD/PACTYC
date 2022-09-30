import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { AppuserService } from '../services/appuser.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  children: any = [];

  constructor(
    private appuserService: AppuserService,
    private router: Router
    ) {
      this.getAllAppUsers();
  }
  ngOnInit() { }
  

  getAllAppUsers(){
    this.appuserService.getUsers().subscribe((data) => {
      this.children = data;
    });
  }

  postAppUsers(){

  }

  deleteAppUsers(appuser, id){
    if (window.confirm('Are you sure')) {
      this.appuserService.deleteUser(appuser.id)
      .subscribe(() => {
          this.getAllAppUsers();
          console.log('User deleted!')
        }
      )
    }
  }
}
