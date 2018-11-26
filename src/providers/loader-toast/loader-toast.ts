import { Injectable } from '@angular/core';
import { LoadingController,ToastController } from 'ionic-angular';

/*
  Generated class for the LoaderToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderToastProvider {

  loading:any;
  timeOut:any;
  constructor(public loadingCtrl: LoadingController, public toastCtrl:ToastController) {
    console.log('Hello LoaderToast Provider');
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Cargando...'

    });

    this.timer();
    this.loading.present();
  }

  timer(){
    this.timeOut = setTimeout(() => {
      this.loading.dismiss();
      this.presentToast('Error: expiró tiempo de carga');
    }, 7000);
  } 

  loadingDismiss(){
    clearTimeout(this.timeOut);
    this.loading.dismiss();
  }
  
  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'bot',
      cssClass: 'toastClass'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
