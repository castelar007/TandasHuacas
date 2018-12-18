import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { BaseMethodsProvider } from '../../providers/base-methods/base-methods';
import { CreateHuacaPage } from '../create-huaca/create-huaca';
import { HuacaDetailPage } from '../huaca-detail/huaca-detail';
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
  createHuaca = CreateHuacaPage;
  huacaDetail = HuacaDetailPage;
  isExpanded = false;
  nuevaSelectedHuaca:any;
  viejaSelectedHuaca:any;
  huacaNames=[];
  huacaStatus=[];
  huacaColors=[];
  huacaHovers=[];
  // list = [1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8];
  list = this.baseMethod.huacas;
   
   
  constructor(public navCtrl: NavController, public navParams: NavParams,public baseMethod:BaseMethodsProvider) {
  }

  
  ionViewWillLoad() {
    
    this.nuevaSelectedHuaca = this.list[0];
    this.list.forEach(element => {
      this.huacaStatus.push(element.huacaStatus);
      this.huacaNames.push(element.name);
    });
    let huacaLenght = this.list.length;
    console.log(huacaLenght);
    
    for (let i = 0; i <huacaLenght; i++) {
      this.huacaColors.push('hsl('+ (((i+1)*360/huacaLenght)-1) +',65%,60%)');
      this.huacaHovers.push('hsl('+ (((i+1)*360/huacaLenght)-1) +',65%,50%)'); 
    }
    console.log(this.huacaColors);
    console.log(this.huacaHovers);
    
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
     
      type: 'doughnut',
      data: {
          labels: this.huacaNames,
          datasets: [{
              
              data: this.huacaStatus,
              backgroundColor: this.huacaColors,
              hoverBackgroundColor: this.huacaHovers
          }]
      },
      options: {
        responsive: false, 
        cutoutPercentage: 80, 
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
  
          var huacaId = chartData.labels[idx];
          // var value = chartData.datasets[0].data[idx];
          
          var huaca = this.list.find(function(element) {
              return element.name == huacaId; 
          });
          this.roundClick(huaca);
        }
      }
      roundClick(elementToActive){
        console.log(elementToActive);
        
        this.listChartElements.forEach(element => {
          this.doughnutChart.updateHoverStyle([element], null, false);
        });
        var activeSegment = this.listChartElements[elementToActive.position];
          this.newSelectedHuaca(elementToActive);
          // update the hover style
          this.doughnutChart.updateHoverStyle([activeSegment], null, true);
          
          // render so we can see it
          this.doughnutChart.render();
          let element = document.getElementById("oldHuaca");
          element.classList.remove("old");
          void element.offsetWidth;
          element.classList.add("old");
      }
      addHuaca(){
        this.isAddHuacaActive = true;
      }
      goBack(){
        this.isAddHuacaActive = false;
      }
      expandContainer(){
        this.isExpanded = !this.isExpanded;
      }
      newSelectedHuaca(item){
        this.list.forEach(huaca => {
          huaca.isActive = false;
        });
        item.isActive = true;
        this.viejaSelectedHuaca = this.nuevaSelectedHuaca;
        this.nuevaSelectedHuaca = item;
      }
}
