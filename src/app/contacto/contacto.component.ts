import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ContactoService } from './contacto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
  constructor(private contactoService: ContactoService, private toastr: ToastrService) { }
  enviarMensaje(nombre, correo, telefono, mensaje) {
    this.contactoService.enviarMensaje(nombre.value, correo.value, telefono.value, mensaje.value);
    nombre.value = '';
    correo.value = '';
    telefono.value = '';
    mensaje.value = '';
    this.toastr.success('Mensaje enviado', 'Listo :D');
  }
}
