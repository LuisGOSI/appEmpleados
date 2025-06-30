import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../../interfaces/empleado';

@Component({
  selector: 'app-lista-empleados',
  standalone: false,
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})

export class ListaEmpleadosComponent {

  constructor(private EmpleadosService: EmpleadosService) { }

  get empleados(): Empleado[]{
    return this.EmpleadosService.empleados;
  } 

  eliminarEmpleado(idEmpleado: number) {
    this.EmpleadosService.deleteEmpleado(idEmpleado);
  }
}
