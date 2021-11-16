import { environment } from './../../../environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from './../../service/categoria.service';
import { Categoria } from './../../model/Categoria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/home'])
    }

    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)

  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  apagar(){
    this.idCategoria = this.categoria.id

    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(()=>{
      alert('Categoria apagado com sucesso!')
      this.router.navigate(['/servicos'])
    })
  }

}

