
import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CreateHuacaPage } from '../../pages/create-huaca/create-huaca';

/*
  Generated class for the BaseMethodsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseMethodsProvider {
  createHuaca = CreateHuacaPage;
  constructor(public modalCtrl: ModalController) {
    console.log('Hello BaseMethodsProvider Provider');
  }
  modaLauncher(item){
    console.log("click");
    console.log(item);
    
    let loginPageModal = this.modalCtrl.create(item);
    loginPageModal.onDidDismiss(() => {
       
      console.log('dissmiss');
      
    //on dissmiss
    });
    loginPageModal.present();
  }
}