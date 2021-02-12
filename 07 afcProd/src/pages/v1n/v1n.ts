import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1nage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1n',
  templateUrl: 'v1n.html',
})
export class V1nPage {
  id_formulario_actual = 0;
  v1n_detalles = [];
  v14_01="";
  v14_02="";
  v14_03="";
  v14_04="";
  v14_05="";

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
    console.log('ionViewDidLoad V1nage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1nidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionV1n();
    });
  }

  cargarInformacionV1n(){

    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1n').then(data=>{
      this.v1n_detalles=data;
      this.v14_01 = this.v1n_detalles[0].valor;
      this.v14_02 = this.v1n_detalles[1].valor;
      this.v14_03 = this.v1n_detalles[2].valor;
      this.v14_04 = this.v1n_detalles[3].valor;
      this.v14_05 = this.v1n_detalles[4].valor;
    });
  }

  public guardarModuloV1n(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1n','v14_01',this.v14_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1n','v14_02',this.v14_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1n','v14_03',this.v14_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1n','v14_04',this.v14_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1n','v14_05',this.v14_05, ls_sql);
    this.presentToast('MÓDULO 13 INGRESOS Guardado',3000);
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
