import { AdminCompany } from './../../../../../classes/admin/admin-company/admin-company';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-company-register',
  templateUrl: './admin-company-register.page.html',
  styleUrls: ['./admin-company-register.page.scss'],
})
export class AdminCompanyRegisterPage{

  constructor(
    public myClass: AdminCompany
  ){}

}
