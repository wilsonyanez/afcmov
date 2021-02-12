import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the M1ePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m1e',
  templateUrl: 'm1e.html',
})
export class M1ePage {
  id_formulario_actual=0;
  m1e_formulario=[];
  clave="m1e";

  codVar="m1e";
  orden=1;
  unidadProd={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:false};
  listaUnidadesProd=[];
  listaProvincias=[];
  listaCantones=[];
  listaParroquias=[];
  listaTenencia=["1","2","3","4","5","6"];

  /* Control de los botones de Juridico y Hecho*/
  gb_var12Habilitada=false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    private databaseProvider:DatabaseProvider,
    private toastCtrl: ToastController
  ) {
    this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo =>{
      if(listo){

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad M1ePage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("m1eidform:"+val);
      this.id_formulario_actual=val;
      this.cargarClaveFormulario();
      this.cargarProvincias();
      this.cargarUnidadesDeProduccion();
    });
  }

  cargarClaveFormulario(){
    /* Se recupera el valor del campo "clave" de la tabla de formulario */
    this.databaseProvider.listarFormulariosPorIdentificador(this.id_formulario_actual).then(data=>{
      this.m1e_formulario=data;
      console.log("m1eformulario: " + "clave[" + this.m1e_formulario[0].clave+ "]");
      this.clave= this.m1e_formulario[0].clave;
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.unidadProd.val01).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.unidadProd.val02).then(data=>{
      this.listaParroquias=data;
    });
  }

  cargarUnidadesDeProduccion(){
    this.databaseProvider.listarDetallesHyDPAPorFormularioyVar(this.id_formulario_actual,this.codVar,"val03").then(data=>{
      this.listaUnidadesProd=data;
      this.orden= this.listaUnidadesProd.length+1;
    });
  }

  validarVar12(){
    console.log("var12: estado inicio Tenencia [" + this.gb_var12Habilitada + "]");

    for(var i=1; i<=6; i++){
      switch(this.unidadProd.val12){
      case "1":
        this.gb_var12Habilitada=true;
        break;
      case "2":
        this.gb_var12Habilitada=true;
        break;
      case "3":
        this.gb_var12Habilitada=true;
        break;
      case "4":
        this.gb_var12Habilitada=true;
        break;
      case "5":
        this.gb_var12Habilitada=true;
        break;
      case "6":
        this.gb_var12Habilitada=true;
        break;
      default:
        this.gb_var12Habilitada=false;
        break;
      }
    }
    console.log("var12: estado final Tenencia [" + this.gb_var12Habilitada + "]");
  }

  guardarUnidadProduccion(){
    var txtVal13="0";
    if(this.unidadProd.val13){
      txtVal13="1";
    }

    this.validarVar12();
    if(!this.gb_var12Habilitada){
      console.log("var12: Sin valor en Tenencia");
      this.presentToast('MODULO 1 UNIDAD DE PRODUCCION NO Guardada: El campo Tenencia es obligatorio, debe tener al menos una selección de vivienda.',3000);
    } else {
      console.log("var12: Tenencia [" + this.unidadProd.val12 + "]");
      this.databaseProvider.crearDetalleH(
        this.id_formulario_actual,
        this.codVar,
        this.orden,
        this.unidadProd.val01,
        this.unidadProd.val02,
        this.unidadProd.val03,
        this.unidadProd.val04,
        this.unidadProd.val05,
        this.unidadProd.val06,
        this.unidadProd.val07,
        this.unidadProd.val08,
        this.unidadProd.val09,
        this.unidadProd.val10,
        this.unidadProd.val11,
        this.unidadProd.val12,
        txtVal13,
        "",
        "",
        "",
        this.clave,
        "insert into formulario_deth (cod_form,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
      ).then(data=>{
  /*      this.orden++; */
        this.unidadProd={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:false};
        this.cargarUnidadesDeProduccion();
      });
      this.presentToast('MODULO 1 UNIDAD DE PRODUCCION Guardada',3000);
    }
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
