import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the E3ePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e3e',
  templateUrl: 'e3e.html',
})
export class E3ePage {

  id_establecimiento_actual=0;
  e3e_detalles=[];

  v02_01="";
  v02_02="";
  v02_03="";
  v02_04="";
  v02_05="";
  v02_06="";
  v02_07="";
  v02_08="";
  v02_09="";
  v02_10="";
  v02_11="";
  v02_12="";
  v02_13="";
  v02_14="";
  v02_15="";
  v02_16="";
  v02_17="";
  v02_18="";
  v02_19="";

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
    console.log('ionViewDidLoad E3ePage');
    this.storage.get("id_esta_actual").then(val=>{
      console.log("e3eidform:"+val);
      this.id_establecimiento_actual=val;
      this.cargarInformacionE3e();
    });
  }

  cargarInformacionE3e(){
    this.databaseProvider.listarDetallesPorEstablecimientoyModulo(this.id_establecimiento_actual,'e3e').then(data=>{
      this.e3e_detalles=data;
      this.v02_01 = this.e3e_detalles[0].valor;
      this.v02_02 = this.e3e_detalles[1].valor;
      this.v02_03 = this.e3e_detalles[2].valor;
      this.v02_04 = this.e3e_detalles[3].valor;
      this.v02_05 = this.e3e_detalles[4].valor;
      this.v02_06 = this.e3e_detalles[5].valor;
      this.v02_07 = this.e3e_detalles[6].valor;
      this.v02_08 = this.e3e_detalles[7].valor;
      this.v02_09 = this.e3e_detalles[8].valor;
      this.v02_10 = this.e3e_detalles[9].valor;
      this.v02_11 = this.e3e_detalles[10].valor;
      this.v02_12 = this.e3e_detalles[11].valor;
      this.v02_13 = this.e3e_detalles[12].valor;
      this.v02_14 = this.e3e_detalles[13].valor;
      this.v02_15 = this.e3e_detalles[14].valor;
      this.v02_16 = this.e3e_detalles[15].valor;
      this.v02_17 = this.e3e_detalles[16].valor;
      this.v02_18 = this.e3e_detalles[17].valor;
      this.v02_19 = this.e3e_detalles[18].valor;

    });
  }

  public guardarModuloE3e(){
    var ls_sql = "update establecimiento_detv set valor=? where cod_esta=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_01',this.v02_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_02',this.v02_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_03',this.v02_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_04',this.v02_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_05',this.v02_05, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_06',this.v02_06, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_07',this.v02_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_08',this.v02_08, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_09',this.v02_09, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_10',this.v02_10, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_11',this.v02_11, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_12',this.v02_12, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_13',this.v02_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_14',this.v02_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_15',this.v02_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_16',this.v02_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_17',this.v02_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_18',this.v02_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3e','v02_19',this.v02_19, ls_sql);
    this.presentToast('Modulo Datos de Volumen de compra a proveedores AFC (e3e) Guardado',3000);
  }

  presentToast(as_message:string,an_seconds:number) {
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
