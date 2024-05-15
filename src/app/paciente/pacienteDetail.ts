import { Historial } from "../historial/historial";
import { Paciente } from "./paciente";

export class PacienteDetail extends Paciente{
    historial: Array<Historial> = [];

    constructor(
        nombre: string,
        edad: number,
        diagnostico: number,
        historial: Array<Historial>,
    ){
        super(nombre, edad, diagnostico);
        this.historial = historial;
    }
}
