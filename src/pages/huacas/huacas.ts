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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
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
        responsive: true, 
        cutoutPercentage: 48, 
        legend:{
          display:false
        }
        
      },

  });

  }

}
