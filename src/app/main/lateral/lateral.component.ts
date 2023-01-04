import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent {
  @Input()  datosLateral: any[] = [];

}
