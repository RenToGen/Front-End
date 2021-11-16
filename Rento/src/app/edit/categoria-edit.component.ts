import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  categoria: Categoria = new Categoria()

  idCategoria: number
  categoriaCategoria: string
  descricaoCategoria: string
  valorCategoria: number
  produtosCategoria: Array<any>

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/home'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }
  atualizar() {
    
    this.categoriaCategoria = this.categoria.categoria
    this.descricaoCategoria = this.categoria.descricao
    this.idCategoria = this.categoria.id
    this.valorCategoria = this.categoria.valor
    this.produtosCategoria = this.categoria.produto

    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert('Categoria atualizado com sucesso!')
      this.router.navigate(['/servicos'])

    })
    console.log(this.categoria)
  }

}
