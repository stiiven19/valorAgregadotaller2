import { Component } from '@angular/core';
import { PROGRAMAS } from '../../datos/programas';
import { Programa } from '../../datos/programa';
import { SaberPro } from '../../datos/saberpro';
import { Estudiante } from '../../datos/estudiante';

@Component({
  selector: 'facultad-component',
  standalone: true,
  imports: [],
  templateUrl: './facultad.component.html',
  styleUrl: './facultad.component.css'
})

export class FacultadComponent {
  name: string = "Facultad de Ingeniería";

  programas = PROGRAMAS;
  estudiantesSeleccionados: Estudiante[] = [];
  programaSeleccionado: Programa = { id: "", nombre: "", estudiantes: [] };
  programaId: string = "";
  estudianteId: string = "";
  estudianteSeleccionado: Estudiante = { id: "", nombre: "", saberPro: { lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0 } };

  onChange(event: any): void {
    this.programaId = event.target.value;
    this.buscarPrograma(this.programaId);
  }

  buscarPrograma(programaId: string): void {
    for (let index = 0; index < this.programas.length; index++) {
      const element = this.programas[index];
      if (element.id === programaId) {
        this.programaSeleccionado = element;
        this.estudiantesSeleccionados = element.estudiantes;
  
        // Asignamos directamente el estudiante por defecto (primer estudiante en el array)
        this.estudianteSeleccionado = this.estudiantesSeleccionados[0] || { id: "", nombre: "", saberPro: { lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0 }};
        break;
      }
    }
  }

  onEstudianteChange(event: any): void {
    console.log('onEstudianteChange called:', event);
    const estudianteId = event.target.value;
    this.buscarEstudiante(estudianteId);
  }
  
  buscarEstudiante(estudianteId: string): void {
    const estudiante = this.estudiantesSeleccionados.find(est => est.id === estudianteId);
  
    if (estudiante) {
      this.estudianteSeleccionado = estudiante;
    } else {
      // Si el estudiante no se encuentra, asigna el estudiante por defecto con puntajes en cero
      this.estudianteSeleccionado = {
        id: estudianteId,
        nombre: "", // Puedes asignar un nombre por defecto o dejarlo vacío
        saberPro: { lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0 }
      };
    }
  }
}
