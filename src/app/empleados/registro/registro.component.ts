import { Component } from '@angular/core';
import { Empleado } from '../../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  nuevo: Empleado = {
    idEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: this.formatearFecha(new Date()),
    sexo: ''
  }

  formatearFecha(fecha: Date): string {
    const day = String(fecha.getDate()).padStart(2, '0');
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const year = String(fecha.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  mostrarDropdown: boolean = false;

  toggleDropdown() {
    this.mostrarDropdown = !this.mostrarDropdown;
  }

  constructor(private EmpleadosService: EmpleadosService) { }

  agregarEmpleado() {
    if (this.nuevo.idEmpleado && this.nuevo.nombre && this.nuevo.correo && this.nuevo.telefono && this.nuevo.fechaNacimiento && this.nuevo.sexo) {
      this.nuevo.fechaNacimiento = this.formatearFecha(new Date(this.nuevo.fechaNacimiento));
      this.EmpleadosService.addEmpleado(this.nuevo);

      this.nuevo = {
        idEmpleado: 0,
        nombre: '',
        correo: '',
        telefono: '',
        fechaNacimiento: this.formatearFecha(new Date()),
        sexo: ''
      };
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  eliminarEmpleado(idEmpleado: number) {
    this.EmpleadosService.deleteEmpleado(idEmpleado);
  }



}
