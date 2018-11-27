import { Component,ViewChild,NgZone } from '@angular/core';
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
  @ViewChild('sideScroll') sideScroll: any;
  huaca:any;
  // list=[img:11,22,33,44,55,11,22,33,44,55];
  list=[
      {img:11,name:'John'},
      {img:22,name:'Maria'},
      {img:33,name:'Julia'},
      {img:44,name:'Carlos'},
      // {img:55,name:'Mickel'},
      // {img:11,name:'Aria'},
      // {img:22,name:'Vic'},
      // {img:33,name:'Zoe'},
        ];
  constructor(public zone: NgZone,public params:NavParams,public navCtrl: NavController, public navParams: NavParams) {
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad HuacaDetailPage');
    console.log('UserId', this.params.get('params'));
    this.huaca = this.params.get('params');
    // this.huaca.img = this.sanitizer.bypassSecurityTrustUrl(this.huaca.img);
  }
  ionViewWillEnter(){
    let contentWidth = document.querySelector('#headerScroll .scroll-zoom-wrapper').clientWidth  -  document.querySelector('#headerScroll .scroll-content').clientWidth;

      if( document.querySelector('#headerScroll .scroll-zoom-wrapper').clientWidth <  document.querySelector('#headerScroll .scroll-content').clientWidth){
          document.getElementById('sideScroll').classList.add('activeRight');
      }
      // console.log('ancho: '+contentWidth);
      // console.log( document.getElementsByClassName('scroll-zoom-wrapper')[0].clientWidth);
      // console.log(document.getElementsByClassName('scroll-content')[0].clientWidth);
      
      this.sideScroll.addScrollEventListener((event:Event)=>{
         console.log(event);
         console.log(event.srcElement.scrollLeft);
         
         
         this.zone.run(() => {
              if(event.srcElement.scrollLeft <= 10){
                document.getElementById('sideScroll').classList.add('activeLeft');
                
              }else{
                console.log('entro');
                document.getElementById('sideScroll').classList.remove('activeLeft');
                if(event.srcElement.scrollLeft >= contentWidth ){
                  document.getElementById('sideScroll').classList.add('activeRight');
                }else{
                  document.getElementById('sideScroll').classList.remove('activeRight');
                }
               
              }
            });
              
      });
    
  }
}
