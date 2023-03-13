import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PullingComponentComponent } from './Components/pulling-component/pulling-component.component';
import { WebSocketComponentComponent } from './Components/web-socket-component/web-socket-component.component';
import { EventSourceComponentComponent } from './Components/event-source-component/event-source-component.component';
import { AgregarComponentComponent } from './Components/agregar-component/agregar-component.component';
import { ModificarComponentComponent } from './Components/modificar-component/modificar-component.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'pulling', pathMatch: 'full' },
  { path: 'pulling', component:PullingComponentComponent },
  { path: 'web-socket', component:WebSocketComponentComponent },
  { path: 'event-source', component:EventSourceComponentComponent },
  { path: 'agregar', component:AgregarComponentComponent },
  { path: 'modificar/:id', component:ModificarComponentComponent },
  { path:'**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
