import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the C4gPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4g',
  templateUrl: 'c4g.html',
})
export class C4gPage {

  id_cialco_actual=0;
  c4g_cialco=[];
  clave="c4g";
  codVar="c4g";
  orden=1;

  miembroProductor={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:""};
  listamiembroProductor=[];

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
      console.log("c4gidcial:"+val);
      this.id_cialco_actual=val;
      this.cargarClaveCialco();
      this.cargarInformacionC4g();
    });
  }

  cargarClaveCialco(){
    /* Se recupera el valor del campo "clave" de la tabla de Cialco */
    this.databaseProvider.listarCialcosPorIdentificador(this.id_cialco_actual).then(data=>{
      this.c4g_cialco=data;
      console.log("c4gCialco: " + "clave[" + this.c4g_cialco[0].clave+ "]");
      this.clave= this.c4g_cialco[0].clave;
    });
  }

  cargarInformacionC4g(){
    this.databaseProvider.listarDetallesHPorCialcoyVar(this.id_cialco_actual,this.codVar).then(data=>{
      this.listamiembroProductor=data;
      this.orden= this.listamiembroProductor.length+1;
    });
  }

  public guardarModuloC4g(){

    this.databaseProvider.crearDetalleH(
      this.id_cialco_actual,
      this.codVar,
      this.orden,
      this.miembroProductor.val01,
      this.miembroProductor.val02,
      this.miembroProductor.val03,
      this.miembroProductor.val04,
      this.miembroProductor.val05,
      this.miembroProductor.val06,
      this.miembroProductor.val07,
      this.miembroProductor.val08,
      this.miembroProductor.val09,
      this.miembroProductor.val10,
      this.miembroProductor.val11,
      "",
      "",
      "",
      "",
      "",
      this.clave,
      "insert into cialco_deth (cod_cial,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroProductor={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:""};
      this.cargarInformacionC4g();
    });

    this.presentToast('Representante Legal Guardado',3000);
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
