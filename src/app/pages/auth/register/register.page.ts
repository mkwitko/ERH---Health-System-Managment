import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/classes/auth/user-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public parameters = {
    url: 'login',
    title: 'Cadastro'
  }

  constructor(
    public myClass: UserRegister
  )
  {
  }

  ngOnInit() {
  }
}
