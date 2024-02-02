import { Component, OnInit } from '@angular/core';
import { Map, icon, marker, tileLayer } from 'leaflet';
import { Database } from '@angular/fire/database';
import { getDatabase, ref, onValue } from "firebase/database";
import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { MatDialog } from '@angular/material/dialog';
import { EditarUbicacionComponent } from 'src/app/modals/editar-ubicacion/editar-ubicacion.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  title = 'map_prueba';
  locations!: Ubicacion[];
  accessToken: string | null = null;

  constructor(
    private db: Database,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.accessToken = localStorage.getItem('accessToken');
    console.log(this.accessToken);
    this.tokenAuth();
    setTimeout(() => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/']);
    }, 86400000);
  }

  editarUbicacion(id: string) {
    this.dialog.open(EditarUbicacionComponent, {
      data: {
        titulo: 'Actualizar ubicación',
        accion: 'Guardar',
        id: id
      },
    });
  }

  agregarUbicacion() {
    this.dialog.open(EditarUbicacionComponent, {
      data: {
        titulo: 'Agregar ubicación',
        accion: 'Agregar',
      },
    });
  }

  cerrar() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/']);
  }

  tokenAuth() {
    if (this.accessToken === null) {
      this.router.navigate(['/']);
    } else {
      setTimeout(() => {
        this.obtenerUbicaciones();
      }, 0)
    }
  }

  obtenerUbicaciones() {
    const map = new Map('map').setView([24.0259, -104.6652], 12);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const db = getDatabase();
    const starCountRef = ref(db, '/ubicacion/');
    onValue(starCountRef, (snapshot) => {
      this.locations = snapshot.val();
      snapshot.forEach(location => {
        const id = location.key;
        const data = location.exportVal();
        const color = data.estado === 'Ocupado' ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png' : data.estado === 'Inactivo' ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png' : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png';
        const customMarker = marker([data.lat, data.lng], {
          icon: icon({
            iconUrl: color,
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
        })
        customMarker.on('click', () => this.editarUbicacion(id));
        customMarker.addTo(map);
      });
    });
  }

}

