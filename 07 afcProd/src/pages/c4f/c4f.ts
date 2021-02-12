import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the C4fPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4f',
  templateUrl: 'c4f.html',
})
export class C4fPage {

  id_cialco_actual=0;
  c4f_cialco=[];
  clave="c4f";
  codVar="c4f";
  orden=1;

  miembroCialco={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:""};
  listaMiembroCialco=[];
  listaProvincias=[];
  listaCantones=[];
  listaParroquias=[];

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
    console.log('ionViewDidLoad C4fPage');
    this.storage.get("id_cial_actual").then(val=>{
      console.log("c4fidcial:"+val);
      this.id_cialco_actual=val;
      this.cargarClaveCialco();
      this.cargarProvincias();
      this.cargarInformacionC4f();
    });
  }

  cargarClaveCialco(){
    /* Se recupera el valor del campo "clave" de la tabla de Cialco */
    this.databaseProvider.listarCialcosPorIdentificador(this.id_cialco_actual).then(data=>{
      this.c4f_cialco=data;
      console.log("c4fCialco: " + "clave[" + this.c4f_cialco[0].clave+ "]");
      this.clave= this.c4f_cialco[0].clave;
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.miembroCialco.val04).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.miembroCialco.val05).then(data=>{
      this.listaParroquias=data;
    });
  }

  calcularVar16(){
    var hombres = parseInt(this.miembroCialco.val14);
    var mujeres = parseInt(this.miembroCialco.val15);
    var total_h_m = parseInt(this.miembroCialco.val16);

    if( isNaN(hombres) ){
       hombres = 0;
    } else {
       hombres = parseInt(this.miembroCialco.val14);
    }
    if( isNaN(mujeres) ){
       mujeres = 0;
    } else {
       mujeres = parseInt(this.miembroCialco.val15);
    }
    total_h_m = hombres + mujeres ;
    this.miembroCialco.val16 = total_h_m.toString();
  }

  cargarInformacionC4f(){
    this.databaseProvider.listarDetallesHyDPAPorCialcoyVar(this.id_cialco_actual,this.codVar,"val06").then(data=>{
      this.listaMiembroCialco=data;
      this.orden= this.listaMiembroCialco.length+1;
    });
  }

  public guardarModuloC4f(){

    this.databaseProvider.crearDetalleH(
      this.id_cialco_actual,
      this.codVar,
      this.orden,
      this.miembroCialco.val01,
      this.miembroCialco.val02,
      this.miembroCialco.val03,
      this.miembroCialco.val04,
      this.miembroCialco.val05,
      this.miembroCialco.val06,
      this.miembroCialco.val07,
      this.miembroCialco.val08,
      this.miembroCialco.val09,
      this.miembroCialco.val10,
      this.miembroCialco.val11,
      this.miembroCialco.val12,
      this.miembroCialco.val13,
      this.miembroCialco.val14,
      this.miembroCialco.val15,
      "",
      this.clave,
      "insert into cialco_deth (cod_cial,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroCialco={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:"",val16:""};
      this.cargarInformacionC4f();
    });

    this.presentToast('REGISTRO DE ORGANIZACIONES VINCULADOS AL CIALCO Guardada',3000);
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
