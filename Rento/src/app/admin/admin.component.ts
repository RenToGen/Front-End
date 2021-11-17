import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]
  produtoService: ProdutoService
  usuario: Usuario = new Usuario()
  idUsuario = environment.id
  nome = ''
  foto = ''
  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number
  categoriaCategoria: string
  descricaoCategoria: string
  valorCategoria: number
  produtosCategoria: Array<any>

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private http: HttpClient
    
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllCategorias()
    this.getAllProduto()


  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
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
  
  cadastrar(){
    
    this.categoriaCategoria = this.categoria.categoria
    this.descricaoCategoria = this.categoria.descricao    
    this.valorCategoria = this.categoria.valor
    this.produtosCategoria = this.categoria.produto

    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert('Categoria atualizado com sucesso!')
      this.router.navigate(['/servicos'])

    })
    console.log(this.categoria)
  }
  atualizar() {
    
    this.categoriaCategoria = this.categoria.categoria
    this.descricaoCategoria = this.categoria.descricao
    this.idCategoria = this.categoria.id
    this.valorCategoria = this.categoria.valor
    this.produtosCategoria = this.categoria.produto

    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert('Categoria incluída com sucesso!')

    })
    console.log(this.categoria)
  }
  
  publicar(){
  this.categoria.id = this.idCategoria
  this.produto.categoria = this.categoria

  this.usuario.id = this.idUsuario
  this.produto.usuario = this.usuario

  this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
    this.produto = resp
    alert('Serviço publicado com sucesso!')
    this.produto = new Produto()
    this.produtoService.getAllProduto()
  })  

}
getAllProduto(){
  this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
    this.listaProduto = resp
  })
  console.log(this.listaProduto)
}
}
