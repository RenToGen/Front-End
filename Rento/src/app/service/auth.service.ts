import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://rentogen.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://rentogen.herokuapp.com/usuarios/cadastrar', usuario)
  }
  logado(){
    let ok = false
  
    if(environment.token != ''){
      ok = true
    } 
    return ok
  }

  deslogado(){
    let ok = false
  
    if(environment.token == ''){
      ok = true
    } 
    return ok
  }

  adm(){
    let ok = false
  
    if(environment.tipoCadastro == '2'){
      ok = true
    } 
    return ok
  }
  cliente(){
    let ok = false
  
    if(environment.tipoCadastro == '1'){
      ok = true
    } 
    return ok
  }

  prestador(){
    let ok = false
  
    if(environment.tipoCadastro == '3'){
      ok = true
    } 
    return ok
  }
  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://rentogen.herokuapp.com/usuarios/${id}`)
  }
}
