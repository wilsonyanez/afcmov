import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the O2dPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-o2d',
  templateUrl: 'o2d.html',
})
export class O2dPage {
  id_organizacion_actual = 0;
  o2d_detalles = [];
  v01_01=false;
  v01_02=false;
  v01_03=false;
  v01_04=false;
  v01_05=false;
  v01_06=false;
  v01_07=false;
  v01_08=false;
  v01_09=false;
  v01_10=false;
  v01_11="";
  v01_12="";
  v01_13="";
  v01_14="";
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
    console.log('ionViewDidLoad O2dPage');
    this.storage.get("id_orga_actual").then(val=>{
      console.log("o2didform:"+val);
      this.id_organizacion_actual=val;
      this.cargarInformacionO2d();
    });
  }

  cargarInformacionO2d(){
    this.databaseProvider.listarDetallesPorOrganizacionyModulo(this.id_organizacion_actual,'o2d').then(data=>{
      this.o2d_detalles=data;
      this.v01_01 = (this.o2d_detalles[0].valor=="1")?true:false;
      this.v01_02 = (this.o2d_detalles[1].valor=="1")?true:false;
      this.v01_03 = (this.o2d_detalles[2].valor=="1")?true:false;
      this.v01_04 = (this.o2d_detalles[3].valor=="1")?true:false;
      this.v01_05 = (this.o2d_detalles[4].valor=="1")?true:false;
      this.v01_06 = (this.o2d_detalles[5].valor=="1")?true:false;
      this.v01_07 = (this.o2d_detalles[6].valor=="1")?true:false;
      this.v01_08 = (this.o2d_detalles[7].valor=="1")?true:false;
      this.v01_09 = (this.o2d_detalles[8].valor=="1")?true:false;
      this.v01_10 = (this.o2d_detalles[9].valor=="1")?true:false;
      this.v01_11 = this.o2d_detalles[10].valor;
      this.v01_12 = this.o2d_detalles[11].valor;
      this.v01_13 = this.o2d_detalles[12].valor;
      this.v01_14 = this.o2d_detalles[13].valor;
      this.v01_15 = this.o2d_detalles[14].valor;
      this.v01_16 = this.o2d_detalles[15].valor;
      this.v01_17 = this.o2d_detalles[16].valor;
      this.v01_18 = this.o2d_detalles[17].valor;
      this.v01_19 = this.o2d_detalles[18].valor;
      this.v01_20 = this.o2d_detalles[19].valor;
    });
  }

  public guardarModuloO2d(){
    var ls_sql="update organizacion_detv set valor=? where cod_orga=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_01',this.v01_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_02',this.v01_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_03',this.v01_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_04',this.v01_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_05',this.v01_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_06',this.v01_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_07',this.v01_07?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_08',this.v01_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_09',this.v01_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_10',this.v01_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_11',this.v01_11, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_12',this.v01_12, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_13',this.v01_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_14',this.v01_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_15',this.v01_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_16',this.v01_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_17',this.v01_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_18',this.v01_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_19',this.v01_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2d','v01_20',this.v01_20, ls_sql);
    this.presentToast('Modulo servicios de infraestructura ofrecidos a los socios de una organización (o2d) Guardado',3000);
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
