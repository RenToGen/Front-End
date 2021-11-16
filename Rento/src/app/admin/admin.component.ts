import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  nome = ''
  foto = ''

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
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
  recebeDados(){
    this.nome = environment.nome
    this.foto = environment.foto
  }


}

