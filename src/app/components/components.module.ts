import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ListasComponent } from './listas/listas.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    ListasComponent
  ],
  exports: [
    ListasComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }
