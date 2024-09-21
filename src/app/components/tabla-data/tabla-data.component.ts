import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-data',
  standalone: true,
  imports: [],
  templateUrl: './tabla-data.component.html',
  styleUrl: './tabla-data.component.css'
})
export class TablaDataComponent {
  title= '';
  columnas: string[] = [];
  dataSource: any = [];

  //Establecer los valores de titulo, columnas y fuente de datos
  @Input() set titulo(title: any){
    this.title =  title;
  }

  @Input() set columns(columns: string[]){
    this.columnas = columns;
  }

  @Input() set data(data: any){
    this.dataSource = data;
  }
}
