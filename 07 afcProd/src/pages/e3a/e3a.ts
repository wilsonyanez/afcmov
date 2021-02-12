import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the E3aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e3a',
  templateUrl: 'e3a.html',
})
export class E3aPage {

  id_establecimiento_actual=0;
  e3a_detalles=[];

  v00_01="";
  v00_02="";
  v00_03="";
  v00_04="";
  v00_05="";
  v00_06="";
  v00_07="";
  v00_08="";
  v00_09="";
  v00_10="";
  v00_11="";
  v00_12="";
  v00_13="";
  v00_14="";
  v00_15="";
  v00_16="";
  v00_17="";
  v00_18="";
  v00_19="";

  listaProvincias=[];
  listaCantones=[];
  listaParroquias=[];

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
    console.log('ionViewDidLoad E3aPage');
    this.storage.get("id_esta_actual").then(val=>{
      console.log("e3aidform:"+val);
      this.id_establecimiento_actual=val;
      this.cargarInformacionE3a();
      this.cargarProvincias();
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.v00_12).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.v00_13).then(data=>{
      this.listaParroquias=data;
    });
  }

  cargarInformacionE3a(){
    this.databaseProvider.listarDetallesPorEstablecimientoyModulo(this.id_establecimiento_actual,'e3a').then(data=>{
      this.e3a_detalles=data;
      this.v00_01 = this.e3a_detalles[0].valor;
      this.v00_02 = this.e3a_detalles[1].valor;
      this.v00_03 = this.e3a_detalles[2].valor;
      this.v00_04 = this.e3a_detalles[3].valor;
      this.v00_05 = this.e3a_detalles[4].valor;
      this.v00_06 = this.e3a_detalles[5].valor;
      this.v00_07 = this.e3a_detalles[6].valor;
      this.v00_08 = this.e3a_detalles[7].valor;
      this.v00_09 = this.e3a_detalles[8].valor;
      this.v00_10 = this.e3a_detalles[9].valor;
      this.v00_11 = this.e3a_detalles[10].valor;
      this.v00_12 = this.e3a_detalles[11].valor;
      this.v00_13 = this.e3a_detalles[12].valor;
      this.v00_14 = this.e3a_detalles[13].valor;
      this.v00_15 = this.e3a_detalles[14].valor;
      this.v00_16 = this.e3a_detalles[15].valor;
      this.v00_17 = this.e3a_detalles[16].valor;
      this.v00_18 = this.e3a_detalles[17].valor;
      this.v00_19 = this.e3a_detalles[18].valor;

    });
  }

  public guardarModuloE3a(){
    var ls_sql = "update establecimiento_detv set valor=? where cod_esta=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_01',this.v00_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_02',this.v00_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_03',this.v00_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_04',this.v00_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_05',this.v00_05, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_06',this.v00_06, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_07',this.v00_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_08',this.v00_08, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_09',this.v00_09, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_10',this.v00_10, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_11',this.v00_11, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_12',this.v00_12, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_13',this.v00_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_14',this.v00_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_15',this.v00_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_16',this.v00_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_17',this.v00_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_18',this.v00_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_establecimiento_actual,'e3a','v00_19',this.v00_19, ls_sql);
    this.presentToast('Modulo Datos generales del establecimiento (e3a) Guardado',3000);
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
