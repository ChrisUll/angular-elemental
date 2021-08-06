import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `

    <h2>{{ titulo }}</h2>

    <button (click)="acumular(base)" mat-icon-button>+ {{base}}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)" mat-icon-button>- {{base}}</button> 

    
    `

})

export class ContadorComponet {
    titulo: string = 'INTERGLO';
    numero: number = 10 ;
    base: number = 5;
    
    acumular(valor:number){
    this.numero += valor;
    }

}