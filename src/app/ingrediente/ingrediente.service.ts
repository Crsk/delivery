import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class IngredienteService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/ingredientes', {
      query: {
        orderByChild: 'nombre'
      }
    });
  }

}
