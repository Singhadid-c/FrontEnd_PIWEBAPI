import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { NetworkService } from 'src/app/services/network.service';
import { DataValue } from 'src/app/models/data.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  data = [];
  lineChartData: ChartDataSets[];

  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
    fontSize: 1
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  TT01Value : DataValue[];

  constructor(private networkService : NetworkService) { }

  ngOnInit() {
    this.feedData();
  }

  feedData()
  {
    var value = [];
    var timeStamp = [];
    this.networkService.getTT01value().subscribe(
      output => {
        this.TT01Value = output.result;
        this.TT01Value.forEach(function (item)
        {
          value.push(item.Value);
          timeStamp.push(item.Timestamp);
        })
    });
    this.lineChartData = [
      { data: value, label: 'TT01 Temperature' },
    ];
    this.lineChartLabels = timeStamp;
  }

}
