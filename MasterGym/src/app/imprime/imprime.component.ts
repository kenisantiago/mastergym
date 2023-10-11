import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Inscripcion } from '../models/inscripcion';

@Component({
  selector: 'app-imprime',
  templateUrl: './imprime.component.html',
  styleUrls: ['./imprime.component.scss']
})
export class ImprimeComponent implements OnInit {
  inscripciones: any[] = [];
  copia: any[] = [];
  inscripcion: Inscripcion = new Inscripcion();
  constructor(private dBase: AngularFirestore) { }
  
  ngOnInit(): void {
     this.inscripciones.length = 0;
    this.dBase.collection('inscripciones').get().subscribe((resulta)=>{
     
      resulta.forEach((inscripcion:any)=>{
        
       let inscri = inscripcion.data();  
       inscri.id = inscripcion.id;
       
       this.dBase.doc(inscripcion.data().cliente.path).get().subscribe((xc)=>{
         
         inscri.clienteObtenido = xc.data();
         inscri.fecha = new Date(inscri.fecha.seconds * 1000);
         inscri.fechaFinal = new Date(inscri.fechaFinal.seconds * 1000)
         this.inscripciones.push(inscri);
         console.log(inscri);
         
       })

      })
    })
  }


}
