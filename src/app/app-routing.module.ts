import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditPerfilComponent } from './components/perfil/edit-perfil.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { NewidiomasComponent } from './components/habilidades/newidiomas.component';
import { NewhabdurasComponent } from './components/habilidades/newhabduras.component';
import { NewhabblandasComponent } from './components/habilidades/newhabblandas.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent}, 
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'editacercade/:id', component: EditPerfilComponent},
  {path: 'nuevoproy', component: NewproyectoComponent},
  {path: 'nuevoidioma', component: NewidiomasComponent},
  {path: 'nuevohabd', component: NewhabdurasComponent},
  {path: 'nuevohabb', component: NewhabblandasComponent},
  {path: 'editproy/:id', component: EditProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }