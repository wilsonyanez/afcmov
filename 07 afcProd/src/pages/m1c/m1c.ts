import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the M1cPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m1c',
  templateUrl: 'm1c.html',
})
export class M1cPage {
  id_formulario_actual=0;
  m1c_detalles=[];

  v01_01="";
  v01_02="";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    private databaseProvider:DatabaseProvider,
    private toastCtrl: ToastController) {

    this.viewCtrl = this.navParams.get('viewCtrl');
    this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo =>{
      if(listo){

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad M1cPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("m1cidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionM1c();
    });
  }

  cargarInformacionM1c(){
    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'m1c').then(data=>{
      this.m1c_detalles=data;
      this.v01_01 = this.m1c_detalles[0].valor;
      this.v01_02 = this.m1c_detalles[1].valor;
    });
  }

  public guardarModulo1c(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1c','v01_01',this.v01_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1c','v01_02',this.v01_02, ls_sql);
    this.presentToast('MODULO 1 TRABAJO REMUNERADO (m1c) Guardado',3000);
  }

  presentToast(as_message:string, an_seconds:number) {
    let toast = this.toastCtrl.create({
      message: as_message,
      duration: an_seconds,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
