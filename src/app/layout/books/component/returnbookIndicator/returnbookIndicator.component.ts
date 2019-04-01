
import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import{BookService} from '../../../../shared/services/book.service';




@Component({
  selector: 'app-returnbookIndicator',
  templateUrl: './returnbookIndicator.component.html',
  styleUrls: ['./returnbookIndicator.component.scss']
})
export class ReturnBookIndicatorComponent implements OnInit {
  private chart: any;
  private bookObj:any;
   //,private confirmationDialogService: ConfirmationDialogService
   constructor( private amCharts:AmChartsService,private bookservice:BookService) 
    {
 }

  ngOnInit() {    
    this.chart = this.amCharts.makeChart("chartdiv", {
      "theme": "none",
      "type": "gauge",
      "axes": [{
              "topTextFontSize": 12,
              "topTextYOffset": 60,
              "topTextColor": "#D52D2D",
              "axisColor": "#696969",
              "gridInside": true,
              "axisThickness": 1,
              "endValue": 0,
              "startValue": 24,
              "inside": true,
              "radius": "40%",
              "valueInterval": -3,
              "minorTickInterval": -1,
              "tickColor": "#696969	",
              "fontSize": 10,
              "startAngle": -90,
              "endAngle": 90,
              "bandOutlineAlpha": 0,
              "labelOffset": 10,
              "bands": [{
                      "color": "#3CB371",
                      "endValue": 0,
                      "innerRadius": "105%",
                      "radius": "170%",
                      "gradientRatio": [0.2, 0, -0.2],
                      "startValue": 24,
                      "balloonText": "Book Name or details"
                  }, {
                      "color": "#D52D2D",
                      "endValue": 24,
                      "innerRadius": "105%",
                      "radius": "170%",
                      "gradientRatio": [0.5, 0, -0.5],
                      "startValue": 24,
                      "balloonText": "Book Name or details"
                  }]
          }],
      "arrows": [{
              "alpha": 1,
              "innerRadius": "35%",
              "nailRadius": 0,
              "radius": "170%",
              "color": "#696969	",
          }]
        });
        this.createChart();
  }
   createChart()
   { 
    this.bookObj={
        "BookID": null,
        "ISBNNumber": "34234",
        "ReturnDate": "2/28/2019, 12:42:21 PM",
        "IssuedOn": "2019-02-22T09:57:45.157Z",
        "Name": "Java Programming",
        "Author": "Joshua Bloch",
        "Edition": "6",
        "Description": "no description"
        }
     if(this.bookObj)
     {
       setInterval(()=>{
        this.amCharts.updateChart(this.chart, () => {
          this.chart.dataProvider = [];
          console.log(this.chart);
          var now = new Date().getTime();
           var countDownDate = new Date(this.bookObj.ReturnDate).getTime();
          var distance = countDownDate - now;
          var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          var displayTime = hours + ":" + minutes + ":" + seconds+"\n" +this.bookObj.Name;
          if (hours >0) {
            this.chart.arrows[0].setValue(hours);
            this.chart.axes[0].setTopText(displayTime);
            this.chart.axes[0].bands[1].setEndValue(hours);
            this.chart.axes[0].bands[0].balloonText=hours +" hours left";
            this.chart.axes[0].bands[1].balloonText= 24 -hours +" hours elapsed";
          }
         else{
          this.chart.arrows[0].setValue(0);
          this.chart.axes[0].setTopText("Time Expired");
          this.chart.axes[0].bands[1].setEndValue(0);
          this.chart.axes[0].bands[1].balloonText= " hours elapsed";
         }
        });   
       },1000);
              
     }
   }
}
