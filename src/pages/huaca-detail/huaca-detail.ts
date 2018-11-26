import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HuacaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-huaca-detail',
  templateUrl: 'huaca-detail.html',
})
export class HuacaDetailPage {
  huaca:any;
  // list=[img:11,22,33,44,55,11,22,33,44,55];
  list=[
      {img:11,name:'John'},
      {img:22,name:'Maria'},
      {img:33,name:'Julia'},
      {img:44,name:'Carlos'},
      {img:55,name:'Mickel'},
      {img:11,name:'Aria'},
      {img:22,name:'Vic'},
      {img:33,name:'Zoe'},
        ];
  constructor(public params:NavParams,public navCtrl: NavController, public navParams: NavParams) {
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad HuacaDetailPage');
    console.log('UserId', this.params.get('params'));
    this.huaca = this.params.get('params');
    // this.huaca.img = this.sanitizer.bypassSecurityTrustUrl(this.huaca.img);
  }

}
