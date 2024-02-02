import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Modal } from 'src/app/interfaces/modal';
import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { getDatabase, ref, onValue, push } from "firebase/database";
import { update, remove } from '@angular/fire/database';
import { AlertasComponent } from '../alertas/alertas.component';


@Component({
  selector: 'app-editar-ubicacion',
  templateUrl: './editar-ubicacion.component.html',
  styleUrls: ['./editar-ubicacion.component.css']
})
export class EditarUbicacionComponent implements OnInit, AfterViewInit {

  ubicacionForm!: FormGroup;
  editar = false;
  datos?: Ubicacion;

  constructor(
    public dialogRef: MatDialogRef<EditarUbicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Modal,
    public dialog: MatDialog,
  ) {
    this.editar = data.accion === 'Guardar';
  }

  ngOnInit(): void {
    this.ubicacionForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      lng: new FormControl('', Validators.required),
      ocupado: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+")]),
      capacidad: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+"), Validators.min(1)]),
      estado: new FormControl(''),
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.obtenerUbicacion();
    }, 0)
  }

  obtenerUbicacion() {
    const db = getDatabase();
    const starCountRef = ref(db, 'ubicacion/' + this.data.id);
    onValue(starCountRef, (snapshot) => {
      this.datos = snapshot.val();
      this.ubicacionForm.patchValue({
        title: this.datos?.title,
        description: this.datos?.description,
        lat: this.datos?.lat,
        lng: this.datos?.lng,
        capacidad: this.datos?.capacidad,
        estado: this.datos?.estado,
        ocupado: this.datos?.ocupado
      });
    });
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

  validation(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({ onlySelf: true });
      }
    });
  }

  guardar() {
    if (this.ubicacionForm.valid) {
      const form = this.ubicacionForm?.getRawValue();
      if (form.ocupado <= form.capacidad) {
        if (form.estado != 'Inactivo' && form.ocupado === form.capacidad) {
          form.estado = 'Ocupado';
        } else if (form.estado != 'Inactivo' && form.ocupado <= form.capacidad) {
          form.estado = 'Disponible';
        }
        const datosUbicacion = {
          title: form.title,
          description: form.description,
          lat: form.lat,
          lng: form.lng,
          capacidad: form.capacidad,
          estado: form.estado,
          ocupado: form.ocupado
        }
        if (this.editar) {
          update(ref(getDatabase(), 'ubicacion/' + this.data.id + '/'), datosUbicacion);
          this.cerrar();
          this.alertaDialog('Se realizaron los cambios exitosamente.', 'success');
        } else {
          push(ref(getDatabase(), 'ubicacion/'), datosUbicacion);
          this.cerrar();
          this.alertaDialog('Se agregó una nueva ubicación.', 'success');
        }
      } else {
        this.alertaDialog('La cantidad de ocupantes no puede superar la capacidad.', 'warning');
        form.ocupado.markAsTouched({ onlySelf: true });
        form.ocupado.markAsDirty({ onlySelf: true });

      }
    } else {
      this.validation(this.ubicacionForm);
      this.alertaDialog('Por favor, verifica que hayas llenado todos los campos.', 'info');
    }
  }

  eliminar(): void {
    remove(ref(getDatabase(), 'ubicacion/' + this.data.id));
    location.reload();
    this.cerrar();
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}
