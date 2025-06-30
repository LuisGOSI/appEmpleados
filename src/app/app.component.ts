import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from "./titulo/titulo.component";
import { EmpleadosModule } from "./empleados/empleados.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TituloComponent, EmpleadosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appEmpleados';
}
