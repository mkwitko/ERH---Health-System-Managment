import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./pages/adminMenu/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./pages/adminMenu/relatorios/relatorios.module').then( m => m.RelatoriosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/adminMenu/usuarios/usuarios.module').then( m => m.UsuariosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./pages/adminMenu/funcionarios/funcionarios.module').then( m => m.FuncionariosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'clinica',
    loadChildren: () => import('./pages/adminMenu/clinica/clinica.module').then( m => m.ClinicaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./pages/adminMenu/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/adminMenu/pacientes/pacientes.module').then( m => m.PacientesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'essencial-info',
    loadChildren: () => import('./pages/adminConfig/essencialInfo/essencial-info/essencial-info.module').then( m => m.EssencialInfoPageModule)
  },  {
    path: 'essencial-info-home',
    loadChildren: () => import('./pages/adminConfig/essencialInfo/essencialInfo-Home/essencial-info-home/essencial-info-home.module').then( m => m.EssencialInfoHomePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
