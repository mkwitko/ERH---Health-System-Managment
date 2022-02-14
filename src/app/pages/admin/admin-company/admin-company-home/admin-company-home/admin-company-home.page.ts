import { Component, OnInit } from '@angular/core';
import { AdminCompany } from './../../../../../classes/admin/admin-company/admin-company';

@Component({
  selector: 'app-admin-company-home',
  templateUrl: './admin-company-home.page.html',
  styleUrls: ['./admin-company-home.page.scss'],
})
export class AdminCompanyHomePage implements OnInit {

  public data;

  constructor(
    public myClass: AdminCompany,
  ){}

  ngOnInit() {
    this.myClass.getAll();
  }

}
