import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseMethodsProvider } from '../../providers/base-methods/base-methods';
import * as moment from 'moment';
import { HuacaDetailPage } from '../huaca-detail/huaca-detail';
/**
 * Generated class for the Calendar2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar2',
  templateUrl: 'calendar2.html',
})
export class Calendar2Page {
  huacasArray=[];
  date: string;
  type: 'string'; 
  options// 'string' | 'js-date' | 'moment' | 'time' | 'object'
  daysConfig = [];
  huacaDetail = HuacaDetailPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public baseMethod:BaseMethodsProvider) {
  }

  ionViewDidLoad() {
    this.onSelect({time:moment.now()});
    this.baseMethod.huacas.forEach(element => {
        this.daysConfig.push(element);
    }); 
    moment.locale('es');
    console.log('ionViewDidLoad Calendar2Page');
    this.options = {
      weekdays:['D', 'L', 'M', 'M', 'J', 'F', 'S'],
      showToggleButtons:false,
      showMonthPicker:false,
      monthFormat:'MMMM YYYY',
      daysConfig:this.daysConfig,
   
    }
    
  }
  onSelect($event) {
    console.log($event);
    let pickeDate = new Date($event.time);
    this.huacasArray = this.baseMethod.huacaFinder(pickeDate);
    console.log(this.huacasArray);
    
  }
  onMonthChange($event){
    // console.log($event);
    let element = document.getElementById('calendario');
          element.classList.remove("animar");
          void element.offsetWidth;
          element.classList.add("animar");
    
  }

}
