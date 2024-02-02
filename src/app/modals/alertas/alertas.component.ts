import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Modal } from 'src/app/interfaces/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit{
  warning = false;
  info = false;
  success = false;

  constructor(
    public dialogRef: MatDialogRef<AlertasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Modal
  ) {
    this.warning = data.accion === 'warning';
    this.info = data.accion === 'info';
    this.success = data.accion === 'success';
 }

 ngOnInit() {
  setTimeout(() => {
    this.dialogRef.close();
  }, 5000);
}

}
