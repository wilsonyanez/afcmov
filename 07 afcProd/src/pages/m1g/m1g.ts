import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the M1gPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m1g',
  templateUrl: 'm1g.html',
})

export class M1gPage {
  id_formulario_actual = 0;
  m1g_detalles = [];
  v03_01=false;
  v03_02=false;
  v03_03=false;
  v03_04=false;
  v03_05=false;
  v03_06=false;
  v03_07=false;
  v03_08=false;
  v03_09=false;
  v03_10=false;
  v03_11=false;
  v03_12=false;
  v03_13=false;
  v03_14=false;
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
    console.log('ionViewDidLoad M1gPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("m1gidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionM1g();
    });
  }

  cargarInformacionM1g(){
    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'m1g').then(data=>{
      this.m1g_detalles=data;
      this.v03_01 = (this.m1g_detalles[0].valor=="1")?true:false;
      this.v03_02 = (this.m1g_detalles[1].valor=="1")?true:false;
      this.v03_03 = (this.m1g_detalles[2].valor=="1")?true:false;
      this.v03_04 = (this.m1g_detalles[3].valor=="1")?true:false;
      this.v03_05 = (this.m1g_detalles[4].valor=="1")?true:false;
      this.v03_06 = (this.m1g_detalles[5].valor=="1")?true:false;
      this.v03_07 = (this.m1g_detalles[6].valor=="1")?true:false;
      this.v03_08 = (this.m1g_detalles[7].valor=="1")?true:false;
      this.v03_09 = (this.m1g_detalles[8].valor=="1")?true:false;
      this.v03_10 = (this.m1g_detalles[9].valor=="1")?true:false;
      this.v03_11 = (this.m1g_detalles[10].valor=="1")?true:false;
      this.v03_12 = (this.m1g_detalles[11].valor=="1")?true:false;
      this.v03_13 = (this.m1g_detalles[12].valor=="1")?true:false;
      this.v03_14 = (this.m1g_detalles[13].valor=="1")?true:false;
      this.v03_15 = this.m1g_detalles[14].valor;
      this.v03_16 = this.m1g_detalles[15].valor;
      this.v03_17 = this.m1g_detalles[16].valor;
      this.v03_18 = this.m1g_detalles[17].valor;
      this.v03_19 = this.m1g_detalles[18].valor;
      this.v03_20 = this.m1g_detalles[19].valor;
    });
  }

  public guardarModulo1g(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_01',this.v03_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_02',this.v03_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_03',this.v03_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_04',this.v03_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_05',this.v03_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_06',this.v03_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_07',this.v03_07?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_08',this.v03_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_09',this.v03_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_10',this.v03_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_11',this.v03_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_12',this.v03_12?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_13',this.v03_13?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_14',this.v03_14?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_15',this.v03_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_16',this.v03_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_17',this.v03_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_18',this.v03_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_19',this.v03_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1g','v03_20',this.v03_20, ls_sql);
    this.presentToast('MODULO 1 DESTINO DE LA PRODUCCIÓN (m1g) Guardado',3000);
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
