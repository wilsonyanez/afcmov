import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the M1hPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m1h',
  templateUrl: 'm1h.html',
})
export class M1hPage {

  id_formulario_actual = 0;
  m1h_detalles = [];
  v04_01=false;
  v04_02=false;
  v04_03=false;
  v04_04=false;
  v04_05=false;
  v04_06=false;
  v04_07=false;
  v04_08=false;
  v04_09=false;
  v04_10=false;
  v04_11=false;
  v04_12="";
  v04_13="";
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
    private toastCtrl: ToastController ) {

      this.viewCtrl = this.navParams.get('viewCtrl');
      this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo =>{
        if(listo){

        }
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad M1hPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("m1hidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionM1h();
    });
  }

  cargarInformacionM1h(){
    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'m1h').then(data=>{
      this.m1h_detalles=data;
      this.v04_01 = (this.m1h_detalles[0].valor=="1")?true:false;
      this.v04_02 = (this.m1h_detalles[1].valor=="1")?true:false;
      this.v04_03 = (this.m1h_detalles[2].valor=="1")?true:false;
      this.v04_04 = (this.m1h_detalles[3].valor=="1")?true:false;
      this.v04_05 = (this.m1h_detalles[4].valor=="1")?true:false;
      this.v04_06 = (this.m1h_detalles[5].valor=="1")?true:false;
      this.v04_07 = (this.m1h_detalles[6].valor=="1")?true:false;
      this.v04_08 = (this.m1h_detalles[7].valor=="1")?true:false;
      this.v04_09 = (this.m1h_detalles[8].valor=="1")?true:false;
      this.v04_10 = (this.m1h_detalles[9].valor=="1")?true:false;
      this.v04_11 = (this.m1h_detalles[10].valor=="1")?true:false;
      this.v04_12 = this.m1h_detalles[11].valor;
      this.v04_13 = this.m1h_detalles[12].valor;
      this.v04_14 = this.m1h_detalles[13].valor;
      this.v04_15 = this.m1h_detalles[14].valor;
      this.v04_16 = this.m1h_detalles[15].valor;
      this.v04_17 = this.m1h_detalles[16].valor;
      this.v04_18 = this.m1h_detalles[17].valor;
      this.v04_19 = this.m1h_detalles[18].valor;
      this.v04_20 = this.m1h_detalles[19].valor;
    });
  }

  public guardarModulo1h(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_01',this.v04_01?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_02',this.v04_02?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_03',this.v04_03?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_04',this.v04_04?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_05',this.v04_05?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_06',this.v04_06?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_07',this.v04_07?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_08',this.v04_08?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_09',this.v04_09?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_10',this.v04_10?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_11',this.v04_11?"1":"0", ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_12',this.v04_12, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_13',this.v04_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_14',this.v04_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_15',this.v04_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_16',this.v04_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_17',this.v04_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_18',this.v04_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_19',this.v04_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1h','v04_20',this.v04_20, ls_sql);
    this.presentToast('MODULO 1 TÉRMINOS Y CONDICIONES, COMENTARIOS Y OBSERVACIONES (m1h) Guardado',3000);
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
