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
    if(environment.token == ''){
      this.router.navigate(['/logar'])
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