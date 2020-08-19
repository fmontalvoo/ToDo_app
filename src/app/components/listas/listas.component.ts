import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { AlertController, IonList } from '@ionic/angular';

import { ListaModel } from 'src/app/models/lista.model';
import { PendientesService } from 'src/app/services/pendientes.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) ionList: IonList;
  @Input() public path: string;
  @Input() public listas: ListaModel[];
  @Input() public completada: boolean;

  constructor(private pendientesService: PendientesService, private alertCtrl: AlertController) {
  }

  async editar(lista: ListaModel) {
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.getTitulo(),
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => this.ionList.closeSlidingItems()
        },
        {
          text: 'Guardar',
          handler: (data) => {
            let titulo: string = data.titulo;
            if (titulo.length > 0) {
              lista.setTitulo(titulo);
              this.pendientesService.save();
              this.ionList.closeSlidingItems();
            } else {
              console.log('Error')
            }
          }
        },
      ]
    });

    // Muestra el cuadro de dialogo.
    alert.present();
  }

  eliminar(id: number) {
    this.listas = this.pendientesService.deleteLista(id);
  }

  ngOnInit() { }

}
