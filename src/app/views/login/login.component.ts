import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from '../../resources/models/RequestLogin';
import { AlertService } from '../../resources/services/alert.service';
import { LoginService } from '../../resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /*Variavel pulica */
  public requestLogin: RequestLogin;

  /*Injeção dos services para serem chamados no metodo */
  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) {}

  /*Primeiro metodo quando gera o componete quando chamado o constructor*/
  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  /*MEtodo publico do botão de Login */
  /*Troca de rota ao logar */
  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.router.navigate(['dashboard']);
        //this.alertService.info("Func ainda n implemntada")
      },
      (httpError) => {
        this.alertService.error(httpError.error.message);
      }
    );
  }
}
