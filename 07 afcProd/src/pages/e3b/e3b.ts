import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the E3bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e3b',
  templateUrl: 'e3b.html',
})
export class E3bPage {
  id_establecimiento_actual = 0;
  e3b_detalles = [];
  v01_01=false;
  v01_02=false;
  v01_03=false;
  v01_04=false;
  v01_05=false;
  v01_06=false;
  v01_07="";
  v01_08=false;
  v01_09=false;
  v01_10=false;
  v01_11=false;
  v01_12=false;
  v01_13=false;
  v01_14=false;
  v01_15="";
  v01_16="";
  v01_17="";
  v01_18="";
  v01_19="";
  v01_20="";

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
    console.log('ionViewDidLoad E3bPage');
    this.storage.get("id_esta_actual").then(val=>{
      console.log("e3bidform:"+val);
      this.id_establecimiento_actual=val;
      this.cargarInformacionE3b();
    });
  }

  cargarInformacionE3b(){
    this.databaseProvider.listarDetallesPorEstablecimientoyModulo(this.id_establecimiento_actual,'e3b').then(data=>{
      this.e3b_detalles=data;
      this.v01_01 = (this.e3b_detalles[0].valor=="1")?true:false;
      this.v01_02 = (this.e3b_detalles[1].valor=="1")?true:false;
      this.v01_03 = (this.e3b_detalles[2].valor=="1")?true:false;
      this.v01_04 = (this.e3b_detalles[3].valor=="1")?true:false;
      this.v01_05 = (this.e3b_detalles[4].valor=="1")?true:false;
      this.v01_06 = (this.e3b_detalles[5].valor=="1")?true:false;
      this.v01_07 = this.e3b_detalles[6].valor;
      this.v01_08 = (this.e3b_detalles[7].valor=="1")?true:false;
      this.v01_09 = (this.e3b_detalles[8].valor=="1")?true:false;
      this.v01_10 = (this.e3b_detalles[9].valor=="1")?true:false;
      this.v01_11 = (this.e3b_detalles[10].valor=="1")?true:false;
      this.v01_12 = (this.e3b_detalles[11].valor=="1")?true:false;
      this.v01_13 = (this.e3b_detalles[12].valor=="1")?true:false;
      this.v01_14 = (this.e3b_detalles[13].valor=="1")?true:false;
      this.v01_15 = this.e3b_detalles[14].valor;
      this.v01_16 = this.e3b_detalles[15].valor;
      this.v01_17 = this.e3b_detalles[16].valor;
      this.v01_18 = this.e3b_detalles[17].valor;
      this.v01_19 = this.e3b_detalles[18].valor;
      this.v01_20 = this.e3b_detalles[19].valor;
    });
  }

  public guardarModuloE3b(){
    var ls_sql="update establecimiento_detv set valor=? where cod_esta=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_01',this.v01_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_02',this.v01_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_03',this.v01_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_04',this.v01_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_05',this.v01_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_06',this.v01_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_07',this.v01_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_08',this.v01_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_09',this.v01_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_10',this.v01_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_11',this.v01_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_12',this.v01_12?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_13',this.v01_13?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_14',this.v01_14?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_15',this.v01_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_16',this.v01_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_17',this.v01_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_18',this.v01_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_19',this.v01_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3b','v01_20',this.v01_20, ls_sql);
    this.presentToast('Modulo caracterización de establecimientos (e3b) Guardado',3000);
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
