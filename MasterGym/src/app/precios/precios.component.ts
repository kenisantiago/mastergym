import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Precio } from '../models/precio';
import { MensajeriaService } from '../services/mensajeria.service';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss']
})
export class PreciosComponent implements OnInit {
  formularioPrecios: FormGroup = new FormGroup({});
  precios:Precio[] = new Array<Precio>()
  id: string = '';
  editable:boolean = false;

  constructor(public fb: FormBuilder, 
              public dBase: AngularFirestore,
              private msj: MensajeriaService ) { }

  ngOnInit(): void {
    this.formularioPrecios = this.fb.group({
      nombre: ['', Validators.required],
      costo: ['', Validators.required],
      duracion: ['', Validators.required],
      tipoDura: ['', Validators.required]
    })

    this.mostrarPrecios()
   
  }


  mostrarPrecios(){
    this.dBase.collection<Precio>('precios').get().subscribe((resul)=>{
      console.log()
      this.precios.length=0;
      resul.docs.forEach(element => {
        let precio:any  = element.data() as Precio;
        precio.id = element.id
        precio.ref = element.ref
        console.log(element.data())
        this.precios.push(precio)
      });
    })

  }


  agregar(){
    console.log(this.formularioPrecios.value)
    this.dBase.collection<Precio>('precios').add(this.formularioPrecios.value).then(()=>{
      this.msj.mssgOk('Agregado','Ha sido agregado correctamente');
      this.formularioPrecios.reset()
      this.mostrarPrecios();
    }).catch(()=>{
      this.msj.mssgError('Error','No se pudo agregar')
    })
  }

  editarPrecio(precio: Precio){
    this.editable = true;
    this.formularioPrecios.setValue({
      nombre: precio.nombre,
      costo: precio.costo,
      duracion: precio.duracion,
      tipoDura: precio.tipoDura
    })
    this.id = precio.id;
  }

  editar(){
    this.dBase.doc('precios/' + this.id).update(this.formularioPrecios.value).then(()=>{
      this.msj.mssgOk('Editado','Ha sido editado correctamente');
      this.formularioPrecios.reset()
      this.editable = false;
      this.mostrarPrecios();
    }).catch(()=>{
      this.msj.mssgError('Error','No se pudo editar')
      

    })
  }

}
