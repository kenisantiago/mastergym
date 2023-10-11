import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuariox: string ='roy500@gmail.com';
  pass: string = '12345';
  validador: boolean = true;
  esCargando: boolean = false;
  msg:string ="";   
  foormularioLogin: FormGroup = new FormGroup({});

  constructor(private creadorFormulario: FormBuilder, public auth: AngularFireAuth) { }


  ngOnInit(): void {
    this.foormularioLogin = this.creadorFormulario.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required]
    })
  }

    ingresar(){
      console.log(this.usuariox);
      console.log(this.pass);
      this.login(this.usuariox, this.pass);
      if(this.foormularioLogin.valid){
        this.auth.signInWithEmailAndPassword(this.foormularioLogin.value.email, this.foormularioLogin.value.password).catch((error)=>{console.log(error)});
        this.validador = true;  
      }else{
        this.validador = false;
        this.esCargando = true;
        //this.msg = error.msg;
      }
    }


    login(usuariox:string, pass:string) {
      this.auth.signInWithEmailAndPassword(this.usuariox, this.pass);
    }
  
}
