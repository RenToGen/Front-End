import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin
  static usuarioLogin: any;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id

      console.log(environment.nome)
      alert('Usuario logado com sucesso!')

      this.router.navigate(['/home'])
    }, erro =>{
      if(erro.status == 401){
        alert('Usuario ou senha estão incorretos!')
      }
    })
  }

}
