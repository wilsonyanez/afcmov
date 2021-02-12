import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the M1fPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m1f',
  templateUrl: 'm1f.html',
})
export class M1fPage {
  id_formulario_actual = 0;
  m1f_detalles = [];
  v02_01=false;
  v02_02=false;
  v02_03=false;
  v02_04=false;
  v02_05=false;
  v02_06=false;
  v02_07=false;
  v02_08=false;
  v02_09=false;
  v02_10=false;
  v02_11=false;
  v02_12=false;
  v02_13=false;
  v02_14=false;
  v02_15=false;
  v02_16=false;
  v02_17=false;
  v02_18=false;
  v02_19="";
  v02_20="";

  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public viewCtrl: ViewController,
  private storage: Storage,
  private databaseProvider:DatabaseProvider,
  private toastCtrl: ToastController ) {
    this.viewCtrl = this.navParams.get('viewCtrl');
    this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo =>{
      if(listo){

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad M1fPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("m1fidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionM1f();
    });
  }

  cargarInformacionM1f(){
    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'m1f').then(data=>{
      this.m1f_detalles=data;
      this.v02_01 = (this.m1f_detalles[0].valor=="1")?true:false;
      this.v02_02 = (this.m1f_detalles[1].valor=="1")?true:false;
      this.v02_03 = (this.m1f_detalles[2].valor=="1")?true:false;
      this.v02_04 = (this.m1f_detalles[3].valor=="1")?true:false;
      this.v02_05 = (this.m1f_detalles[4].valor=="1")?true:false;
      this.v02_06 = (this.m1f_detalles[5].valor=="1")?true:false;
      this.v02_07 = (this.m1f_detalles[6].valor=="1")?true:false;
      this.v02_08 = (this.m1f_detalles[7].valor=="1")?true:false;
      this.v02_09 = (this.m1f_detalles[8].valor=="1")?true:false;
      this.v02_10 = (this.m1f_detalles[9].valor=="1")?true:false;
      this.v02_11 = (this.m1f_detalles[10].valor=="1")?true:false;
      this.v02_12 = (this.m1f_detalles[11].valor=="1")?true:false;
      this.v02_13 = (this.m1f_detalles[12].valor=="1")?true:false;
      this.v02_14 = (this.m1f_detalles[13].valor=="1")?true:false;
      this.v02_15 = (this.m1f_detalles[14].valor=="1")?true:false;
      this.v02_16 = (this.m1f_detalles[15].valor=="1")?true:false;
      this.v02_17 = (this.m1f_detalles[16].valor=="1")?true:false;
      this.v02_18 = (this.m1f_detalles[17].valor=="1")?true:false;
      this.v02_19 = this.m1f_detalles[18].valor;
      this.v02_20 = this.m1f_detalles[19].valor;
    });
  }

  public guardarModulo1f(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_01',this.v02_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_02',this.v02_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_03',this.v02_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_04',this.v02_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_05',this.v02_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_06',this.v02_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_07',this.v02_07?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_08',this.v02_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_09',this.v02_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_10',this.v02_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_11',this.v02_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_12',this.v02_12?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_13',this.v02_13?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_14',this.v02_14?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_15',this.v02_15?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_16',this.v02_16?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_17',this.v02_17?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_18',this.v02_18?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_19',this.v02_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1f','v02_20',this.v02_20, ls_sql);
    this.presentToast('Modulo Actividades del productor (m1f) Guardado',3000);
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
