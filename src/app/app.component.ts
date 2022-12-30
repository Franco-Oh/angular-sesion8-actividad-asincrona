import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-8';
  info = [{
    nombre:"Luis",
    apellido:"Ejemplo",
    edad:17
  }];

  addDatos(a:any, b:any, c:any){
    console.log("esta funcionand el boton " + a + b + c);
    this.info.push({nombre:a, apellido:b, edad:c});
    console.log(this.info)
  }
}
