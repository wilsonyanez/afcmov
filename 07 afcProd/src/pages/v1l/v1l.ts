import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1lPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1l',
  templateUrl: 'v1l.html',
})
export class V1lPage {

  id_formulario_actual = 0;
  v1l_detalles = [];
  v12_01 = false;
  v12_02 = false;
  v12_03 = false;
  v12_04 = false;
  v12_05 = false;
  v12_06 = false;
  v12_07 = false;
  v12_08 = false;
  v12_09 = false;
  v12_10 = false;
  v12_11 = false;
  v12_12 = false;
  v12_13 = false;
  v12_14 = false;
  v12_15 = false;
  v12_16 = false;
  v12_17 = false;
  v12_18 = false;
  v12_19 = false;
  v12_20 = false;
  v12_21 = false;
  v12_22 = false;
  v12_23 = false;
  v12_24 = false;
  v12_25 = false;
  v12_26 = false;
  v12_27 = false;
  v12_28 = false;
  v12_29 = false;
  v12_30 = false;
  v12_31 = false;
  v12_32 = false;
  v12_33 = false;
  v12_34 = false;
  v12_35 = false;
  v12_36 = false;

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
    console.log('ionViewDidLoad V1lPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1lidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionV1l();
    });
  }

  cargarInformacionV1l(){

    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1l').then(data=>{
      this.v1l_detalles=data;
      this.v12_01 = (this.v1l_detalles[0].valor=="1")?true:false;
      this.v12_02 = (this.v1l_detalles[1].valor=="1")?true:false;
      this.v12_03 = (this.v1l_detalles[2].valor=="1")?true:false;
      this.v12_04 = (this.v1l_detalles[3].valor=="1")?true:false;
      this.v12_05 = (this.v1l_detalles[4].valor=="1")?true:false;
      this.v12_06 = (this.v1l_detalles[5].valor=="1")?true:false;
      this.v12_07 = (this.v1l_detalles[6].valor=="1")?true:false;
      this.v12_08 = (this.v1l_detalles[7].valor=="1")?true:false;
      this.v12_09 = (this.v1l_detalles[8].valor=="1")?true:false;
      this.v12_10 = (this.v1l_detalles[9].valor=="1")?true:false;
      this.v12_11 = (this.v1l_detalles[10].valor=="1")?true:false;
      this.v12_12 = (this.v1l_detalles[11].valor=="1")?true:false;
      this.v12_13 = (this.v1l_detalles[12].valor=="1")?true:false;
      this.v12_14 = (this.v1l_detalles[13].valor=="1")?true:false;
      this.v12_15 = (this.v1l_detalles[14].valor=="1")?true:false;
      this.v12_16 = (this.v1l_detalles[15].valor=="1")?true:false;
      this.v12_17 = (this.v1l_detalles[16].valor=="1")?true:false;
      this.v12_18 = (this.v1l_detalles[17].valor=="1")?true:false;
      this.v12_19 = (this.v1l_detalles[18].valor=="1")?true:false;
      this.v12_20 = (this.v1l_detalles[19].valor=="1")?true:false;
      this.v12_21 = (this.v1l_detalles[20].valor=="1")?true:false;
      this.v12_22 = (this.v1l_detalles[21].valor=="1")?true:false;
      this.v12_23 = (this.v1l_detalles[22].valor=="1")?true:false;
      this.v12_24 = (this.v1l_detalles[23].valor=="1")?true:false;
      this.v12_25 = (this.v1l_detalles[24].valor=="1")?true:false;
      this.v12_26 = (this.v1l_detalles[25].valor=="1")?true:false;
      this.v12_27 = (this.v1l_detalles[26].valor=="1")?true:false;
      this.v12_28 = (this.v1l_detalles[27].valor=="1")?true:false;
      this.v12_29 = (this.v1l_detalles[28].valor=="1")?true:false;
      this.v12_30 = (this.v1l_detalles[29].valor=="1")?true:false;
      this.v12_31 = (this.v1l_detalles[30].valor=="1")?true:false;
      this.v12_32 = (this.v1l_detalles[31].valor=="1")?true:false;
      this.v12_33 = (this.v1l_detalles[32].valor=="1")?true:false;
      this.v12_34 = (this.v1l_detalles[33].valor=="1")?true:false;
      this.v12_35 = (this.v1l_detalles[34].valor=="1")?true:false;
      this.v12_36 = (this.v1l_detalles[35].valor=="1")?true:false;
    });
  }

  public guardarModuloV1l(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_01',this.v12_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_02',this.v12_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_03',this.v12_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_04',this.v12_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_05',this.v12_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_06',this.v12_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_07',this.v12_07?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_08',this.v12_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_09',this.v12_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_10',this.v12_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_11',this.v12_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_12',this.v12_12?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_13',this.v12_13?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_14',this.v12_14?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_15',this.v12_15?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_16',this.v12_16?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_17',this.v12_17?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_18',this.v12_18?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_19',this.v12_19?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_20',this.v12_20?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_21',this.v12_21?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_22',this.v12_22?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_23',this.v12_23?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_25',this.v12_25?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_24',this.v12_24?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_26',this.v12_26?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_27',this.v12_27?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_28',this.v12_28?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_29',this.v12_29?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_30',this.v12_30?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_31',this.v12_31?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_32',this.v12_32?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_33',this.v12_33?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_34',this.v12_34?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_35',this.v12_35?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1l','v12_36',this.v12_36?"1":"0", ls_sql);
    this.presentToast('MODULO 11 EQUIPAMIENTOS Guardado',3000);
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
