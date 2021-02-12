import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1fPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1f',
  templateUrl: 'v1f.html',
})
export class V1fPage {
  id_formulario_actual=0;
  v1f_formulario=[];
  clave="v1f";

  codVar="v1f";
  orden=1;

  producto={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:""};
  listaProductos=[];
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
    console.log('ionViewDidLoad V1fPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("V1fidform:"+val);
      this.id_formulario_actual=val;
      this.cargarClaveFormulario();
      this.cargarProvincias();
      this.cargarProductos();
    });
  }

  cargarClaveFormulario(){
    /* Se recupera el valor del campo "clave" de la tabla de formulario */
    this.databaseProvider.listarFormulariosPorIdentificador(this.id_formulario_actual).then(data=>{
      this.v1f_formulario=data;
      console.log("v1fformulario: " + "clave[" + this.v1f_formulario[0].clave+ "]");
      this.clave= this.v1f_formulario[0].clave;
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.producto.val08).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.producto.val09).then(data=>{
      this.listaParroquias=data;
    });
  }

  cargarProductos(){
    this.databaseProvider.listarDetallesHyDPAPorFormularioyVar(this.id_formulario_actual,this.codVar,"val10").then(data=>{
      this.listaProductos=data;
      this.orden= this.listaProductos.length+1;
    });
  }

  guardarProducto(){
    this.databaseProvider.crearDetalleH(
      this.id_formulario_actual,
      this.codVar,
      this.orden,
      this.producto.val01,
      this.producto.val02,
      this.producto.val03,
      this.producto.val04,
      this.producto.val05,
      this.producto.val06,
      this.producto.val07,
      this.producto.val08,
      this.producto.val09,
      this.producto.val10,
      this.producto.val11,
      this.producto.val12,
      "",
      "",
      "",
      "",
      this.clave,
      "insert into formulario_deth (cod_form,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.producto={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:""};
      this.cargarProductos();
    });
    this.presentToast('Producto Guardado',3000);
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
