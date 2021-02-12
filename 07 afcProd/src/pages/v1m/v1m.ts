import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1mPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1m',
  templateUrl: 'v1m.html',
})
export class V1mPage {
  id_formulario_actual = 0;
  v1m_detalles = [];
  v13_01 = false;
  v13_02 = false;
  v13_03 =false;
  v13_04 = false;
  v13_05 = false;
  v13_06 = false;
  v13_07 = "";
  v13_08 = false;
  v13_09 = false;
  v13_10 = false;
  v13_11 = false;
  v13_12 = false;
  v13_13 = false;
  v13_14 = false;
  v13_15 = false;
  v13_16 = "";
  v13_17 = false;
  v13_18 = false;
  v13_19 = false;
  v13_20 = false;
  v13_21 = false;
  v13_22 = "";
  v13_23 = false;
  v13_24 = false;
  v13_25 = false;
  v13_26 = false;
  v13_27 = false;
  v13_28 = false;
  v13_29 = false;
  v13_30 = "";
  v13_31 = false;
  v13_32 = false;
  v13_33 = false;
  v13_34 = false;
  v13_35 = false;
  v13_36 = "";
  v13_37 = false;
  v13_38 = false;
  v13_39 = false;
  v13_40 = false;
  v13_41 = "";
  v13_42 = false;
  v13_43 = false;
  v13_44 = false;
  v13_45 = false;
  v13_46 = false;
  v13_47 = "";

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
    console.log('ionViewDidLoad V1mPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1midform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionV1m();
    });
  }

  cargarInformacionV1m(){

    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1m').then(data=>{
      this.v1m_detalles=data;
      this.v13_01 = (this.v1m_detalles[0].valor=="1"?true:false);
      this.v13_02 = (this.v1m_detalles[1].valor=="1"?true:false);
      this.v13_03 = (this.v1m_detalles[2].valor=="1"?true:false);
      this.v13_04 = (this.v1m_detalles[3].valor=="1"?true:false);
      this.v13_05 = (this.v1m_detalles[4].valor=="1"?true:false);
      this.v13_06 = (this.v1m_detalles[5].valor=="1"?true:false);
      this.v13_07 = this.v1m_detalles[6].valor;
      this.v13_08 = (this.v1m_detalles[7].valor=="1"?true:false);
      this.v13_09 = (this.v1m_detalles[8].valor=="1"?true:false);
      this.v13_10 = (this.v1m_detalles[9].valor=="1"?true:false);
      this.v13_11 = (this.v1m_detalles[10].valor=="1"?true:false);
      this.v13_12 = (this.v1m_detalles[11].valor=="1"?true:false);
      this.v13_13 = (this.v1m_detalles[12].valor=="1"?true:false);
      this.v13_14 = (this.v1m_detalles[13].valor=="1"?true:false);
      this.v13_15 = (this.v1m_detalles[14].valor=="1"?true:false);
      this.v13_16 = this.v1m_detalles[15].valor;
      this.v13_17 = (this.v1m_detalles[16].valor=="1"?true:false);
      this.v13_18 = (this.v1m_detalles[17].valor=="1"?true:false);
      this.v13_19 = (this.v1m_detalles[18].valor=="1"?true:false);
      this.v13_20 = (this.v1m_detalles[19].valor=="1"?true:false);
      this.v13_21 = (this.v1m_detalles[20].valor=="1"?true:false);
      this.v13_22 = this.v1m_detalles[21].valor;
      this.v13_23 = (this.v1m_detalles[22].valor=="1"?true:false);
      this.v13_24 = (this.v1m_detalles[23].valor=="1"?true:false);
      this.v13_25 = (this.v1m_detalles[24].valor=="1"?true:false);
      this.v13_26 = (this.v1m_detalles[25].valor=="1"?true:false);
      this.v13_27 = (this.v1m_detalles[26].valor=="1"?true:false);
      this.v13_28 = (this.v1m_detalles[27].valor=="1"?true:false);
      this.v13_29 = (this.v1m_detalles[28].valor=="1"?true:false);
      this.v13_30 = this.v1m_detalles[29].valor;
      this.v13_31 = (this.v1m_detalles[30].valor=="1"?true:false);
      this.v13_32 = (this.v1m_detalles[31].valor=="1"?true:false);
      this.v13_33 = (this.v1m_detalles[32].valor=="1"?true:false);
      this.v13_34 = (this.v1m_detalles[33].valor=="1"?true:false);
      this.v13_35 = (this.v1m_detalles[34].valor=="1"?true:false);
      this.v13_36 = this.v1m_detalles[35].valor;
      this.v13_37 = (this.v1m_detalles[36].valor=="1"?true:false);
      this.v13_38 = (this.v1m_detalles[37].valor=="1"?true:false);
      this.v13_39 = (this.v1m_detalles[38].valor=="1"?true:false);
      this.v13_40 = (this.v1m_detalles[39].valor=="1"?true:false);
      this.v13_41 = this.v1m_detalles[40].valor;
      this.v13_42 = (this.v1m_detalles[41].valor=="1"?true:false);
      this.v13_43 = (this.v1m_detalles[42].valor=="1"?true:false);
      this.v13_44 = (this.v1m_detalles[43].valor=="1"?true:false);
      this.v13_45 = (this.v1m_detalles[44].valor=="1"?true:false);
      this.v13_46 = (this.v1m_detalles[45].valor=="1"?true:false);
      this.v13_47 = this.v1m_detalles[46].valor;
    });


  }

  public guardarModuloV1m(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_01',this.v13_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_02',this.v13_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_03',this.v13_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_04',this.v13_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_05',this.v13_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_06',this.v13_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_07',this.v13_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_08',this.v13_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_09',this.v13_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_10',this.v13_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_11',this.v13_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_12',this.v13_12?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_13',this.v13_13?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_14',this.v13_14?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_15',this.v13_15?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_16',this.v13_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_17',this.v13_17?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_18',this.v13_18?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_19',this.v13_19?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_20',this.v13_20?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_21',this.v13_21?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_22',this.v13_22, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_23',this.v13_23?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_24',this.v13_24?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_25',this.v13_25?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_26',this.v13_26?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_27',this.v13_27?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_28',this.v13_28?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_29',this.v13_29?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_30',this.v13_30, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_31',this.v13_31?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_32',this.v13_32?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_33',this.v13_33?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_34',this.v13_34?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_35',this.v13_35?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_36',this.v13_36, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_37',this.v13_37?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_38',this.v13_38?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_39',this.v13_39?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_40',this.v13_40?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_41',this.v13_41, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_42',this.v13_42?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_43',this.v13_43?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_44',this.v13_44?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_45',this.v13_45?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_46',this.v13_46?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1m','v13_47',this.v13_47, ls_sql);
    this.presentToast('Modulo 12 Guardado',3000);
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
