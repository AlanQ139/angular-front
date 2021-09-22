import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';

/*Serviço */
@Injectable({
  providedIn: 'root',
})
/* HTTP injetado no construtor para ser usado no Metodo*/
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  /*Metodo recebendo atributo, o obj recebido do login e enviado ao BAckENd e passa para o mesmo*/
  /* Usa a chamada HTTP com retrono do Observable*/
  /*VAi no Server e faz a Autenticação */
  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      'http://localhost:8080/api/login',
      requestLogin
    );
  }
}
