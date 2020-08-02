import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent  {

  results: any[] = [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 30
    },
    {
      "name": "Juego 3",
      "value": 15
    },
    {
      "name": "Juego 4",
      "value": 45
    }
  ];

  // options
  showXAxis   = true;
  showYAxis   = true;
  gradient     = true;
  showLegend   = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {
    // Object.assign(this, { single });
    console.log(Math.round(Math.random() * 500));
    for (const i in this.results) {
      this.results[i].value = Math.round(Math.random() * 500);
    }
  }

  onSelect(event) {
    console.log(event);
  }

}
