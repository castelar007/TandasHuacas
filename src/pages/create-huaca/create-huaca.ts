import { Component } from '@angular/core';
import {IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
// import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';
import {  ModalController } from 'ionic-angular';
// import { ContactsPage } from '../../contacts/contacts';
// import { BigDataServiceProvider } from '../../../services/big-data-service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-create-huaca',
  templateUrl: 'create-huaca.html',
})
export class CreateHuacaPage {
 
  
  
 
  public todo : FormGroup;
  constructor(private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams, 
    private loadingCtrl: LoadingController, private toastCtrl: ToastController, private modal:ModalController) {
   
    this.todo = this.formBuilder.group({
      
      username:['', Validators.compose([Validators.required])],
      monto:['', Validators.compose([Validators.required])],
      cuota:['', Validators.compose([Validators.required])],
      recurencia:['', Validators.compose([Validators.required])],
      tiempo:['', Validators.compose([Validators.required])],
      debito:['', Validators.compose([Validators.required])],
      myDate:['', Validators.compose([Validators.required])],
      tipoCalculo:['', Validators.compose([Validators.required])],
      // cuenta:['', Validators.compose([Validators.required])],

    });
    
  }
 
}
