import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from './../model/Categoria';
import { environment } from './../../environments/environment.prod';
import { CategoriaService } from './../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})  

export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
    
  ) { }

  ngOnInit() {
    // retirar apos testes
    environment.token = "Basic Z3VzdGF2b0B0ZXN0ZS5jb206MTIzNDU2Nzg5"
    // retirar apos testes
    window.scroll(0,0)
    if(environment.token == ''){
    this.router.navigate(['/home'])
  }

  this.findAllCategorias()
}

 findAllCategorias(){
       this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
         this.listaCategoria = resp
       })
     }

  cadastrar(){
     this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
       this.categoria = resp
       alert('Tema cadastrado com sucesso!')
       this.findAllCategorias()
       this.categoria = new Categoria()
     })
  }

}