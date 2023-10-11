import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.user.subscribe((usuari)=>{
      
      
    })
  }

  logout() {
    this.auth.signOut();
  }

}
