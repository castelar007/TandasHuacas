import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sliderHeight;
  list = [1,2,3,4,5,6,7,8 ,9 ,10];
  // list = [];
  huacasCount = 2 ;
  tandasCount = 0;
  calendarPage =CalendarPage;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController) {

  }
  ionViewDidEnter(){
    console.log('test');
    this.sliderHeight = document.querySelector('.sliderContainer').clientHeight - 76;
    console.log(this.sliderHeight);
    
  }
  presentModal(page) {
    let profileModal = this.modalCtrl.create(page);
    profileModal.onDidDismiss(data => {
      console.log('dissmiss');
    });
    profileModal.present();
  }
  
}
