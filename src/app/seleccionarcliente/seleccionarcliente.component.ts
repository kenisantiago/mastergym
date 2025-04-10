import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { EventEmitter } from 'stream';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-seleccionarcliente',
  templateUrl: './seleccionarcliente.component.html',
  styleUrls: ['./seleccionarcliente.component.scss']
})
export class SeleccionarclienteComponent implements OnInit {
 clientes: Cliente[] = new Array<Cliente>();
 valor:string = '';
 @Input('nombre') nombre:any = undefined;
 @Output('seleccionoCliente') seleccionoCliente = new EventEmitter();
 @Output('canceloCliente') canceloCliente = new EventEmitter();
  constructor(public dBase: AngularFirestore) { }

  ngOnInit(): void {
    this.dBase.collection<any>('administrar').get().subscribe((res)=>{
      this.clientes.length = 0;
      res.docs.forEach(item => {
        let cliente:any = item.data();
        cliente.id = item.id;
        cliente.ref = item.ref;
        cliente.visible = false;
        this.clientes.push(cliente);
      });

      console.log(this.clientes)
    })
  }


  
    buscarClientes(nombre:Event){
      this.valor = this.getValue(nombre);
      console.log(this.valor)

      this.clientes.forEach((busca)=>{
        if(busca.cliente.toLowerCase().includes(this.valor.toLocaleLowerCase())){
          busca.visible = true;
        }else{
          busca.visible = false;
        }

      })
    }

    getValue(event: Event): string {
      return (event.target as HTMLInputElement).value;
    }


    seleccionarCliente(clientx:Cliente){
      this.nombre = clientx.cliente;
      console.log(clientx)
      this.clientes.forEach((cliente)=> {
        cliente.visible = false;
      });

      this.seleccionoCliente.emit(clientx)
    }

    cancelarCliente(){
      this.nombre = undefined;
      this.canceloCliente.emit();
    }
}
