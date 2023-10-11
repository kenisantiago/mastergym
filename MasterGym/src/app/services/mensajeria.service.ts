import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  constructor() { }

  mssgOk(titulo:string, mensaje:string){

    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'success',
      confirmButtonText: 'Ok'
    })

  }

  mssgError(titulo:string, mensaje:string){

    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  
    }

    mssgAdver(titulo:string, mensaje:string){

      Swal.fire({
        title: titulo,
        text: mensaje,
        icon: 'warning',
        confirmButtonText: 'Ok'
        
      })

  }
}
