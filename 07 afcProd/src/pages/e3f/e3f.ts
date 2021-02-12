import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the E3fPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e3f',
  templateUrl: 'e3f.html',
})
export class E3fPage {
  id_establecimiento_actual = 0;
  e3f_detalles = [];
  v03_01=false;
  v03_02=false;
  v03_03=false;
  v03_04=false;
  v03_05=false;
  v03_06=false;
  v03_07=false;
  v03_08=false;
  v03_09=false;
  v03_10="";
  v03_11="";
  v03_12="";
  v03_13="";
  v03_14="";
  v03_15="";
  v03_16="";
  v03_17="";
  v03_18="";
  v03_19="";
  v03_20="";

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
    console.log('ionViewDidLoad E3fPage');
    this.storage.get("id_esta_actual").then(val=>{
      console.log("e3fidform:"+val);
      this.id_establecimiento_actual=val;
      this.cargarInformacionE3f();
    });

  }

  cargarInformacionE3f(){
    this.databaseProvider.listarDetallesPorEstablecimientoyModulo(this.id_establecimiento_actual,'e3f').then(data=>{
      this.e3f_detalles=data;
      this.v03_01 = (this.e3f_detalles[0].valor=="1")?true:false;
      this.v03_02 = (this.e3f_detalles[1].valor=="1")?true:false;
      this.v03_03 = (this.e3f_detalles[2].valor=="1")?true:false;
      this.v03_04 = (this.e3f_detalles[3].valor=="1")?true:false;
      this.v03_05 = (this.e3f_detalles[4].valor=="1")?true:false;
      this.v03_06 = (this.e3f_detalles[5].valor=="1")?true:false;
      this.v03_07 = (this.e3f_detalles[6].valor=="1")?true:false;
      this.v03_08 = (this.e3f_detalles[7].valor=="1")?true:false;
      this.v03_09 = (this.e3f_detalles[8].valor=="1")?true:false;
      this.v03_10 = this.e3f_detalles[9].valor;
      this.v03_11 = this.e3f_detalles[10].valor;
      this.v03_12 = this.e3f_detalles[11].valor;
      this.v03_13 = this.e3f_detalles[12].valor;
      this.v03_14 = this.e3f_detalles[13].valor;
      this.v03_15 = this.e3f_detalles[14].valor;
      this.v03_16 = this.e3f_detalles[15].valor;
      this.v03_17 = this.e3f_detalles[16].valor;
      this.v03_18 = this.e3f_detalles[17].valor;
      this.v03_19 = this.e3f_detalles[18].valor;
      this.v03_20 = this.e3f_detalles[19].valor;
    });
  }

  public guardarModuloE3f(){
    var ls_sql="update establecimiento_detv set valor=? where cod_esta=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_01',this.v03_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_02',this.v03_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_03',this.v03_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_04',this.v03_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_05',this.v03_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_06',this.v03_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_07',this.v03_07?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_08',this.v03_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_09',this.v03_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_10',this.v03_10, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_11',this.v03_11, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_12',this.v03_12, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_13',this.v03_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_14',this.v03_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_15',this.v03_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_16',this.v03_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_17',this.v03_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_18',this.v03_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_19',this.v03_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3f','v03_20',this.v03_20, ls_sql);
    this.presentToast('Modulo Instalaciones y equipamiento (e3f) Guardado',3000);
  }

  presentToast(as_message: string, an_seconds:number) {
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
