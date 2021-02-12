import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the V1cPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1c',
  templateUrl: 'v1c.html',
})
export class V1cPage {

  id_formulario_actual=0;
  v1c_formulario=[];
  clave="m1b";
  codVar="v1c";
  orden=1;
  cultivo={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:""};
  listaCultivos=[];
  listaProvincias=[];
  listaCantones=[];
  listaParroquias=[];

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
    console.log('ionViewDidLoad V1cPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("V1cidform:"+val);
      this.id_formulario_actual=val;
      this.cargarClaveFormulario();
      this.cargarProvincias();
      this.cargarCultivos();
    });
  }

  cargarClaveFormulario(){
    /* Se recupera el valor del campo "clave" de la tabla de formulario */
    this.databaseProvider.listarFormulariosPorIdentificador(this.id_formulario_actual).then(data=>{
      this.v1c_formulario=data;
      console.log("v1cformulario: " + "clave[" + this.v1c_formulario[0].clave+ "]");
      this.clave= this.v1c_formulario[0].clave;
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.cultivo.val11).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.cultivo.val12).then(data=>{
      this.listaParroquias=data;
    });
  }

  cargarCultivos(){
    this.databaseProvider.listarDetallesHyDPAPorFormularioyVar(this.id_formulario_actual,this.codVar,"val13").then(data=>{
      this.listaCultivos=data;
      this.orden= this.listaCultivos.length+1;
    });
  }

  guardarCultivo(){
    this.databaseProvider.crearDetalleH(
      this.id_formulario_actual,
      this.codVar,
      this.orden,
      this.cultivo.val01,
      this.cultivo.val02,
      this.cultivo.val03,
      this.cultivo.val04,
      this.cultivo.val05,
      this.cultivo.val06,
      this.cultivo.val07,
      this.cultivo.val08,
      this.cultivo.val09,
      this.cultivo.val10,
      this.cultivo.val11,
      this.cultivo.val12,
      this.cultivo.val13,
      this.cultivo.val14,
      this.cultivo.val15,
      this.cultivo.val16,
      this.clave,
      "insert into formulario_deth (cod_form,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.cultivo={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:""};
      this.cargarCultivos();
    });
    this.presentToast('MODULO 2 AGRICOLA Guardado',3000);
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
