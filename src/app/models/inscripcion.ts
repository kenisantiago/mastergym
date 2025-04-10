export class Inscripcion{
    fecha: Date;
    fechaFinal: Date;
    cliente: any;
    precios:any;
    subTotal: number;
    isv:number;
    total: number;

    constructor(){
        this.fecha = new Date('');
        this.fechaFinal = new Date('');
        this.cliente = undefined;
        this.precios = undefined;
        this.subTotal = 0;
        this.isv = 0;
        this.total = 0;
    }

    validar():any {
        let respuesta = {
            esValido: false,
            mensaje: ''
        }

        if(this.cliente == null || this.cliente == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No ha seleccionado un cliente';
            return respuesta;
        }

        if(this.fecha == null || this.fecha == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No tiene fecha de Inicio';
            return respuesta;
        }

        if(this.subTotal <= 0 || this.subTotal == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No se ha seleccionado precio';
            return respuesta;
        }

        if(this.isv <= 0 || this.isv == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No se ha podido calcular el IVA';
            return respuesta;
        }

        if(this.total <= 0 || this.total == undefined){
            respuesta.esValido = false;
            respuesta.mensaje = 'No se ha podido calcular el Total';
            return respuesta;
        }

        respuesta.esValido = true;
        return respuesta;

    }
}