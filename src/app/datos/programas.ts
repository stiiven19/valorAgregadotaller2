import { Programa } from "./programa";
export const PROGRAMAS: Programa[] = [
    {
        id:"52",
        nombre:"Ingeniería de Sistemas",
        estudiantes: [
            {
                id: "521", 
                nombre: "Luis",
                saberPro: {
                    lecturaCritica: 67,
                    ingles: 52,
                    ciudadanas: 71,
                    razonamiento: 74,
                    comunicacionEscrita: 71
                }
            },
            {
                id: "521", 
                nombre: "Maria",
                saberPro: {
                    lecturaCritica: 77,
                    ingles: 42,
                    ciudadanas: 61,
                    razonamiento: 71,
                    comunicacionEscrita: 66
                }
            }
        ]
    },
    
    {
        id:"53",
        nombre:"Ingeniería Civil",
        estudiantes: [
            {
                id: "531", 
                nombre: "José",
                saberPro: {
                    lecturaCritica: 54,
                    ingles: 62,
                    ciudadanas: 79,
                    razonamiento: 71,
                    comunicacionEscrita: 77
                }
            },
            {
                id: "532", 
                nombre: "Sofia",
                saberPro: {
                    lecturaCritica: 77,
                    ingles: 50,
                    ciudadanas: 78,
                    razonamiento: 54,
                    comunicacionEscrita: 61
                }
            }
        ]
    },

    {
        id:"54",
        nombre:"Ingeniería Electrónica",
        estudiantes: [
            {
                id: "541", 
                nombre: "Samuel",
                saberPro: {
                    lecturaCritica: 70,
                    ingles: 60,
                    ciudadanas: 71,
                    razonamiento: 72,
                    comunicacionEscrita: 73
                }},
            {
                id: "542",
                 nombre: "Helena",
                 saberPro: {
                    lecturaCritica: 87,
                    ingles: 62,
                    ciudadanas: 81,
                    razonamiento: 74,
                    comunicacionEscrita: 71
                }
            }
        ]
    }
]