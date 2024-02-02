import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  
  { path: '', component: ClientesComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
