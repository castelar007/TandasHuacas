
import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CreateHuacaPage } from '../../pages/create-huaca/create-huaca';
import * as moment from 'moment';

/*
  Generated class for the BaseMethodsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseMethodsProvider {
  createHuaca = CreateHuacaPage;
  huacas = [
    {position:0,name:'Huaca Name1',img:'assets/imgs/1.jpg',huacaStatus:1500,color:"rgba(239, 80, 24, 0.5)",hover: "rgba(255, 121, 0, 1)",isActive:true,date: new Date(2018, 11,10 ),marked:true,amount:888888888.88,fee:8888.88,type:'Huaca Compartida' },
    {position:1,name:'Huaca Name2',img:'assets/imgs/2.jpg',huacaStatus:500,color:"rgba(252,214,58,0.5)" ,hover:"rgba(252,214,58,1)",isActive:false,date: new Date(2018, 11,3 ),marked:true,amount:888888888.88,fee:8888.88,type:'Ahorro Programado'},
    {position:2,name:'Huaca Name3',img:'assets/imgs/3.jpg',huacaStatus:2500,color:"rgba(209,204,17, 0.5)" ,hover: "rgba(209,204,17,1)",isActive:false ,date: new Date(2019, 0,3 ),marked:true,amount:888888888.88,fee:8888.88,type:'Ahorro Programado'},
    {position:3,name:'Huaca Name4',img:'assets/imgs/4.jpg',huacaStatus:3500,color:"rgba(105,242,200, 0.5)" ,hover: "rgba(105,242,200, 1)",isActive:false ,date: new Date(2018, 11,2 ),marked:true,amount:888888888.88,fee:8888.88,type:'Ahorro Programado'},
    {position:4,name:'Huaca Name5',img:'assets/imgs/5.jpg',huacaStatus:1300,color:"rgba(92,157,234, 0.5)",hover: "rgba(92,157,234, 1)",isActive:false,date: new Date(2018, 11,28 ),marked:true,amount:888888888.88,fee:8888.88,type:'Ahorro Programado'},
    {position:5,name:'Huaca Name6',img:'assets/imgs/6.jpg',huacaStatus:6000,color:"rgba(105, 61, 226, 0.5)" ,hover: "rgba(105, 61, 226, 1)",isActive:false,date: new Date(2018, 11,22 ),marked:true,amount:888888888.88,fee:8888.88,type:'Ahorro Programado'},
    {position:6,name:'Huaca Name7',img:'assets/imgs/7.jpg',huacaStatus:4500,color:"rgba(53, 22, 114, 0.5)" ,hover:"rgba(53, 22, 114, 1)",isActive:false,date: new Date(2018, 11,30 ),marked:true,amount:888888888.88,fee:8888.88,type:'Ahorro Programado'},
    {position:7,name:'Huaca Name8',img:'assets/imgs/8.jpg',huacaStatus:9500,color:"rgba(171, 64, 211, 0.5)" ,hover:"rgba(171, 64, 211, 1)",isActive:false,date: new Date(2018, 11,30 ),marked:true,amount:888888888.88,fee:8888.88,type:'Huaca Compartida'},
    {position:8,name:'Huaca Name9',img:'assets/imgs/9.jpg',huacaStatus:1500,color:"rgba(247, 82, 82, 0.5)" ,hover:"rgba(247, 82, 82, 1)",isActive:false ,date: new Date(2018, 11,30 ),marked:true,amount:888888888.88,fee:8888.88,type:'Huaca Compartida'},
    {position:9,name:'Huaca Name10',img:'assets/imgs/10.jpg',huacaStatus:1800,color:"rgba(76, 114, 110, 0.5)" ,hover:"rgba(76, 114, 110, 1)",isActive:false,date: new Date(2018, 11,30 ),marked:true,amount:888888888.88,fee:8888.88,type:'Huaca Compartida'},
  ];
  constructor(public modalCtrl: ModalController) {
    console.log('Hello BaseMethodsProvider Provider');
  }
  modaLauncher(item,params){
    console.log("click");
    console.log(item);
    
    let loginPageModal = this.modalCtrl.create(item , { params: params });
    loginPageModal.onDidDismiss(() => {
       
      console.log('dissmiss');
      
    //on dissmiss
    });
    loginPageModal.present();
  }
  huacaFinder(date){
    //devolver array de huacas
    console.log(moment(date));
    
    
    
    let huacaArray = [];
    this.huacas.forEach(huaca => {
      console.log(moment(huaca.date));
      if(moment(date).isSame(huaca.date, 'day')){
        huacaArray.push(huaca);
        
      }
    });
    return huacaArray; 
  }
}