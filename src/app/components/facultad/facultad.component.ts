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
  // estudiantesSeleccionados = [{id:"", nombre:""}];
  // programaSeleccionado: Programa = {id:"",nombre:"", estudiantes:[]};
  estudiantesSeleccionados = [{id:"", nombre:"", saberPro: {lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0}}];
  programaSeleccionado: Programa = {id:"",nombre:"", estudiantes:[]};
  // programa: Programa = {id:"",nombre:""};
  programaId: string = "";
  estudianteId: string = "";
  estudianteSeleccionado: Estudiante = { id:"", nombre: "", saberPro:{lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0}};
  saberPro: SaberPro = {lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0};


  //   programas = [{id:"52",nombre:"Ingeniería de Sistemas"}, {id:"53",nombre:"Ingeniería Civil"},
  // {id:"54",nombre:"Ingeniería Electrónica"}];

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
        break;
      }
    }
  }

  onChangeEstudiante(event: any): void {
    this.estudianteId = event.target.value;
    this.buscarEstudiante(this.estudianteId);
  }
  
  buscarEstudiante(estudianteId: string): void {
    // Lógica para buscar el estudiante por ID y asignarlo a estudianteSeleccionado
    // Puedes implementar esta lógica según tu necesidad.
  }

}



