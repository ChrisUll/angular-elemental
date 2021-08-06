import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

      heroes: string[] = ['Interglo', 'Aligro', 'Siglo'];
      borrados: string[] = []; 

      borrarHeroe():void{
        this.borrados.push(this.heroes.splice(this.heroes.length-1,1)[0].toString());
      }

}
