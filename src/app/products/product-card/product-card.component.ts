import { ShoppingCart } from './../../models/shopping-cart';
import { ShoppingCartService } from './../../shopping-cart/shopping-cart.service';
import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EscogerIngredientesComponent } from '../../escoger-ingredientes/escoger-ingredientes.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SeleccionService } from '../../seleccion/seleccion.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  bsModalRef: BsModalRef;

  private messageSource = new BehaviorSubject<string>("test");
  currentMessage = this.messageSource.asObservable();

  constructor(private cartService: ShoppingCartService, private modalService: BsModalService, private seleccion: SeleccionService) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  addToCart() {
    if (this.product.bShawarma == true)
    {
      this.seleccion.setSeleccion(this.product);
      this.openModalWithComponent();
    }
    else
      this.cartService.addToCart(this.product);
  }

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(EscogerIngredientesComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
