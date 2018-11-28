import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  labelTerminal;
  date: string;
  type: 'string'; 
  options// 'string' | 'js-date' | 'moment' | 'time' | 'object'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calendar2Page');
    this.options = {
      weekdays:['D', 'L', 'M', 'M', 'J', 'F', 'S'],
      monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DEC'],
      daysConfig:[
        {date: new Date(2018, 11,10 ),marked:true}
    ],
   
    }
  }
  onSelect($event) {
    console.log($event);
    this.labelTerminal = $event.time;
  }
}