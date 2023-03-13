import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PullingComponentComponent } from './Components/pulling-component/pulling-component.component';
import { WebSocketComponentComponent } from './Components/web-socket-component/web-socket-component.component';
import { EventSourceComponentComponent } from './Components/event-source-component/event-source-component.component';
import { AgregarComponentComponent } from './Components/agregar-component/agregar-component.component';
import { ModificarComponentComponent } from './Components/modificar-component/modificar-component.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PullingComponentComponent,
    WebSocketComponentComponent,
    EventSourceComponentComponent,
    AgregarComponentComponent,
    ModificarComponentComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
