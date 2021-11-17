import { environment } from './../../../environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../../service/produto.service';
import { Produto } from './../../model/Produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

 
produto: Produto = new Produto()
  idProduto: number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/home'])
    }

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)

  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }

  apagar(){
    this.produtoService.deleteProduto(this.idProduto).subscribe(()=>{
      alert('Produto apagado com sucesso!')
      this.router.navigate(['/admin'])
    })
  }
}