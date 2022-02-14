import { AdminUserClass } from './../../../../classes/admin/admin-user/admin-user-class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-home',
  templateUrl: './admin-user-home.page.html',
  styleUrls: ['./admin-user-home.page.scss'],
})
export class AdminUserHomePage implements OnInit {

  constructor(
    public myClass: AdminUserClass,
  ){}

  ngOnInit() {
    this.myClass.getAll(this.myClass.collection, true);
  }

}
