import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the C4jPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4j',
  templateUrl: 'c4j.html',
})
export class C4jPage {

  id_cialco_actual=0;
  c4j_cialco=[];
  clave="c4j";
  codVar="c4j";
  orden=1;

  miembroMontoVenta={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:"",val17:"",val18:"",val19:""};
  listamiembroMontoVenta=[];

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
    console.log('ionViewDidLoad C4cPage');
    this.storage.get("id_cial_actual").then(val=>{
      console.log("c4jidcial:"+val);
      this.id_cialco_actual=val;
      this.cargarClaveCialco();
      this.cargarInformacionC4j();
    });
  }

  cargarClaveCialco(){
    /* Se recupera el valor del campo "clave" de la tabla de Cialco */
    this.databaseProvider.listarCialcosPorIdentificador(this.id_cialco_actual).then(data=>{
      this.c4j_cialco=data;
      console.log("c4jCialco: " + "clave[" + this.c4j_cialco[0].clave+ "]");
      this.clave= this.c4j_cialco[0].clave;
    });
  }

  cargarInformacionC4j(){
    this.databaseProvider.listarDetallesHPorCialcoyVar(this.id_cialco_actual,this.codVar).then(data=>{
    this.listamiembroMontoVenta=data;
    this.orden= this.listamiembroMontoVenta.length+1;
    });
  }

  public guardarModuloC4j(){

    this.databaseProvider.crearCialcoDetalleH(
      this.id_cialco_actual,
      this.codVar,
      this.orden,
      this.miembroMontoVenta.val01,
      this.miembroMontoVenta.val02,
      this.miembroMontoVenta.val03,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      this.clave,
      "insert into cialco_deth (cod_cial,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,val17,val18,val19,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroMontoVenta={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:"",val17:"",val18:"",val19:""};
      this.cargarInformacionC4j();
    });

    this.presentToast('REGISTRO DE MONTOS DE VENTA Y PRECIOS DE PRODUCTOS Guardado',3000);
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
