import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'categorias/:_id/empresas', component: EmpresasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'categorias/:idCategoria/empresas/:_id/productos', component: ProductosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
