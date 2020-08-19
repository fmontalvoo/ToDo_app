import { Injectable } from '@angular/core';
import { ListaModel } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class PendientesService {

  private listas: ListaModel[];

  constructor() {
    this.load();
  }

  crearLista(titulo: string): number {
    let lista: ListaModel = new ListaModel(titulo);
    this.listas.push(lista);
    this.save();

    return lista.getID();
  }

  getListas(): ListaModel[] {
    return this.listas;
  }

  getLista(id: string | number): ListaModel {
    id = Number(id);
    return this.listas.find(lista => lista.getID() === id);
  }

  deleteLista(id: number): ListaModel[] {
    this.listas = this.listas.filter(lista => lista.getID() !== id);
    this.save();
    return this.listas;
  }

  /**
   * Almacena en el local storage
   */
  save() {
    localStorage.setItem('pendientes', JSON.stringify(this.listas));
  }

  /**
   * Carga datos desde el local storage
   */
  load() {
    let data = JSON.parse(localStorage.getItem('pendientes'));
    if (data)
      this.listas = ListaModel.fromJson(data);
    else
      this.listas = new Array();
  }
}
