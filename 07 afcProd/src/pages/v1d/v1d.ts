import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the V1dPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1d',
  templateUrl: 'v1d.html',
})
export class V1dPage {

  id_formulario_actual=0;
  v1d_formulario=[];
  clave="v1d";
  codVar="v1d";
  orden=1;
  especie={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:""};
  listaEspecies=[];
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
    console.log('ionViewDidLoad V1dPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1didform:"+val);
      this.id_formulario_actual=val;
      this.cargarClaveFormulario();
      this.cargarProvincias();
      this.cargarEspecies();
    });
  }

  cargarClaveFormulario(){
    /* Se recupera el valor del campo "clave" de la tabla de formulario */
    this.databaseProvider.listarFormulariosPorIdentificador(this.id_formulario_actual).then(data=>{
      this.v1d_formulario=data;
      console.log("v1dformulario: " + "clave[" + this.v1d_formulario[0].clave+ "]");
      this.clave= this.v1d_formulario[0].clave;
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.especie.val12).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.especie.val13).then(data=>{
      this.listaParroquias=data;
    });
  }

  cargarEspecies(){
    this.databaseProvider.listarDetallesHyDPAPorFormularioyVar(this.id_formulario_actual,this.codVar,"val14").then(data=>{
      this.listaEspecies=data;
      this.orden= this.listaEspecies.length+1;
    });
  }

  guardarEspecie(){
    this.databaseProvider.crearDetalleH(
      this.id_formulario_actual,
      this.codVar,
      this.orden,
      this.especie.val01,
      this.especie.val02,
      this.especie.val03,
      this.especie.val04,
      this.especie.val05,
      this.especie.val06,
      this.especie.val07,
      this.especie.val08,
      this.especie.val09,
      this.especie.val10,
      this.especie.val11,
      this.especie.val12,
      this.especie.val13,
      this.especie.val14,
      this.especie.val15,
      this.especie.val16,
      this.clave,
      "insert into formulario_deth (cod_form,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.especie={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:""};
      this.cargarEspecies();
    });
    this.presentToast('MODULO 3 PECUARIO Guardado',3000);
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
