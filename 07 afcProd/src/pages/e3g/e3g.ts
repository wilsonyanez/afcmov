import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the E3gPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e3g',
  templateUrl: 'e3g.html',
})
export class E3gPage {

  id_establecimiento_actual=0;
  e3g_detalles=[];

  v04_01=false;
  v04_02=false;
  v04_03=false;
  v04_04=false;
  v04_05=false;
  v04_06=false;
  v04_07="";
  v04_08=false;
  v04_09="";
  v04_10="";
  v04_11=false;
  v04_12=false;
  v04_13=false;
  v04_14=false;
  v04_15="";
  v04_16=false;
  v04_17=false;
  v04_18=false;
  v04_19=false;
  v04_20=false;
  v04_21="";

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
    console.log('ionViewDidLoad E3gPage');
    this.storage.get("id_esta_actual").then(val=>{
      console.log("e3gidform:"+val);
      this.id_establecimiento_actual=val;
      this.cargarInformacionE3g();
    });
  }

  cargarInformacionE3g(){
    this.databaseProvider.listarDetallesPorEstablecimientoyModulo(this.id_establecimiento_actual,'e3g').then(data=>{
      this.e3g_detalles=data;
      this.v04_01 = (this.e3g_detalles[0].valor=="1")?true:false;
      this.v04_02 = (this.e3g_detalles[1].valor=="1")?true:false;
      this.v04_03 = (this.e3g_detalles[2].valor=="1")?true:false;
      this.v04_04 = (this.e3g_detalles[3].valor=="1")?true:false;
      this.v04_05 = (this.e3g_detalles[4].valor=="1")?true:false;
      this.v04_06 = (this.e3g_detalles[5].valor=="1")?true:false;
      this.v04_07 = this.e3g_detalles[6].valor;
      this.v04_08 = (this.e3g_detalles[7].valor=="1")?true:false;
      this.v04_09 = this.e3g_detalles[8].valor;
      this.v04_10 = this.e3g_detalles[9].valor;
      this.v04_11 = (this.e3g_detalles[10].valor=="1")?true:false;
      this.v04_12 = (this.e3g_detalles[11].valor=="1")?true:false;
      this.v04_13 = (this.e3g_detalles[12].valor=="1")?true:false;
      this.v04_14 = (this.e3g_detalles[13].valor=="1")?true:false;
      this.v04_15 = this.e3g_detalles[14].valor;
      this.v04_16 = (this.e3g_detalles[15].valor=="1")?true:false;
      this.v04_17 = (this.e3g_detalles[16].valor=="1")?true:false;
      this.v04_18 = (this.e3g_detalles[17].valor=="1")?true:false;
      this.v04_19 = (this.e3g_detalles[18].valor=="1")?true:false;
      this.v04_20 = (this.e3g_detalles[19].valor=="1")?true:false;
      this.v04_21 = this.e3g_detalles[20].valor;

    });
  }

  public guardarModuloE3g(){
    var ls_sql = "update establecimiento_detv set valor=? where cod_esta=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_01',this.v04_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_02',this.v04_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_03',this.v04_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_04',this.v04_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_05',this.v04_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_06',this.v04_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_07',this.v04_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_08',this.v04_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_09',this.v04_09, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_10',this.v04_10, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_11',this.v04_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_12',this.v04_12?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_13',this.v04_13?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_14',this.v04_14?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_15',this.v04_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_16',this.v04_16?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_17',this.v04_17?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_18',this.v04_18?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_19',this.v04_19?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_20',this.v04_20?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3g','v04_21',this.v04_21, ls_sql);
    this.presentToast('Modulo FORMA DE ACUERDO CON PROVEEDORES (e3g) Guardado',3000);
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
