import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoComponent } from './produto/produto.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},


  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'rodape', component: RodapeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'cursos', component: CursosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
