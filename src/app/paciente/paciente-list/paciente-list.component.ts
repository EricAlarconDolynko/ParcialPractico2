import { Component, OnInit } from '@angular/core';
import { PacienteDetail } from '../pacienteDetail';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  selected: Boolean = false;
  selectedPaciente!: PacienteDetail;

  pacientes: Array<PacienteDetail> = [];
  constructor(private pacienteService:PacienteService) { }

  getpacientes(): void{
    this.pacienteService.getPacientes().subscribe((pacientes) => {
      this.pacientes = pacientes;
    });
  }

  onSelected(paciente: PacienteDetail): void{
    this.selected = true;
    this.selectedPaciente = paciente;
  }

  ngOnInit() {
    this.getpacientes();
  }

}
