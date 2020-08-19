import { Component } from '@angular/core';

import { PendientesService } from 'src/app/services/pendientes.service';

import { ListaModel } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public listas: ListaModel[];

  constructor(private pendientesService: PendientesService) {
    this.listas = pendientesService.getListas();
  }

}
