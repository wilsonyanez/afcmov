import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ListadoPage } from '../listado/listado';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private databaseProvider:DatabaseProvider,private toastCtrl: ToastController) {

    this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo =>{
      if(listo){

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    var msg="";
    this.databaseProvider.validarUsuario(this.username,this.password).then(data =>{

      msg=data;
      if(msg==="ok"){
        this.navCtrl.push(ListadoPage);
      }else{
        this.presentToast(msg,3000);
        this.presentToast('Credenciales Incorrectas',3000);
      }

    });

  }

  presentToast(pmessage:string,pseconds:number) {
    let toast = this.toastCtrl.create({
      message: pmessage,
      duration: pseconds,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
