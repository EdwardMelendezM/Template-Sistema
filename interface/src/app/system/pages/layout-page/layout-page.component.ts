import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  router = inject(Router)

  public sidebarItems = [
    { label:"Inicio", icon:'home', url:'dashboard' },
    { label:"Configuracion", icon:'label', url:'setting' },
    { label:"Search", icon:'search', url:'search' },
  ]

  onLogout(){
    this.removeTokenFromLocalStorage()
    this.router.navigate(['auth/login'])
  }

  private removeTokenFromLocalStorage(): void {
    localStorage.removeItem('token');
  }
}
