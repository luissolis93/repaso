import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { appRouting } from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { ProductoInfoComponent } from './components/producto-info/producto-info.component';
import { BuscarProductoComponent } from './components/buscar-producto/buscar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TiendaComponent,
    LoadingComponent,
    AboutComponent,
    ProductoInfoComponent,
    BuscarProductoComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
