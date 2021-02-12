import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1ePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1e',
  templateUrl: 'v1e.html',
})
export class V1ePage {

  id_formulario_actual=0;
  v1e_detalles=[];

  v07_01 = "";
  v07_02 = "";
  v07_03 = "";
  v07_04 = "";
  v07_05 = "";

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
    console.log('ionViewDidLoad V1ePage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1eidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionV1e();
    });
  }

  cargarInformacionV1e(){
    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1e').then(data=>{
      this.v1e_detalles=data;
      this.v07_01 = this.v1e_detalles[0].valor;
      this.v07_02 = this.v1e_detalles[1].valor;
      this.v07_03 = this.v1e_detalles[2].valor;
      this.v07_04 = this.v1e_detalles[3].valor;
      this.v07_05 = this.v1e_detalles[4].valor;
    });
  }

  public guardarModuloV1e(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1e','v07_01',this.v07_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1e','v07_02',this.v07_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1e','v07_03',this.v07_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1e','v07_04',this.v07_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1e','v07_05',this.v07_05, ls_sql);
    this.presentToast('Modulo 4 - TIPOS DE PRODUCCION Guardado',3000);
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
