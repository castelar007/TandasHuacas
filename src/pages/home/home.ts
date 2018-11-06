import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sliderHeight;
  list = [1,2,3,4,5,6,7,8 ,9 ,10];
  constructor(public navCtrl: NavController) {

  }
  ionViewWillEnter(){
    console.log('test');
    this.sliderHeight = document.querySelector('.sliderContainer').clientHeight - 76;
    console.log(this.sliderHeight);
    
  }
}
