import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Item { id: string; name: string; }

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrls: ['./listadoclientes.component.scss']
})
export class ListadoclientesComponent implements OnInit {
  usus:string = 'https://e7.pngegg.com/pngimages/433/699/png-clipart-delta-computers-rentals-computer-icons-user-icon-entrepreneurship-head-desktop-wallpaper.png';
  administrar: Observable<any[]> = new Observable;
  public myAdmin: Observable<any[]> = new Observable;
  clientes: any[] = new Array<any>()

  constructor(public firestore: AngularFirestore, private afs: AngularFirestore) {
    //this.administrar = firestore.collection('administrar').valueChanges(); 
  }

  ngOnInit(): void {
    
    this.clientes.length = 0;
    this.afs.collection('administrar').get().subscribe((rx)=>{
      console.log(rx.docs)
      rx.docs.forEach(recorre => {
        let almacena:any = recorre.data();
        almacena.id = recorre.id;
        almacena.ref = recorre.ref;
        this.clientes.push(almacena);
      });

    })
    
   //this.administrar = this.firestore.collection('administrar').valueChanges({ref: 'refId'})
    this.administrar.forEach(element => {
      console.log(element)
    });
  }

}
