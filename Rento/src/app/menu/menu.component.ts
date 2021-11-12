import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  nome = ''
  foto = ''

  constructor(    
    
    private router: Router,
    private auth: AuthService


    ) { }

  ngOnInit(){
  }

  logado(){
    let ok = false
  
    if(environment.token != ''){
      ok = true
      this.recebeDados()
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

  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0

  }
  recebeDados(){
    this.nome = environment.nome
    this.foto = environment.foto
  }

}


