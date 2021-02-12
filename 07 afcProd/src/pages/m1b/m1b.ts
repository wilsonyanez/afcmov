import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';
import { Validar } from '../../providers/validacion/validar';

/**
 * Generated class for the M1bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m1b',
  templateUrl: 'm1b.html',
})
export class M1bPage {
  id_formulario_actual=0;
  m1b_formulario=[];
  clave="m1b";

  codVar="m1b";
  orden=1;

  miembroGrupo={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:""};
  listaMiembrosGrupo=[];

  /* Control de entrada de datos: cédula de identidad, número */
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
    console.log('ionViewDidLoad M1bPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("m1bidform: "+val);
      this.id_formulario_actual=val;
      this.cargarClaveFormulario();
      this.cargarMiembrosGrupoFamiliar();
    });

  }

  cargarClaveFormulario(){
    /* Se recupera el valor del campo "clave" de la tabla de formulario */
    this.databaseProvider.listarFormulariosPorIdentificador(this.id_formulario_actual).then(data=>{
      this.m1b_formulario=data;
      console.log("m1bformulario: " + "clave[" + this.m1b_formulario[0].clave+ "]");
      this.clave= this.m1b_formulario[0].clave;
    });
  }

  cargarMiembrosGrupoFamiliar(){
    this.databaseProvider.listarDetallesHPorFormularioyVar(this.id_formulario_actual,this.codVar).then(data=>{
      this.listaMiembrosGrupo=data;
      this.orden= this.listaMiembrosGrupo.length+1;
    });
  }

  /* ***************************************************** */
  /* Codificación de Funcion de validación de Cédula       */
  /* ***************************************************** */
  valida_cedula(as_cedula:string){
    this.validar.validar_cedula(as_cedula);
    if (this.validar.gb_civalida) {
       this.gb_varciHabilitada=true;
       this.presentToast(this.validar.gs_valcimensaje,3000);
    } else {
       this.gb_varciHabilitada=false;
       this.presentToast(this.validar.gs_valcimensaje,3000);
    }
  }

  /* ************************************************************ */
  /* Codificación de Funcion de validación de Número Horas Semana */
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

  /* ************************************************************ */
  /* Codificación de Funcion de validación de Número dias Semana  */
  /* ************************************************************ */
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

  guardarMiembroGrupoFamiliar(){
    this.databaseProvider.crearDetalleH(
      this.id_formulario_actual,
      this.codVar,
      this.orden,
      this.miembroGrupo.val01,
      this.miembroGrupo.val02,
      this.miembroGrupo.val03,
      this.miembroGrupo.val04,
      this.miembroGrupo.val05,
      this.miembroGrupo.val06,
      this.miembroGrupo.val07,
      this.miembroGrupo.val08,
      this.miembroGrupo.val09,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      this.clave,
      "insert into formulario_deth (cod_form,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroGrupo={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:""};
      this.cargarMiembrosGrupoFamiliar();
    });
    this.presentToast('MODULO 1 DATOS GRUPO FAMILIAR CAMPESINO Guardado',3000);
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
