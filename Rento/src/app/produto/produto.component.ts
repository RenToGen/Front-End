import { HttpClient } from '@angular/common/http';
import { Produto } from './../model/Produto';
import { Usuario } from './../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { environment } from './../../environments/environment.prod';

// codethi
import { AuthService } from './../service/auth.service';
import { Categoria } from './../model/Categoria';
import { CategoriaService } from './../service/categoria.service';

// codethi

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

// codethi
produto: Produto = new Produto()
listaProduto: Produto[]

categoria: Categoria = new Categoria()
listaCategoria: Categoria[]
idCategoria: number

usuario: Usuario = new Usuario()
idUsuario = environment.id
// codethi

  constructor(
    
    // codethi
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private authService: AuthService,
    private route: ActivatedRoute,
    // codethi

    
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/home'])
   
  }

  // codethi
  this.getAllCategoria()
  this.getAllProduto()
}

getAllCategoria(){
  this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
    this.listaCategoria = resp
  })
}

findByIdCategoria(){
  this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) =>{
    this.categoria = resp
  })
}

getAllProduto(){
  this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
    this.listaProduto = resp
  })
  console.log(this.listaProduto)
}

findByIdUsuario(){
  this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
    this.usuario = resp
  })
}

publicar(){
  this.categoria.id = this.idCategoria
  this.produto.categoria = this.categoria


  this.usuario.id = this.idUsuario
  this.produto.usuario = this.usuario
  console.log(this.produto)

  this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
    this.produto = resp
    console.log(this.produto)
    this.getAllProduto()
    alert('Postagem atualizada com sucesso!')
    this.router.navigate(['/admin'])
  })

  // this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
  //   this.produto = resp
  //   alert('Serviço publicado com sucesso!')
  //   this.produto = new Produto()
  //   this.getAllProduto()
  // })
  // codethi



}
nossoLog(){
  console.log(this.listaProduto)
}
}
