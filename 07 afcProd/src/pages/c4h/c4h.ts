import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the C4hPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4h',
  templateUrl: 'c4h.html',
})
export class C4hPage {

  id_cialco_actual=0;
  c4h_cialco=[];
  clave="c4h";
  codVar="c4h";
  orden=1;

  miembroInstitucion={val01:"",val02:false,val03:"",val04:false,val05:"",val06:false,val07:"",val08:false,val09:"",val10:false,val11:"",val12:false,val13:"",val14:false,val15:"",val16:false,val17:"",val18:"",val19:""};
  listamiembroInstitucion=[];
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
    console.log('ionViewDidLoad C4cPage');
    this.storage.get("id_cial_actual").then(val=>{
      console.log("c4hidcial:"+val);
      this.id_cialco_actual=val;
      this.cargarClaveCialco();
      this.cargarProvincias();
      this.cargarInformacionC4h(this.miembroInstitucion.val02, this.miembroInstitucion.val04, this.miembroInstitucion.val06);
    });
  }

  cargarClaveCialco(){
    /* Se recupera el valor del campo "clave" de la tabla de Cialco */
    this.databaseProvider.listarCialcosPorIdentificador(this.id_cialco_actual).then(data=>{
      this.c4h_cialco=data;
      console.log("c4hCialco: " + "clave[" + this.c4h_cialco[0].clave+ "]");
      this.clave= this.c4h_cialco[0].clave;
    });
  }

  cargarProvincias(){
    this.databaseProvider.listarProvincias().then(data=>{
      this.listaProvincias=data;
    });
  }

  cargarCantonesPorProvincia(){
    this.databaseProvider.listarDpaPorPadre(this.miembroInstitucion.val03).then(data=>{
      this.listaCantones=data;
    });
  }

  cargarParroquiasPorCanton(){
    this.databaseProvider.listarDpaPorPadre(this.miembroInstitucion.val05).then(data=>{
      this.listaParroquias=data;
    });
  }

  cargarInformacionC4h(ab_val02:boolean, ab_val04:boolean, ab_val06:boolean){

    console.log('val02: ' + this.miembroInstitucion.val02 + '[' + ab_val02 + ']');
    if(this.miembroInstitucion.val02){
      this.databaseProvider.listarDetallesHyDPAPvPorCialcoyVar(this.id_cialco_actual,this.codVar,"val03").then(data=>{
        this.listamiembroInstitucion=data;
      });
    }
    console.log('val04: ' + this.miembroInstitucion.val04 + '[' + ab_val04 + ']');
    if(this.miembroInstitucion.val04){
      this.databaseProvider.listarDetallesHyDPACnPorCialcoyVar(this.id_cialco_actual,this.codVar,"val05").then(data=>{
        this.listamiembroInstitucion=data;
      });
    }
    console.log('val06: ' + this.miembroInstitucion.val06 + '[' + ab_val06 + ']');
    if(this.miembroInstitucion.val06){
      this.databaseProvider.listarDetallesHyDPAPorCialcoyVar(this.id_cialco_actual,this.codVar,"val07").then(data=>{
        this.listamiembroInstitucion=data;
      });
    }
    this.orden= this.listamiembroInstitucion.length+1;
  }

  public guardarModuloC4h(){

    var txtVal02="0";
    if(this.miembroInstitucion.val02){
      txtVal02="1";
    }

    var txtVal04="0";
    if(this.miembroInstitucion.val04){
      txtVal04="1";
    }

    var txtVal06="0";
    if(this.miembroInstitucion.val06){
      txtVal06="1";
    }

    var txtVal08="0";
    if(this.miembroInstitucion.val08){
      txtVal08="1";
    }

    var txtVal10="0";
    if(this.miembroInstitucion.val10){
      txtVal10="1";
    }

    var txtVal12="0";
    if(this.miembroInstitucion.val12){
      txtVal12="1";
    }

    var txtVal14="0";
    if(this.miembroInstitucion.val14){
      txtVal14="1";
    }

    var txtVal16="0";
    if(this.miembroInstitucion.val16){
      txtVal16="1";
    }

    this.databaseProvider.crearCialcoDetalleH(
      this.id_cialco_actual,
      this.codVar,
      this.orden++,
      this.miembroInstitucion.val01,
      txtVal02,
      this.miembroInstitucion.val03,
      txtVal04,
      this.miembroInstitucion.val05,
      txtVal06,
      this.miembroInstitucion.val07,
      txtVal08,
      this.miembroInstitucion.val09,
      txtVal10,
      this.miembroInstitucion.val11,
      txtVal12,
      this.miembroInstitucion.val13,
      txtVal14,
      this.miembroInstitucion.val15,
      txtVal16,
      this.miembroInstitucion.val17,
      this.miembroInstitucion.val18,
      this.miembroInstitucion.val19,
      this.clave,
      "insert into cialco_deth (cod_cial,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,val17,val18,val19,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.cargarInformacionC4h(this.miembroInstitucion.val02, this.miembroInstitucion.val04, this.miembroInstitucion.val06);
      this.miembroInstitucion={val01:"",val02:false,val03:"",val04:false,val05:"",val06:false,val07:"",val08:false,val09:"",val10:false,val11:"",val12:false,val13:"",val14:false,val15:"",val16:false,val17:"",val18:"",val19:""};
    });

    this.presentToast('REGISTRO DE ACCIONES INTERINSTITUCIONALES PARA FORTALECIMIENTO DEL CIALCO Guardado',3000);
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
