import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarComponent } from './agregar/agregar.component';
import { Componente404Component } from './componente404/componente404.component';
import { VersuscripcionComponent } from './versuscripcion/versuscripcion.component';
import { ImprimeComponent } from './imprime/imprime.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MensajeriaService } from './services/mensajeria.service';
import { PreciosComponent } from './precios/precios.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { SeleccionarclienteComponent } from './seleccionarcliente/seleccionarcliente.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Componente404Component,
    VersuscripcionComponent,
    ImprimeComponent,
    AgregarComponent,
    ListadoclientesComponent,
    PreciosComponent,
    InscripcionComponent,
    SeleccionarclienteComponent,
    AgregarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AngularFireStorageModule,
  ],
  providers: [AngularFireAuth, AngularFirestore, MensajeriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
