import { DocumentReference } from "@angular/fire/compat/firestore";

export class Precio{
    id: string = '';
    nombre:string = '';
    costo:number = 0;
    duracion:number = 0;
    tipoDura:number = 0;
    ref: any

    constructor(){
        this.id = '';
        this.nombre = '';
        this.costo = 0;
        this.duracion = 0;
        this.tipoDura = 0;
    }
}