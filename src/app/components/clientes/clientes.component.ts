import { AfterViewInit, Component } from '@angular/core';
import { Map, icon, marker, tileLayer } from 'leaflet';
import { Database } from '@angular/fire/database';
import { getDatabase, ref, onValue } from "firebase/database";
import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/modals/login/login.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements AfterViewInit {
  title = 'map_prueba';
  locations!: Ubicacion[];

  constructor(
    private db: Database,
    public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ObtenerUbicaciones();
    }, 0)
  }

  login() {
    this.dialog.open(LoginComponent, {
      data: {
        titulo: 'Inicio de sesión',
        accion: 'Ingresar',
      },
    });
  }

  ObtenerUbicaciones() {
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
        const data = location.exportVal();
        if (data.estado !== 'Inactivo') {
          const color = data.estado === 'Ocupado' ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png' : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png';
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
            .bindPopup(`<center><h2>${data.title}</h2><p>${data.description}</p><p><strong>Ocupado: </strong>${data.ocupado} de ${data.capacidad}</p><p><strong>Estado: </strong>${data.estado}</p></center>`);
          customMarker.addTo(map);
        }
      });
    });
  }

}
