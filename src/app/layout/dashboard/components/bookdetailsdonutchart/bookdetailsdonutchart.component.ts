
import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_moonrisekingdom from "@amcharts/amcharts4/themes/moonrisekingdom"
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-bookdetailsdonutchart',
  templateUrl: './bookdetailsdonutchart.component.html',
  styleUrls: ['./bookdetailsdonutchart.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class BookDetailsDonutChartComponent implements OnInit {
   //,private confirmationDialogService: ConfirmationDialogService
   constructor() 
    {
 }

  ngOnInit() {
    var  chart: am4charts.PieChart3D;
    var chartData=[
                {
                 "ReturnDayCount": 3,
                 "Name":"Let Us C"
               },
               {
                "ReturnDayCount": 14,
               "Name":"Ansi C"
              },
              {
              "ReturnDayCount": 1,
              "Name":"Java Programming"
              },
              {
               "ReturnDayCount": 7,
               "Name":"Hadoop"
              },
                  {
                      "ReturnDayCount": 4,
                      "Name":"Oracle"
                      }
              ];
          am4core.useTheme(am4themes_moonrisekingdom);
          am4core.useTheme(am4themes_animated);
        chart  = am4core.create("chartdiv", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity =0; // this creates initial fade-in
    
        chart.legend = new am4charts.Legend();
       
        chart.data=chartData;
        ///this.data=chartData;
      chart.innerRadius = 100;
       
        var series = chart.series.push(new am4charts.PieSeries3D());
         series.colors.list = [
            am4core.color("#845EC2"),
            am4core.color("#D65DB1"),
             am4core.color("#FF9671"),
            am4core.color("#FFC75F"),
            am4core.color("#F9F871")
          ];
        series.dataFields.value= "ReturnDayCount";
        series.dataFields.category = "Name";
        var st= "{category} \n" +" {value.formatNumber('#')}" + " days";
         series.labels.template.text = st;
         chart.legend.itemContainers.template.visible=false;
  }
}
