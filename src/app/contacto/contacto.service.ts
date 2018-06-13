import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactoService {

  constructor(private db: AngularFireDatabase) { }

  public enviarMensaje(nombre, correo, telefono, mensaje) {
    return this.db.list('/mensajes').push({
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      mensaje: mensaje
    });
  }
}
