import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class SeleccionService {

  public seleccionObj: Product;

  constructor() {
  }

  setSeleccion(seleccion: Product) {
    this.seleccionObj = seleccion;
  }

  getSeleccion() {
    return this.seleccionObj;
  }

}
