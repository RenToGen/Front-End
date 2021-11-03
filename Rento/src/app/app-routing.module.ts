import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},


  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'rodape', component: RodapeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'sobre', component: SobreComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
