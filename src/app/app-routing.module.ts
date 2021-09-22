import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { LoginComponent } from './views/login/login.component';
import { ResumoTextoModule } from './views/resumo-texto/resumo-texto.module';

/**Declarar o obj dos modulos */
const routes: Routes = [
  { path: '', component: LoginComponent },//rota raiz sem guard rote onde todos tem acesso

  {
    path: 'dashboard',//só acessar se estiver logado, autorizado o mesmo nos outros
    //chama passa aray e diz qual guarda do componets
    canActivate: [AuthGuardService],//com isso configura a guarde rota
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  //redirecionamento caso n ache uma rota
  {path:'**', redirectTo: ''},

  /**m = Modulo then recebe modulo M e retorna uma restu .... module*/
  {path:'resumo-texto', 
  loadChildren: () =>
    import('./views/resumo-texto/resumo-texto.module').then(
      (m) => m.ResumoTextoModule
    ),
  }
];

//comentar o useHash ou setar dalse para usar diretamente pela url sem logar
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
