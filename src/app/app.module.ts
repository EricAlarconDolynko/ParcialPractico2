import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteModule } from './paciente/paciente.module';
import { HistorialModule } from './historial/historial.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PacienteModule,
    HistorialModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
