import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  nombreTarea!: string;
  descripcion!: string;
  datos: any[] = [];

  @Output() cambiarNomnbre = new EventEmitter<any[]>();

  guardarDatos(){
    this.datos.push({nombreTarea: this.nombreTarea, descripcion: this.descripcion})

    this.cambiarNomnbre.emit(this.datos)
  }
}
