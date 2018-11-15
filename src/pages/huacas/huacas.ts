import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the HuacasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-huacas',
  templateUrl: 'huacas.html',
})
export class HuacasPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  listChartElements :any;
  isAddHuacaActive = false;
  // list = [1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8];
  list = [
          {position:0,name:'1',img:'assets/imgs/1.jpg'},
          {position:1,name:'2',img:'assets/imgs/2.jpg'},
          {position:2,name:'3',img:'assets/imgs/3.jpg'},
          {position:3,name:'4',img:'assets/imgs/4.jpg'},
          {position:4,name:'5',img:'assets/imgs/5.jpg'},
          {position:5,name:'6',img:'assets/imgs/6.jpg'},
          {position:6,name:'7',img:'assets/imgs/7.jpg'},
          {position:7,name:'8',img:'assets/imgs/8.jpg'},
          {position:8,name:'9',img:'assets/imgs/9.jpg'},
          {position:9,name:'10',img:'assets/imgs/10.jpg'}
          

  ];
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad HuacasPage');
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
     
      type: 'doughnut',
      data: {
          labels: ["14002", "14562", "14302", "12502"],
          datasets: [{
              
              data: [5000, 14000, 5560, 1600],
              backgroundColor: [
                "rgba(228, 59, 40, 0.8)",
                "rgba(128, 150, 149, 0.8)",
                "rgba(74, 204, 198, 0.8)",
                "rgba(96, 232, 160, 0.8)",
                 
                  
              ],
              hoverBackgroundColor: [
                "#E43B28",
                "#809695",
                "#4ACCC6",
                "#60E8A0",
                 
              ]
          }]
      },
      options: {
        responsive: false, 
        cutoutPercentage: 48, 
        legend:{
          display:false
        },
        animation:{
          animateRotate:true,
          animateScale:false
        },
        tooltips: {
          enabled:false
        }
      },

  });
  this.listChartElements = this.doughnutChart.data.datasets[0]._meta[0].data;
}
    onClick(evt) {
        console.log('click');
        console.log(evt);
        this.listChartElements.forEach(element => {
          this.doughnutChart.updateHoverStyle([element], null, false);
        });
        var activePoints = this.doughnutChart.getElementsAtEvent(evt);
        console.log(activePoints);
        
        if (activePoints[0]) {
          var chartData = activePoints[0]['_chart'].config.data;
          var idx = activePoints[0]['_index'];
  
          var label = chartData.labels[idx];
          var value = chartData.datasets[0].data[idx];
  
          var url = "http://example.com/?label=" + label + "&value=" + value;
          console.log(url);
          // alert(url);
        }
      }
      roundClick(elementToActive){
        
        this.listChartElements.forEach(element => {
          this.doughnutChart.updateHoverStyle([element], null, false);
        });
        var activeSegment = this.listChartElements[elementToActive];
          
          // update the hover style
          this.doughnutChart.updateHoverStyle([activeSegment], null, true);
          
          // render so we can see it
          this.doughnutChart.render();
      }
      addHuaca(){
        this.isAddHuacaActive = true;
      }
      goBack(){
        this.isAddHuacaActive = false;
      }
}
