import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { LoaderToastProvider } from '../../providers/loader-toast/loader-toast';
import { HttpProvider } from '../../providers/http/http';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  body = {
    email: "test@test.test",
    pass: "testpassionic",
  }
  public todo : FormGroup;
  constructor(private http:HttpProvider,private loader:LoaderToastProvider,private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.todo = this.formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password:['', Validators.compose([Validators.required])],
    });

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    console.log('te estas Logeando');
    this.loader.presentLoading();
    this.http.login().then((response)=>{
      console.log(response);
      this.loader.loadingDismiss();
      this.navCtrl.setRoot(TabsPage);
    },(error)=>{})
  }

}
