import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AdministradorComponent } from './components/administrador/administrador.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditarUbicacionComponent } from './modals/editar-ubicacion/editar-ubicacion.component';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './modals/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertasComponent } from './modals/alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    AdministradorComponent,
    EditarUbicacionComponent,
    LoginComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    NgIf,
    provideFirebaseApp(() => initializeApp({ "projectId": "mapa-web-ae5a3", "appId": "1:915705745062:web:2708364d094cf2a29f6e67", "databaseURL": "https://mapa-web-ae5a3-default-rtdb.firebaseio.com", "storageBucket": "mapa-web-ae5a3.appspot.com", "apiKey": "AIzaSyDkNn-u8-6xNMAd4LVNKJYSys2h79jCNx4", "authDomain": "mapa-web-ae5a3.firebaseapp.com", "messagingSenderId": "915705745062" })),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
