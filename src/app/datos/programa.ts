import { Estudiante } from "./estudiante";

export interface Programa {
id: string;
nombre: string;
estudiantes: Estudiante[];
}

