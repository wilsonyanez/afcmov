import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the C4kPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4k',
  templateUrl: 'c4k.html',
})
export class C4kPage {

  id_cialco_actual=0;
  c4k_cialco=[];
  clave="c4k";
  codVar="c4k";
  orden=1;

  miembroProducto={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:"",val17:"",val18:"",val19:""};
  listamiembroProducto=[];

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
      console.log("c4kidcial:"+val);
      this.id_cialco_actual=val;
      this.cargarClaveCialco();
      this.cargarInformacionC4k();
    });
  }

  cargarClaveCialco(){
    /* Se recupera el valor del campo "clave" de la tabla de Cialco */
    this.databaseProvider.listarCialcosPorIdentificador(this.id_cialco_actual).then(data=>{
      this.c4k_cialco=data;
      console.log("c4kCialco: " + "clave[" + this.c4k_cialco[0].clave+ "]");
      this.clave= this.c4k_cialco[0].clave;
    });
  }

  cargarInformacionC4k(){
    this.databaseProvider.listarDetallesHPorCialcoyVar(this.id_cialco_actual,this.codVar).then(data=>{
    this.listamiembroProducto=data;
    this.orden= this.listamiembroProducto.length+1;
    });
  }

  public guardarModuloC4k(){

    this.databaseProvider.crearCialcoDetalleH(
      this.id_cialco_actual,
      this.codVar,
      this.orden,
      this.miembroProducto.val01,
      this.miembroProducto.val02,
      this.miembroProducto.val03,
      this.miembroProducto.val04,
      this.miembroProducto.val05,
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
      this.miembroProducto={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:"",val17:"",val18:"",val19:""};
      this.cargarInformacionC4k();
    });

    this.presentToast('REGISTRO DE VENTAS DE 5 PRODUCTOS DEL CIALCO Guardado',3000);
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
