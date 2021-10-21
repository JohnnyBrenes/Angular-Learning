import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes:string[] = ['Ironman','Hulk','Strange','Spiderman'];

  heroeBorrado:string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
