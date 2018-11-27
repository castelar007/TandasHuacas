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
  list = [
          {position:0,name:'Huaca Name1',img:'assets/imgs/1.jpg',huacaStatus:1500,color:"rgba(228, 59, 40, 0.5)",hover: "rgba(228, 59, 40, 1)",isActive:true},
          {position:1,name:'Huaca Name2',img:'assets/imgs/2.jpg',huacaStatus:500,color:"rgba(128, 150, 149, 0.5)" ,hover:"rgba(128, 150, 149,1)",isActive:false},
          {position:2,name:'Huaca Name3',img:'assets/imgs/3.jpg',huacaStatus:2500,color:"rgba(74, 204, 198, 0.5)" ,hover: "rgba(74, 204, 198,1)",isActive:false },
          {position:3,name:'Huaca Name4',img:'assets/imgs/4.jpg',huacaStatus:3500,color:"rgba(96, 232, 160, 0.5)" ,hover: "rgba(96, 232, 160, 1)",isActive:false },
          {position:4,name:'Huaca Name5',img:'assets/imgs/5.jpg',huacaStatus:300,color:"rgba(196, 232, 160, 0.5)",hover: "rgba(196, 232, 160, 1)",isActive:false},
          {position:5,name:'Huaca Name6',img:'assets/imgs/6.jpg',huacaStatus:6000,color:"rgba(96, 32, 160, 0.5)" ,hover: "rgba(96, 32, 160, 1)",isActive:false},
          {position:6,name:'Huaca Name7',img:'assets/imgs/7.jpg',huacaStatus:4500,color:"rgba(96, 232, 160, 0.5)" ,hover:"rgba(96, 232, 160, 1)",isActive:false},
          {position:7,name:'Huaca Name8',img:'assets/imgs/8.jpg',huacaStatus:9500,color:"rgba(186, 2, 160, 0.5)" ,hover:"rgba(186, 2, 160, 1)",isActive:false},
          {position:8,name:'Huaca Name9',img:'assets/imgs/9.jpg',huacaStatus:1500,color:"rgba(96, 22, 10, 0.5)" ,hover:"rgba(96, 22, 10, 1)",isActive:false},
          {position:9,name:'Huaca Name10',img:'assets/imgs/10.jpg',huacaStatus:1800,color:"rgba(96, 52, 70, 0.5)" ,hover:"rgba(96, 52, 70, 1)",isActive:false},
   ];
    
  constructor(public navCtrl: NavController, public navParams: NavParams,public baseMethod:BaseMethodsProvider) {
  }

  
  ionViewWillLoad() {
    this.nuevaSelectedHuaca = this.list[0];
    this.list.forEach(element => {
      this.huacaStatus.push(element.huacaStatus);
      this.huacaNames. push(element.name);
      this.huacaColors. push(element.color);
      this.huacaHovers. push(element.hover);
    });
    console.log('ionViewDidLoad HuacasPage');
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
