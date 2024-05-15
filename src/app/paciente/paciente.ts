export class Paciente {
    nombre: string;
    edad: number;
    diagnostico: number;
    
    public constructor(nombre: string, edad: number, diagnostico: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.diagnostico = diagnostico;
    }
  }