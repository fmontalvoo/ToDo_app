import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { PendientesService } from 'src/app/services/pendientes.service';

import { ListaModel } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listas: ListaModel[];

  constructor(private pendientesService: PendientesService,
    private router: Router, private alertCtrl: AlertController) {
    this.listas = pendientesService.getListas();
  }

  async agregarLista() {

    const alert = await this.alertCtrl.create({
      // cssClass: 'my-custom-class',
      header: 'Nueva lista',
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => console.log('Cancelar')
        },
        {
          text: 'Agregar',
          handler: (data) => {
            let titulo: string = data.titulo;
            if (titulo.length > 0) {
              let listaID: number = this.pendientesService.crearLista(titulo)
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaID}`);
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

}
