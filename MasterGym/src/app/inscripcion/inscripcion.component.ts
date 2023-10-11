import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';
import { Cliente } from '../models/cliente';
import { Inscripcion } from '../models/inscripcion';
import { Precio } from '../models/precio';
import { MensajeriaService } from '../services/mensajeria.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {

  inscripcion: Inscripcion = new Inscripcion();
  clienteSeleccionado: Cliente = new Cliente();
  iDPrecio: string = 'null';

  precios: Precio[] = new Array<Precio>();
  //precioSeleccionado: Precio = new Precio();
  precioSeleccionado: any;

  ide:any;

  constructor(
              private dBase: AngularFirestore,
              private msj: MensajeriaService 
              ) {

               }

  ngOnInit(): void {
    this.dBase.collection('precios').get().subscribe((resulta)=>{
      resulta.docs.forEach((item)=>{
        let precio:any = item.data() as Precio;
        precio.id = item.id;
        precio.ref  = item.ref;
        this.precios.push(precio);
        //console.log(this.precios)
      })
    })
  }

  asignarCliente(cliente: Cliente){
    this.inscripcion.cliente = cliente.ref;
    this.clienteSeleccionado = cliente;
  }

  eliminarCliente(){
    this.clienteSeleccionado = new Cliente();
    this.inscripcion.cliente = undefined;
  }
  
  guardar(){

    if(this.inscripcion.validar().esValido){

      let inscripAgregar = {
        fecha: this.inscripcion.fecha,
        fechaFinal: this.inscripcion.fechaFinal,
        cliente: this.inscripcion.cliente,
        precios: this.inscripcion.precios,
        subTotal: this.inscripcion.subTotal,
        isv: this.inscripcion.isv,
        total: this.inscripcion.total
      }
      this.dBase.collection('inscripciones').add(inscripAgregar).then((resulta)=>{
        this.inscripcion = new Inscripcion();
        this.clienteSeleccionado = new Cliente();
        this.precioSeleccionado = new Precio();
        this.iDPrecio = 'null';
        console.log('Guardado OK');
        this.msj.mssgOk('Guardado', 'Se guardo exitosamente');
      })
    }else{
      console.log(this.inscripcion.validar().mensaje)
     // this.msj.mssgAdver('Adevertencia',this.inscripcion.validar().mensaje)
     Swal.fire({
      customClass:{
        popup: 'popupclase'

      }
      ,title: 'Comentario Agregado',
      icon: 'success',
      confirmButtonColor: '#671e75',
      iconColor: '#671e75'  
    }); 
      }
  }


  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  regresaID(idx:Precio):string{
    return this.ide = idx.id; 
  }


  seleccionarPrecios(idx:Precio){
    let nvoId = this.regresaID(idx).toString()
    console.log(nvoId)
    //console.log(this.precios.find(x=> x.id == nvoId))
    if(nvoId != 'null'){
      this.precioSeleccionado = this.precios.find(x=> x.id == nvoId)
    console.log(this.precioSeleccionado)
    this.inscripcion.precios = this.precioSeleccionado.ref;


    this.inscripcion.subTotal = this.precioSeleccionado.costo;
    this.inscripcion.isv = this.inscripcion.subTotal * 0.3;
    this.inscripcion.total = this.inscripcion.subTotal + this.inscripcion.isv;


    this.inscripcion.fecha = new Date();

    if(this.precioSeleccionado.tipoDura == 1){
      //Fecha Final = precioSeleccionado.duracion * 1
      let dias = this.precioSeleccionado.duracion;
      let fechaFinal = 
        new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth(),this.inscripcion.fecha.getDate() + dias);
      this.inscripcion.fechaFinal = fechaFinal;
    }

    if(this.precioSeleccionado.tipoDura == 2){
      //Fecha Final = precioSeleccionado.duracion * 7
      let dias = this.precioSeleccionado.duracion * 7;
      let fechaFinal = 
        new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth(),this.inscripcion.fecha.getDate() + dias);
      this.inscripcion.fechaFinal = fechaFinal;
    }

    if(this.precioSeleccionado.tipoDura == 3){
      //Fecha Final = precioSeleccionado.duracion * 15
      let dias = this.precioSeleccionado.duracion * 15;
      let fechaFinal = 
        new Date(this.inscripcion.fecha.getFullYear(),this.inscripcion.fecha.getMonth(),this.inscripcion.fecha.getDate() + dias);
      this.inscripcion.fechaFinal = fechaFinal;
    }

    if(this.precioSeleccionado.tipoDura == 4){
      //Fecha Final = this.inscripcion.fecha agregar un mes precioSeleccionado.duracion
      const anio:number = this.inscripcion.fecha.getFullYear();
      const meses = this.precioSeleccionado.duracion + this.inscripcion.fecha.getMonth(); 
      const dia:number = this.inscripcion.fecha.getDate();
      let fechaFinal = 
        new Date(anio,meses,dia);
      this.inscripcion.fechaFinal = fechaFinal;

    }

    if(this.precioSeleccionado.tipoDura == 5){
      //Fecha Final = this.inscripcion.fecha agregar los años precioSeleccionado.duracion
      const anio:number = this.inscripcion.fecha.getFullYear()  + this.precioSeleccionado.duracion;
      const meses = this.precioSeleccionado.duracion; 
      const dia:number = this.inscripcion.fecha.getDate();
      let fechaFinal = 
        new Date(anio,meses,dia);
      this.inscripcion.fechaFinal = fechaFinal;
    }
    }else{
      //si no se selecciono nada
      this.precioSeleccionado = new Precio();
      this.inscripcion.precios = 0;
      this.inscripcion.fecha = new Date('');
      this.inscripcion.fechaFinal = new Date('');
      this.inscripcion.subTotal = 0;
      this.inscripcion.isv = 0;
      this.inscripcion.total = 0;
    }
    

  }



}
