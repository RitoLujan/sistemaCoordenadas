import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Modal } from 'src/app/interfaces/modal';
import { getDatabase } from "firebase/database";
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AlertasComponent } from '../alertas/alertas.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Modal,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required),
    })
  }

  cerrar(): void {
    this.dialogRef.close();
  }

  alertaDialog(msj: string, css: string) {
    this.dialog.open(AlertasComponent, {
      hasBackdrop: false,
      position: { bottom: '2%', left: '2%' },
      data: {
        titulo: msj,
        accion: css,
      },
    });
  }

  ingresar() {
    if (this.loginForm.valid) {
      const form = this.loginForm?.getRawValue();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, form.usuario, form.contrasena)
        .then((userCredential) => {
          const user = userCredential.user;
          return user.getIdToken();
        })
        .then((idToken) => {
          this.cerrar();
          localStorage.setItem('accessToken', idToken);
          this.router.navigate(['/administrador']);
        })
        .catch((error) => {
          this.alertaDialog('Ingresaste un correo o contraseña inválida.', 'warning')
        });
    }
  }

}
