import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Inicio Servicio

import { AnimacionService } from "./Services/animacion.service"
import { PortfolioService } from './Services/portfolio.service';

// Fin Servicio

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PortadaComponent } from './components/portada/portada.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'; 
import { FormsModule } from '@angular/forms';
import { intercpetorProvider } from './Services/interceptor.service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditPerfilComponent } from './components/perfil/edit-perfil.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewhabblandasComponent } from './components/habilidades/newhabblandas.component';
import { NewhabdurasComponent } from './components/habilidades/newhabduras.component';
import { NewidiomasComponent } from './components/habilidades/newidiomas.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortadaComponent,
    PerfilComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditPerfilComponent,
    NewproyectoComponent,
    EditProyectoComponent,
    NewhabblandasComponent,
    NewhabdurasComponent,
    NewidiomasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    AnimacionService, 
    PortfolioService,
    intercpetorProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
