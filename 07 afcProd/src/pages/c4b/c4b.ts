import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the C4bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4b',
  templateUrl: 'c4b.html',
})
export class C4bPage {
  id_cialco_actual=0;
  c4b_cialco=[];
  clave="c4b";
  codVar="c4b";
  orden=1;

  miembroDireccion={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:""};
  listaMiembroDireccion=[];
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
    console.log('ionViewDidLoad C4bPage');
    this.storage.get("id_cial_actual").then(val=>{
      console.log("c4bidcial:"+val);
      this.id_cialco_actual=val;
      this.cargarClaveCialco();
      this.cargarProvincias();
      this.cargarInformacionC4b();
    });
  }

  cargarClaveCialco(){
    /* Se recupera el valor del campo "clave" de la tabla de Cialco */
    this.databaseProvider.listarCialcosPorIdentificador(this.id_cialco_actual).then(data=>{
      this.c4b_cialco=data;
      console.log("c4bCialco: " + "clave[" + this.c4b_cialco[0].clave+ "]");
      this.clave= this.c4b_cialco[0].clave;
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.miembroDireccion.val01).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.miembroDireccion.val02).then(data=>{
      this.listaParroquias=data;
    });
  }

  cargarInformacionC4b(){
    this.databaseProvider.listarDetallesHyDPAPorCialcoyVar(this.id_cialco_actual,this.codVar,"val03").then(data=>{
      this.listaMiembroDireccion=data;
      this.orden= this.listaMiembroDireccion.length+1;
    });
  }


  public guardarModuloC4b(){

    this.databaseProvider.crearDetalleH(
      this.id_cialco_actual,
      this.codVar,
      this.orden,
      this.miembroDireccion.val01,
      this.miembroDireccion.val02,
      this.miembroDireccion.val03,
      this.miembroDireccion.val04,
      this.miembroDireccion.val05,
      this.miembroDireccion.val06,
      this.miembroDireccion.val07,
      this.miembroDireccion.val08,
      this.miembroDireccion.val09,
      this.miembroDireccion.val10,
      this.miembroDireccion.val11,
      this.miembroDireccion.val12,
      this.miembroDireccion.val13,
      this.miembroDireccion.val14,
      this.miembroDireccion.val15,
      this.miembroDireccion.val16,
      this.clave,
      "insert into cialco_deth (cod_cial,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroDireccion={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:""};
      this.cargarInformacionC4b();
    });

    this.presentToast('Dirección Guardada',3000);
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
