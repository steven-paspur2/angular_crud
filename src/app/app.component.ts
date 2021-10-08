import { Component } from '@angular/core';
import { Articulos } from './articulo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Administracion de articulos';
  codigoInput:string = '';
  desInput:string = '';
  precioInput:string ='';
  index:number=0;
  btn_agregar=true;
  btn_modificar=false;

  articulos: Articulos[] = [];

  agregarArticulos(){
    let articulos1=new Articulos(this.desInput,this.precioInput);
    this.articulos.push(articulos1);
    this.desInput='';
    this.precioInput='';
  }
  eliminarArticulos(i: number){
    this.articulos.splice(i,1);
  }
  selecArticulos(i:number){
    this.desInput=this.articulos[i].descripcion;
    this.precioInput=this.articulos[i].precio;
    this.btn_modificar=true;
    this.btn_agregar=false;
    this.index=i;
  }
  modificarArticulos(){
    this.articulos[this.index].descripcion=this.desInput;
    this.articulos[this.index].precio=this.precioInput;
    this.desInput='';
    this.precioInput='';
    this.btn_modificar=false;
    this.btn_agregar=true;
  }
}
