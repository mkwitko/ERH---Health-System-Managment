import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackInfoService {

  public roleOptions = [
    {
      name: 'Paciente',
      value: 'user'
    },
    {
      name: 'Funcionário',
      value: 'funcionario'
    },
    {
      name: 'Administrador',
      value: 'admin'
    }
  ]

  public showUserRoles = [];

  constructor() { }
}
