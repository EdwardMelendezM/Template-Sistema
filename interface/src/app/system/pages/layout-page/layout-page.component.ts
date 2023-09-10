import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  constructor(
    private router: Router
  ){}

  public sidebarItems = [
    { label:"Inicio", icon:'home', url:'dashboard' },
    { label:"Configuracion", icon:'label', url:'setting' },
    { label:"Search", icon:'search', url:'search' },
  ]

  onLogout(){
    this.router.navigate(['auth/login'])
  }
}
