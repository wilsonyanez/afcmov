import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1b',
  templateUrl: 'v1b.html',
})
export class V1bPage {

  id_formulario_actual=0;
  v1b_detalles=[];

  v06_01="";
  v06_02="";
  v06_03="";
  v06_04="";
  v06_05="";
  v06_06="";
  v06_07="";
  v06_08="";
  v06_09="";
  v06_10="";
  v06_11="";
  v06_12="";
  v06_13="";
  v06_14="";
  v06_15="";
  v06_16="";
  v06_17="";
  v06_18="";
  v06_19="";
  v06_20="";
  v06_21="";
  v06_22="";
  v06_23="";
  v06_24="";

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
    console.log('ionViewDidLoad V1bPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1bidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionV1b();
      this.cargarProvincias();
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.v06_13).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.v06_14).then(data=>{
      this.listaParroquias=data;
    });
  }

  cargarInformacionV1b(){
    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1b').then(data=>{
      this.v1b_detalles=data;
      this.v06_01 = this.v1b_detalles[0].valor;
      this.v06_02 = this.v1b_detalles[1].valor;
      this.v06_03 = this.v1b_detalles[2].valor;
      this.v06_04 = this.v1b_detalles[3].valor;
      this.v06_05 = this.v1b_detalles[4].valor;
      this.v06_06 = this.v1b_detalles[5].valor;
      this.v06_07 = this.v1b_detalles[6].valor;
      this.v06_08 = this.v1b_detalles[7].valor;
      this.v06_09 = this.v1b_detalles[8].valor;
      this.v06_10 = this.v1b_detalles[9].valor;
      this.v06_11 = this.v1b_detalles[10].valor;
      this.v06_12 = this.v1b_detalles[11].valor;
      this.v06_13 = this.v1b_detalles[12].valor;
      this.v06_14 = this.v1b_detalles[13].valor;
      this.v06_15 = this.v1b_detalles[14].valor;
      this.v06_16 = this.v1b_detalles[15].valor;
      this.v06_17 = this.v1b_detalles[16].valor;
      this.v06_18 = this.v1b_detalles[17].valor;
      this.v06_19 = this.v1b_detalles[18].valor;
      this.v06_20 = this.v1b_detalles[19].valor;
      this.v06_21 = this.v1b_detalles[20].valor;
      this.v06_22 = this.v1b_detalles[21].valor;
      this.v06_23 = this.v1b_detalles[22].valor;
      this.v06_24 = this.v1b_detalles[23].valor;

    });
  }

  public guardarModuloV1b(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_01',this.v06_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_02',this.v06_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_03',this.v06_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_04',this.v06_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_05',this.v06_05, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_06',this.v06_06, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_07',this.v06_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_08',this.v06_08, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_09',this.v06_09, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_10',this.v06_10, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_11',this.v06_11, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_12',this.v06_12, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_13',this.v06_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_14',this.v06_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_15',this.v06_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_16',this.v06_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_17',this.v06_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_18',this.v06_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_19',this.v06_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_20',this.v06_20, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_21',this.v06_21, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_22',this.v06_22, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_23',this.v06_23, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1b','v06_24',this.v06_24, ls_sql);

    this.presentToast('MODULO 1 DATOS GENERALES DEL PRODUCTOR Guardado',3000);
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
