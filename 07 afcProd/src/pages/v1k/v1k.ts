import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1kPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1k',
  templateUrl: 'v1k.html',
})
export class V1kPage {
  id_formulario_actual = 0;
  v1k_detalles = [];
  v11_01=false;
  v11_02=false;
  v11_03=false;
  v11_04=false;
  v11_05=false;
  v11_06=false;
  v11_07=false;
  v11_08=false;
  v11_09=false;
  v11_10=false;
  v11_11=false;
  v11_12=false;
  v11_13="";
  v11_14="";
  v11_15="";
  v11_16="";
  v11_17="";
  v11_18="";
  v11_19="";
  v11_20="";

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
    console.log('ionViewDidLoad V1kPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1kidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionV1k();
    });
  }

  cargarInformacionV1k(){

    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1k').then(data=>{
      this.v1k_detalles=data;
      this.v11_01 = (this.v1k_detalles[0].valor=="1")?true:false;
      this.v11_02 = (this.v1k_detalles[1].valor=="1")?true:false;
      this.v11_03 = (this.v1k_detalles[2].valor=="1")?true:false;
      this.v11_04 = (this.v1k_detalles[3].valor=="1")?true:false;
      this.v11_05 = (this.v1k_detalles[4].valor=="1")?true:false;
      this.v11_06 = (this.v1k_detalles[5].valor=="1")?true:false;
      this.v11_07 = (this.v1k_detalles[6].valor=="1")?true:false;
      this.v11_08 = (this.v1k_detalles[7].valor=="1")?true:false;
      this.v11_09 = (this.v1k_detalles[8].valor=="1")?true:false;
      this.v11_10 = (this.v1k_detalles[9].valor=="1")?true:false;
      this.v11_11 = (this.v1k_detalles[10].valor=="1")?true:false;
      this.v11_12 = (this.v1k_detalles[11].valor=="1")?true:false;
      this.v11_13 = this.v1k_detalles[12].valor;
      this.v11_14 = this.v1k_detalles[13].valor;
      this.v11_15 = this.v1k_detalles[14].valor;
      this.v11_16 = this.v1k_detalles[15].valor;
      this.v11_17 = this.v1k_detalles[16].valor;
      this.v11_18 = this.v1k_detalles[17].valor;
      this.v11_19 = this.v1k_detalles[18].valor;
      this.v11_20 = this.v1k_detalles[19].valor;
    });

  }

  public guardarModuloV1k(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_01',this.v11_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_02',this.v11_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_03',this.v11_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_04',this.v11_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_05',this.v11_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_06',this.v11_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_07',this.v11_07?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_08',this.v11_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_09',this.v11_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_10',this.v11_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_11',this.v11_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_12',this.v11_12?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_13',this.v11_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_14',this.v11_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_15',this.v11_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_16',this.v11_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_17',this.v11_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_18',this.v11_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_19',this.v11_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1k','v11_20',this.v11_20, ls_sql);
    this.presentToast('MODULO 10 INFRAESTRUCTURA Guardado',3000);
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
