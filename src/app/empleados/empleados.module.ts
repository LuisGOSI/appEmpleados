import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosService } from './empleados.service';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';



@NgModule({
  declarations: [
    RegistroComponent, ListaEmpleadosComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    RegistroComponent, ListaEmpleadosComponent
  ],
  providers: [
    EmpleadosService
  ],
})
export class EmpleadosModule { }
