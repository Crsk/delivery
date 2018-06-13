import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import { Ingrediente } from '../models/ingrediente';
import { IngredienteService } from '../ingrediente/ingrediente.service';
import { ToastrService } from 'ngx-toastr';
import { SeleccionService } from '../seleccion/seleccion.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-escoger-ingredientes',
  templateUrl: './escoger-ingredientes.component.html',
  styleUrls: ['./escoger-ingredientes.component.css']
})
export class EscogerIngredientesComponent implements OnInit{

  ingredienteUno: Ingrediente;
  ingredienteDos: Ingrediente;
  ingredienteTres: Ingrediente;
  ingredientes$;

  bHayIngredientes: boolean = false;
  ingredientesFaltantes: number = 5;
  ingredientes: Array<Ingrediente> = [];

  message: string;

  seleccionObj: Product;

  total: number;

  constructor(ingredienteService: IngredienteService, private toastr: ToastrService, private seleccion: SeleccionService) {
    this.ingredientes$ = ingredienteService.getAll();
  }
  
  ngOnInit() {
    this.seleccionObj = this.seleccion.getSeleccion();
    this.total = this.seleccionObj.price;
  }

  add(nombre: string, agregarAlCarro) {
    if (this.ingredientes.length >= 5 && this.ingredientes.length < 9) {
      this.total += 500;
    }
    if (this.ingredientes.length >= 9) {
      this.toastr.warning("El límite es de 9", "No podemos agregar otro");
      return;
    }
    let ingrediente = new Ingrediente();
    ingrediente.nombre = nombre;
    this.ingredientes.push(ingrediente);
    this.bHayIngredientes = true;
    this.ingredientesFaltantes--;
  }

  remove(ingrediente) {
    if (this.ingredientes.length > 5) {
      this.total -= 500;
    }
    console.log('ingrediente: ' + ingrediente);
    this.ingredientes = this.ingredientes.filter(item => item !== ingrediente);
    if (this.ingredientes.length == 0)
      this.bHayIngredientes = false;
    this.ingredientesFaltantes++;
  }

  noneSelected() {
    if (this.ingredientes.length >= 5) return false;
    else return true;
  }
}
