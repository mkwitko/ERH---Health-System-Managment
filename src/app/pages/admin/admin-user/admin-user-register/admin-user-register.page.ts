import { AdminCompany } from './../../../../classes/admin/admin-company/admin-company';
import { AdminUserClass } from './../../../../classes/admin/admin-user/admin-user-class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-register',
  templateUrl: './admin-user-register.page.html',
  styleUrls: ['./admin-user-register.page.scss'],
})
export class AdminUserRegisterPage implements OnInit {

  constructor(
    public myClass: AdminUserClass,
    private companyClass: AdminCompany
  ) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public mySelects = [
    'company'
  ];

  ngOnInit() {
    this.myClass.getAll(this.companyClass.collection, false, true, this.mySelects);
  }

}
