import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';
import { Validar } from '../../providers/validacion/validar';

/**
 * Generated class for the M1aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m1a',
  templateUrl: 'm1a.html',
})
export class M1aPage {

  id_formulario_actual=0;
  m1a_detalles=[];

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
  v00_20="";
  v00_21="";
  v00_22="";
  v00_23="";

  listaProvincias=[];
  listaCantones=[];
  listaParroquias=[];

  /* Control de entrada de datos: nombre, cédula de identidad, número de horas y dìas trabajados */
  gb_varnoHabilitada=true;
  gb_varciHabilitada=true;
  gb_varhsHabilitada=true;
  gb_vardsHabilitada=true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    private databaseProvider:DatabaseProvider,
    private toastCtrl: ToastController,
    private validar:Validar) {

    this.viewCtrl = this.navParams.get('viewCtrl');
    this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo =>{
      if(listo){

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad M1aPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("m1aidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionM1a();
      this.cargarProvincias();
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.v00_16).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.v00_17).then(data=>{
      this.listaParroquias=data;
    });
  }

  cargarInformacionM1a(){
    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'m1a').then(data=>{
      this.m1a_detalles=data;
      this.v00_01 = this.m1a_detalles[0].valor;
      this.v00_02 = this.m1a_detalles[1].valor;
      this.v00_03 = this.m1a_detalles[2].valor;
      this.v00_04 = this.m1a_detalles[3].valor;
      this.v00_05 = this.m1a_detalles[4].valor;
      this.v00_06 = this.m1a_detalles[5].valor;
      this.v00_07 = this.m1a_detalles[6].valor;
      this.v00_08 = this.m1a_detalles[7].valor;
      this.v00_09 = this.m1a_detalles[8].valor;
      this.v00_10 = this.m1a_detalles[9].valor;
      this.v00_11 = this.m1a_detalles[10].valor;
      this.v00_12 = this.m1a_detalles[11].valor;
      this.v00_13 = this.m1a_detalles[12].valor;
      this.v00_14 = this.m1a_detalles[13].valor;
      this.v00_15 = this.m1a_detalles[14].valor;
      this.v00_16 = this.m1a_detalles[15].valor;
      this.v00_17 = this.m1a_detalles[16].valor;
      this.v00_18 = this.m1a_detalles[17].valor;
      this.v00_19 = this.m1a_detalles[18].valor;
      this.v00_20 = this.m1a_detalles[19].valor;
      this.v00_21 = this.m1a_detalles[20].valor;
      this.v00_22 = this.m1a_detalles[21].valor;
      this.v00_23 = this.m1a_detalles[22].valor;
    });
  }

  /* ***************************************************** */
  /* Codificación de Funcion de validación de Cédula       */
  /* ***************************************************** */
  valida_nombre(as_nombre:string, an_longitud:number){
/*      this.databaseProvider.validar_nombre(as_nombre, an_longitud); */
      this.validar.validar_nombre(as_nombre, an_longitud);
      if (this.validar.gb_novalida) {
            this.gb_varnoHabilitada=true;
            this.presentToast(this.validar.gs_valnomensaje,3000);
      } else {
            this.gb_varnoHabilitada=false;
            this.presentToast(this.validar.gs_valnomensaje,3000);
      }
  }

  /* ***************************************************** */
  /* Codificación de Funcion de validación de Nombre       */
  /* ***************************************************** */
  valida_cedula(as_cedula:string){
/*      this.databaseProvider.validar_cedula(as_cedula); */
      if (this.validar.gb_civalida) {
            this.gb_varciHabilitada=true;
            this.presentToast(this.validar.gs_valcimensaje,3000);
      } else {
            this.gb_varciHabilitada=false;
            this.presentToast(this.validar.gs_valcimensaje,3000);
      }
  }



  /* ************************************************************ */
  /* Codificación de Funcion de validación de Número horas semana */
  /* ************************************************************ */
  valida_numero_hs(as_numero:string, an_longitud:number, an_minimo:number, an_maximo:number){
      this.validar.validar_numero_hs(as_numero, an_longitud, an_minimo, an_maximo);
      if (this.validar.gb_hsvalida) {
            this.gb_varhsHabilitada=true;
            this.presentToast(this.validar.gs_valhsmensaje,3000);
      } else {
            this.gb_varhsHabilitada=false;
            this.presentToast(this.validar.gs_valhsmensaje,3000);
      }
  }

  /* *********************************************************** */
  /* Codificación de Funcion de validación de Número dias semana */
  /* *********************************************************** */
  valida_numero_ds(as_numero:string, an_longitud:number, an_minimo:number, an_maximo:number){
      this.validar.validar_numero_ds(as_numero, an_longitud, an_minimo, an_maximo);
      if (this.validar.gb_dsvalida) {
            this.gb_vardsHabilitada=true;
            this.presentToast(this.validar.gs_valdsmensaje,3000);
      } else {
            this.gb_vardsHabilitada=false;
            this.presentToast(this.validar.gs_valdsmensaje,3000);
      }
  }

  public guardarModulo1a(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_01',this.v00_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_02',this.v00_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_03',this.v00_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_04',this.v00_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_05',this.v00_05, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_06',this.v00_06, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_07',this.v00_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_08',this.v00_08, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_09',this.v00_09, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_10',this.v00_10, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_11',this.v00_11, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_12',this.v00_12, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_13',this.v00_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_14',this.v00_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_15',this.v00_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_16',this.v00_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_17',this.v00_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_18',this.v00_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_19',this.v00_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_20',this.v00_20, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_21',this.v00_21, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_22',this.v00_22, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'m1a','v00_23',this.v00_23, ls_sql);

    this.presentToast('Modulo Datos generales del productor (m1a) Guardado',3000);
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
