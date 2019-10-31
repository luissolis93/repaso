import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TiendaService} from 'src/app/service/tienda.service';

@Component({
  selector: 'app-producto-info',
  templateUrl: './producto-info.component.html',
  styles: []
})
export class ProductoInfoComponent implements OnInit {

  public productoSelect:any={};

  constructor (private ActivatedRouter:ActivatedRoute,private _TiendaService:TiendaService) {
    const IdpruductoUrL=this.ActivatedRouter.snapshot.paramMap.get('id');
    this.productoSelect=this._TiendaService.BuscarProducto(IdpruductoUrL);
    console.log(this.productoSelect);
    
  }

  ngOnInit() {
  }

}
