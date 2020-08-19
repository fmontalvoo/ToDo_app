import { Pipe, PipeTransform } from '@angular/core';
import { ListaModel } from '../models/lista.model';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listas: ListaModel[], completada: boolean = true): unknown {
    return listas.filter(lista => lista.isCompletada() === completada);
  }

}
