import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PendientesService } from 'src/app/services/pendientes.service';

import { ListaModel } from 'src/app/models/lista.model';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  public lista: ListaModel;
  public nombreItem: string = '';

  constructor(private pendientesService: PendientesService, private route: ActivatedRoute) {
    const listaID = this.route.snapshot.paramMap.get('listaID');
    this.lista = this.pendientesService.getLista(listaID);
  }


  addItem() {
    if (this.nombreItem.length === 0) return;
    let tarea: TareaModel = new TareaModel(this.nombreItem);
    this.lista.addTarea(tarea);
    this.nombreItem = '';
    this.pendientesService.save();
  }

  updateTask(tarea: TareaModel) {
    const pendientes: number = this.lista.getTareas().filter(tarea => !tarea.isCompletada()).length;
    // console.log({ pendientes });
    if (pendientes === 0) {
      this.lista.setFinalizacion(new Date());
      this.lista.setCompletada(true);
    } else {
      this.lista.setFinalizacion(null);
      this.lista.setCompletada(false);
    }
    this.pendientesService.save();
  }

  eliminar(idx: number) {
    this.lista.getTareas().splice(idx, 1);
    this.pendientesService.save();
  }

  ngOnInit() {
  }

}
