import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the C4ePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4e',
  templateUrl: 'c4e.html',
})

export class C4ePage {
  id_cialco_actual = 0;
  c4e_detalles = [];
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
    console.log('ionViewDidLoad C4ePage');
    this.storage.get("id_cial_actual").then(val=>{
      console.log("c4eidcial:"+val);
      this.id_cialco_actual=val;
      this.cargarInformacionC4e();
    });
  }

  cargarInformacionC4e(){
    this.databaseProvider.listarDetallesPorCialcoyModulo(this.id_cialco_actual,'c4e').then(data=>{
      this.c4e_detalles=data;
      this.v01_01 = (this.c4e_detalles[0].valor=="1")?true:false;
      this.v01_02 = (this.c4e_detalles[1].valor=="1")?true:false;
      this.v01_03 = (this.c4e_detalles[2].valor=="1")?true:false;
      this.v01_04 = (this.c4e_detalles[3].valor=="1")?true:false;
      this.v01_05 = (this.c4e_detalles[4].valor=="1")?true:false;
      this.v01_06 = (this.c4e_detalles[5].valor=="1")?true:false;
      this.v01_07 = (this.c4e_detalles[6].valor=="1")?true:false;
      this.v01_08 = (this.c4e_detalles[7].valor=="1")?true:false;
      this.v01_09 = (this.c4e_detalles[8].valor=="1")?true:false;
      this.v01_10 = (this.c4e_detalles[9].valor=="1")?true:false;
      this.v01_11 = this.c4e_detalles[10].valor;
      this.v01_12 = this.c4e_detalles[11].valor;
      this.v01_13 = this.c4e_detalles[12].valor;
      this.v01_14 = this.c4e_detalles[13].valor;
      this.v01_15 = this.c4e_detalles[14].valor;
      this.v01_16 = this.c4e_detalles[15].valor;
      this.v01_17 = this.c4e_detalles[16].valor;
      this.v01_18 = this.c4e_detalles[17].valor;
      this.v01_19 = this.c4e_detalles[18].valor;
      this.v01_20 = this.c4e_detalles[19].valor;
    });
  }

  public guardarModuloC4e(){
    var ls_sql = "update cialco_detv set valor=? where cod_cial=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_01',this.v01_01?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_02',this.v01_02?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_03',this.v01_03?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_04',this.v01_04?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_05',this.v01_05?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_06',this.v01_06?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_07',this.v01_07?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_08',this.v01_08?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_09',this.v01_09?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_10',this.v01_10?"1":"0",ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_11',this.v01_11,ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_12',this.v01_12,ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_13',this.v01_13,ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_14',this.v01_14,ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_15',this.v01_15,ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_16',this.v01_16,ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_17',this.v01_17,ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_18',this.v01_18,ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_19',this.v01_19,ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4e','v01_20',this.v01_20,ls_sql);
    this.presentToast('REGISTRO DE OFERTA AGROPECUARIA (c4e) Guardado',3000);
  }

  presentToast(as_message:string, an_seconds:number) {
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
