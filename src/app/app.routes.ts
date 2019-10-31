import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoInfoComponent } from './components/producto-info/producto-info.component';
import { BuscarProductoComponent } from './components/buscar-producto/buscar-producto.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tienda', component: TiendaComponent },    
    { path: 'about', component: AboutComponent },
    { path: 'informacionprudcto/:id', component: ProductoInfoComponent },
    { path: 'buscarprudcto/:termino', component: BuscarProductoComponent },
    { path: '**', pathMatch:'full', redirectTo: '/home' }
];

export const appRouting = RouterModule.forRoot(routes);