import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the O2ePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-o2e',
  templateUrl: 'o2e.html',
})
export class O2ePage {
  id_organizacion_actual = 0;
  o2e_detalles = [];
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
  v02_14="";
  v02_15="";
  v02_16="";
  v02_17="";
  v02_18="";
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
    console.log('ionViewDidLoad O2ePage');
    this.storage.get("id_orga_actual").then(val=>{
      console.log("o2eidform:"+val);
      this.id_organizacion_actual=val;
      this.cargarInformacionO2e();
    });
  }

  cargarInformacionO2e(){
    this.databaseProvider.listarDetallesPorOrganizacionyModulo(this.id_organizacion_actual,'o2e').then(data=>{
      this.o2e_detalles=data;
      this.v02_01 = (this.o2e_detalles[0].valor=="1")?true:false;
      this.v02_02 = (this.o2e_detalles[1].valor=="1")?true:false;
      this.v02_03 = (this.o2e_detalles[2].valor=="1")?true:false;
      this.v02_04 = (this.o2e_detalles[3].valor=="1")?true:false;
      this.v02_05 = (this.o2e_detalles[4].valor=="1")?true:false;
      this.v02_06 = (this.o2e_detalles[5].valor=="1")?true:false;
      this.v02_07 = (this.o2e_detalles[6].valor=="1")?true:false;
      this.v02_08 = (this.o2e_detalles[7].valor=="1")?true:false;
      this.v02_09 = (this.o2e_detalles[8].valor=="1")?true:false;
      this.v02_10 = (this.o2e_detalles[9].valor=="1")?true:false;
      this.v02_11 = (this.o2e_detalles[10].valor=="1")?true:false;
      this.v02_12 = (this.o2e_detalles[11].valor=="1")?true:false;
      this.v02_13 = (this.o2e_detalles[12].valor=="1")?true:false;
      this.v02_14 = this.o2e_detalles[13].valor;
      this.v02_15 = this.o2e_detalles[14].valor;
      this.v02_16 = this.o2e_detalles[15].valor;
      this.v02_17 = this.o2e_detalles[16].valor;
      this.v02_18 = this.o2e_detalles[17].valor;
      this.v02_19 = this.o2e_detalles[18].valor;
      this.v02_20 = this.o2e_detalles[19].valor;
    });
  }

  public guardarModuloO2e(){
    var ls_sql="update organizacion_detv set valor=? where cod_orga=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_01',this.v02_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_02',this.v02_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_03',this.v02_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_04',this.v02_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_05',this.v02_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_06',this.v02_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_07',this.v02_07?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_08',this.v02_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_09',this.v02_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_10',this.v02_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_11',this.v02_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_12',this.v02_12?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_13',this.v02_13?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_14',this.v02_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_15',this.v02_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_16',this.v02_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_17',this.v02_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_18',this.v02_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_19',this.v02_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2e','v02_20',this.v02_20, ls_sql);
    this.presentToast('Modulo servicios de transporte ofrecidos a los socios de una organización (o2e) Guardado',3000);
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
