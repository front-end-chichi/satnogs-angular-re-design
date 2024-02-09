import { Component, OnInit } from '@angular/core';

declare const Plotly : any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  ngOnInit() 
  {
    type PlotType = "scatterpolargl";

    const plotType : PlotType = "scatterpolargl";

    type PlotMode = "markers";

    const plotMode : PlotMode = "markers";

    type PlotCounterClockWise = "counterclockwise";

    const plotCounterClockWise : PlotCounterClockWise = "counterclockwise";

    type PlotBelowTraces = "below traces";

    const plotBelowTraces : PlotBelowTraces = "below traces";

    var data = [ 
  
      {
        type: plotType,
        r: [60],
        theta: [90],
        mode: plotMode,
        name: "Rise",
        marker: {
          color: "rgb(27,158,119)",
          size: 10,
          line: {
            color: "white"
          },
          opacity: 0.7
        },
        cliponaxis: false
      },
      {
        type: plotType,
        r: [60],
        theta: [10],
        mode: plotMode,
        name: "Set",
        marker: {
          color: "rgb(217,95,2)",
          size: 10,
          line: {
            color: "white"
          },
          "opacity": 0.7
        },
        "cliponaxis": false
      },
      {
        type: plotType,
        r: [60],
        theta: [110],
        mode: plotMode,
        name: "Max",
        marker: {
          color: "rgb(117,112,179)",
          size: 10,
          line: {
            color: "white"
          },
          opacity: 0.7
        },
        cliponaxis: false
      }
    ]

    var layout = {
      autosize: false,
      width: 300,
      height: 250,
      title: "",
      font: {
        size: 15
      },
      showlegend: false,
      polar: {
        bgcolor: "#474747",
        angularaxis: {
          tickwidth: 2,
          linewidth: 3,
          gridcolor: "#5D5E6B",
          layer: plotBelowTraces
        },
        sublayer :{ display: false},
        radialaxis: {
          side: plotCounterClockWise,
          showline: true,
          linewidth: 2,
          tickwidth: 2,
          visible: true,
          gridcolor: "#5D5E6B",
          gridwidth: 2
        }
      },
      paper_bgcolor: "#474747",
    }
  

  Plotly.newPlot('chart', data, layout);
  }
}