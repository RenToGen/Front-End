import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProduto(): Observable<Produto[]> {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return this.http.get<Produto[]>('https://rentogen.herokuapp.com/produto', this.token)
  }

  getByIdProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`https://rentogen.herokuapp.com/produto/${id}`, this.token)
  }

  postProduto(produto: Produto): Observable<Produto> {  this.token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
    return this.http.post<Produto>('https://rentogen.herokuapp.com/produto', produto, this.token)
  }
  putProduto(produto: Produto): Observable<Produto> {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return this.http.put<Produto>('https://rentogen.herokuapp.com/produto', produto, this.token)
  }

  deleteProduto(id: number) {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return this.http.delete(`https://rentogen.herokuapp.com/produto/${id}`, this.token)
  }
}
