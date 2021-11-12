import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  logado(){
    let ok = false
  
    if(environment.token != ''){
      ok = true
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
}
