import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ResumoTextoModule } from './views/resumo-texto/resumo-texto.module';

/**Declarar o obj dos modulos */
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  /**m = Modulo then recebe modulo M e retorna uma restu .... module*/
  {path:'resumo-texto', 
  loadChildren: () =>
    import('./views/resumo-texto/resumo-texto.module').then(
      (m) => m.ResumoTextoModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
