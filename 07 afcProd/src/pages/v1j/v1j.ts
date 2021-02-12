import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the v1jPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1j',
  templateUrl: 'v1j.html',
})
export class V1jPage {
  id_formulario_actual = 0;
  v1j_detalles = [];
  v10_01="";
  v10_02="";
  v10_03="";
  v10_04="";
  v10_05="";
  v10_06=false;
  v10_07="";
  v10_08=false;
  v10_09="";
  v10_10=false;
  v10_11="";
  v10_12=false;
  v10_13="";
  v10_14=false;
  v10_15="";
  v10_16=false;
  v10_17="";
  v10_18=false;
  v10_19="";

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
    console.log('ionViewDidLoad V1jPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1jidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionV1j();
    });
  }
  cargarInformacionV1j(){

    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1j').then(data=>{
      this.v1j_detalles=data;
      this.v10_01 = this.v1j_detalles[0].valor;
      this.v10_02 = this.v1j_detalles[1].valor;
      this.v10_03 = this.v1j_detalles[2].valor;
      this.v10_04 = this.v1j_detalles[3].valor;
      this.v10_05 = this.v1j_detalles[4].valor;
      this.v10_06 = (this.v1j_detalles[5].valor=="1")?true:false;
      this.v10_07 = this.v1j_detalles[6].valor;
      this.v10_08 = (this.v1j_detalles[7].valor=="1")?true:false;
      this.v10_09 = this.v1j_detalles[8].valor;
      this.v10_10 = (this.v1j_detalles[9].valor=="1")?true:false;
      this.v10_11 = this.v1j_detalles[10].valor;
      this.v10_12 = (this.v1j_detalles[11].valor=="1")?true:false;
      this.v10_13 = this.v1j_detalles[12].valor;
      this.v10_14 = (this.v1j_detalles[13].valor=="1")?true:false;
      this.v10_15 = this.v1j_detalles[14].valor;
      this.v10_16 = (this.v1j_detalles[15].valor=="1")?true:false;
      this.v10_17 = this.v1j_detalles[16].valor;
      this.v10_18 = (this.v1j_detalles[17].valor=="1")?true:false;
      this.v10_19 = this.v1j_detalles[18].valor;
    });


  }

  public guardarModuloV1j(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_01',this.v10_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_02',this.v10_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_03',this.v10_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_04',this.v10_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_05',this.v10_05, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_06',this.v10_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_07',this.v10_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_08',this.v10_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_09',this.v10_09, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_10',this.v10_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_11',this.v10_11, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_12',this.v10_12?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_13',this.v10_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_14',this.v10_14?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_15',this.v10_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_16',this.v10_16?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_17',this.v10_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_18',this.v10_18?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1j','v10_19',this.v10_19, ls_sql);
    this.presentToast('MODULO 9 ACCESO A CREDITO Y ASISTENCIA TECNICA Guardado',3000);
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
