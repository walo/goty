import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

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

  intervalo;

  constructor() {
    // Object.assign(this, { single });
    
    this.intervalo = setInterval( ()=> {
      console.log("Tick");

      const newResults = [...this.results];

      for (const i in newResults) {
        newResults[i].value = Math.round(Math.random() * 1000);
      }

      this.results = [...newResults];

    }, 1500 );

  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event) {
    console.log(event);
  }

}
