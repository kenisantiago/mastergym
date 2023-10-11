import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente404',
  templateUrl: './componente404.component.html',
  styleUrls: ['./componente404.component.scss']
})
export class Componente404Component implements OnInit {
  noEncontrado:string = "https://i.pinimg.com/originals/e7/b5/4b/e7b54bba3f38f09c1740a0c5ce0e00db.gif";
  constructor() { }

  ngOnInit(): void {
  }

}
