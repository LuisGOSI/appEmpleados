import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _empleados: Empleado[] = [];

  get empleados(): Empleado[] {
    return this._empleados;
  }

  constructor() { }

  addEmpleado(empleado: Empleado): void {
    this._empleados.push(empleado);
  }

  deleteEmpleado(idEmpleado: number): void {
    this._empleados = this._empleados.filter(e => e.idEmpleado !== idEmpleado); 
  }

}
