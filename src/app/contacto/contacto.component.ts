import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginComponent } from '../login/login.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import { EscogerIngredientesComponent } from '../escoger-ingredientes/escoger-ingredientes.component';
import { IngredientesComponent } from '../ingredientes/ingredientes.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(EscogerIngredientesComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
