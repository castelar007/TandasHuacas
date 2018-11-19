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
  myDate = new Date();
  minDate:string = this.myDate.toISOString();
  maxDate = new Date(this.myDate.getTime() + (30 * (1000 * 60 * 60 * 24))).toISOString();
  listOfContacts:any []=[];
  // contactsPage = ContactsPage;
  loading: any;
  huacaName: string;
  loginData = {};
  typeHuaca = { '1': 'Ahorro Programado', '2': 'Huaca Compartida' }
  testRadioOpen = false;
  testRadioResult: any;
  cuota: number;
  monto: number;
  calcMode = true;
  tiempo = 3;
  tiempos = [3, 6, 12];
  debitos = ['Automático', 'Manual'];
  recurencia = { value: 1, holder: "Mensual" };
  recurencias = [{ value: 0.5, holder: "Quincenal" }, { value: 1, holder: "Mensual" }, { value: 3, holder: "Trimestral" }];
  
  
  tipoCalculo:string;
  public todo : FormGroup;
  constructor(private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams, 
    private loadingCtrl: LoadingController, private toastCtrl: ToastController, private modal:ModalController) {
    this.huacaName = this.typeHuaca[this.navParams.get('TypeHuaca')];
    this.tipoCalculo = 'monto';
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
  ionViewDidEnter(){
    // this.bigData.getAccounts();
  }
  // crearHuaca() {
  //   this.showLoader();
  //   this.authService.createHuaca(this.todo.value).then((result) => {
  //     console.log('result:'+result);
      
      
  //     this.loading.dismiss();
  //     this.navCtrl.pop();
  //   }, (err) => {
  //     console.log('error:'+err);
  //     this.loading.dismiss();
  //     this.navCtrl.pop();

  //   });
  // }
  //simple loader funtion
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  onChangeCuota() {
    this.monto = ((this.cuota * this.tiempo) / this.recurencia.value)*(1 + this.listOfContacts.length);

  }
  onChangeMonto() {

    this.cuota = ((this.monto * this.recurencia.value) / this.tiempo)/(1 + this.listOfContacts.length);

  }



  onChangeRecurrenciaTiempo() {
    if (this.tipoCalculo == 'monto') {
      console.log('Monto');
      this.onChangeMonto();
    } else {
      console.log('Cuota');
      this.onChangeCuota();
    }

    //this.monto = (this.cuota*this.tiempo)/this.recurencia.value;
    //this.cuota = (this.monto*this.recurencia.value)/this.tiempo;   
  }
  onAddContacts(view:any){
    // this.showLoader();
    let contactsModal = this.modal.create(view);
    contactsModal.onDidDismiss(data => {
      console.log(data);
      if(data != null)
      data.forEach(element => {
    
        if(!this.listOfContacts.find(function buscarContacto(obj){
          if(obj.id === element.id)
            return true;
        }))
        this.listOfContacts.push(element);
      });
      this.onChangeRecurrenciaTiempo();
    });
    contactsModal.present();
    // this.loading.dismiss();
  }
  onRemoveContacts(contact){
    document.getElementById('boton'+contact.id).classList.toggle('pickedContactReverse');
   
   
   
  
   document.getElementById('boton'+contact.id).addEventListener("webkitTransitionEnd", ()=> {
    this.listOfContacts.splice(this.listOfContacts.indexOf(contact),1);
    this.onChangeRecurrenciaTiempo();
   });




    
    
  }
}
