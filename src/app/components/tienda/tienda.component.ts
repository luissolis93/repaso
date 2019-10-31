import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TiendaService } from '../../service/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styles: []
})
export class TiendaComponent implements OnInit {

  public productoRecibidos:Array<any>=[];

  public loading:boolean=true;
  constructor(private router:Router, public _TiendaService:TiendaService){}

  ngOnInit() {
    this.productoRecibidos=this._TiendaService.returntienda();
    setTimeout(() => {
      // console.log(this.productoRecibidos)
      this.loading=false;      
    }, 2000);
    
  }

  public MandarInformacion(idProducto){
    this.router.navigate(['informacionprudcto',idProducto])
    
  }
}
