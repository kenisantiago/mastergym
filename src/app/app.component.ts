import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'progym';
  cargando: boolean = true;

  constructor(public auth: AngularFireAuth) {
    this.auth.user.subscribe((usuari)=>{
      setTimeout(()=> {this.cargando = false;
      
    },1000)
  })
}

  /*logout() {
    this.auth.signOut();
  }*/
}
