import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the O2gPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-o2g',
  templateUrl: 'o2g.html',
})
export class O2gPage {
  id_organizacion_actual = 0;
  o2g_detalles = [];
  v04_01=false;
  v04_02="";
  v04_03=false;
  v04_04="";
  v04_05=false;
  v04_06="";
  v04_07=false;
  v04_08="";
  v04_09=false;
  v04_10="";
  v04_11=false;
  v04_12="";
  v04_13=false;
  v04_14="";
  v04_15="";
  v04_16="";
  v04_17="";
  v04_18="";
  v04_19="";
  v04_20="";

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
    console.log('ionViewDidLoad O2gPage');
    this.storage.get("id_orga_actual").then(val=>{
      console.log("o2gidform:"+val);
      this.id_organizacion_actual=val;
      this.cargarInformacionO2g();
    });
  }

  cargarInformacionO2g(){
    this.databaseProvider.listarDetallesPorOrganizacionyModulo(this.id_organizacion_actual,'o2g').then(data=>{
      this.o2g_detalles=data;
      this.v04_01 = (this.o2g_detalles[0].valor=="1")?true:false;
      this.v04_02 = this.o2g_detalles[1].valor;
      this.v04_03 = (this.o2g_detalles[2].valor=="1")?true:false;
      this.v04_04 = this.o2g_detalles[3].valor;
      this.v04_05 = (this.o2g_detalles[4].valor=="1")?true:false;
      this.v04_06 = this.o2g_detalles[5].valor;
      this.v04_07 = (this.o2g_detalles[6].valor=="1")?true:false;
      this.v04_08 = this.o2g_detalles[7].valor;
      this.v04_09 = (this.o2g_detalles[8].valor=="1")?true:false;
      this.v04_10 = this.o2g_detalles[9].valor;
      this.v04_11 = (this.o2g_detalles[10].valor=="1")?true:false;
      this.v04_12 = this.o2g_detalles[13].valor;
      this.v04_13 = (this.o2g_detalles[13].valor=="1")?true:false;
      this.v04_14 = this.o2g_detalles[13].valor;
      this.v04_15 = this.o2g_detalles[14].valor;
      this.v04_16 = this.o2g_detalles[15].valor;
      this.v04_17 = this.o2g_detalles[16].valor;
      this.v04_18 = this.o2g_detalles[17].valor;
      this.v04_19 = this.o2g_detalles[18].valor;
      this.v04_20 = this.o2g_detalles[19].valor;
    });
  }

  public guardarModuloO2g(){
    var ls_sql="update organizacion_detv set valor=? where cod_orga=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_01',this.v04_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_02',this.v04_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_03',this.v04_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_04',this.v04_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_05',this.v04_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_06',this.v04_06, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_07',this.v04_07?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_08',this.v04_08, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_09',this.v04_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_10',this.v04_10, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_11',this.v04_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_12',this.v04_12, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_13',this.v04_13?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_14',this.v04_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_15',this.v04_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_16',this.v04_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_17',this.v04_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_18',this.v04_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_19',this.v04_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2g','v04_20',this.v04_20, ls_sql);
    this.presentToast('Modulo CERTIFICACIONES GRUPALES (o2g) Guardado',3000);
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
