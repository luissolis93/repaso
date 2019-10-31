import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TiendaService } from 'src/app/service/tienda.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styles: []
})
export class BuscarProductoComponent implements OnInit {

  private termino:string="";
  public productosFiltrados:any={};
  public loading:boolean=true;

  constructor(private ActivatedRoute:ActivatedRoute,private _productoService:TiendaService) {
    this.ActivatedRoute.params.subscribe((TerminoURL)=>{
      this.loading=true;
      this.termino=TerminoURL.termino;
      this.productosFiltrados=this._productoService.buscarProducto(this.termino);
      this.loading=false;
      console.log(this.productosFiltrados);
      console.log(this.termino);

  });
}

  ngOnInit() {
  }

  }

