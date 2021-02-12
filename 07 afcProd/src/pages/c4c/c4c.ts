import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';
import { Validar } from '../../providers/validacion/validar';

/**
 * Generated class for the C4cPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4c',
  templateUrl: 'c4c.html',
})
export class C4cPage {

  id_cialco_actual=0;
  c4c_cialco=[];
  clave="c4c";
  codVar="c4c";
  orden=1;

  /* Control de entrada de datos: cédula de identidad */
  gb_varciHabilitada=true;

  miembroRepresentanteLegal={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:""};
  listamiembroRepresentanteLegal=[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    private databaseProvider:DatabaseProvider,
    private toastCtrl: ToastController,
    private validar:Validar) {

    this.viewCtrl = this.navParams.get('viewCtrl');
    this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo =>{
      if(listo){

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad C4cPage');
    this.storage.get("id_cial_actual").then(val=>{
      console.log("c4cidcial:"+val);
      this.id_cialco_actual=val;
      this.cargarClaveCialco();
      this.cargarInformacionC4c();
    });
  }

  cargarClaveCialco(){
    /* Se recupera el valor del campo "clave" de la tabla de Cialco */
    this.databaseProvider.listarCialcosPorIdentificador(this.id_cialco_actual).then(data=>{
      this.c4c_cialco=data;
      console.log("c4cCialco: " + "clave[" + this.c4c_cialco[0].clave+ "]");
      this.clave= this.c4c_cialco[0].clave;
    });
  }

  cargarInformacionC4c(){
    this.databaseProvider.listarDetallesHPorCialcoyVar(this.id_cialco_actual,this.codVar).then(data=>{
      this.listamiembroRepresentanteLegal=data;
      this.orden= this.listamiembroRepresentanteLegal.length+1;
    });
  }

  /* ***************************************************** */
  /* Codificación de Función de validación de Cédula       */
  /* ***************************************************** */
  valida_cedula(as_cedula:string){
      this.validar.validar_cedula(as_cedula);
/*      this.databaseProvider.validar_cedula(as_cedula);
      if (this.databaseProvider.gb_civalida) { */
      if (this.validar.gb_civalida) {
            this.gb_varciHabilitada=true;
/*            this.presentToast(this.databaseProvider.gs_valcimensaje,3000); */
            this.presentToast(this.validar.gs_valcimensaje,3000);
      } else {
            this.gb_varciHabilitada=false;
/*            this.presentToast(this.databaseProvider.gs_valcimensaje,3000); */
            this.presentToast(this.validar.gs_valcimensaje,3000);
      }
  }

  /* **************************************************** */

  public guardarModuloC4c(){

    this.databaseProvider.crearDetalleH(
      this.id_cialco_actual,
      this.codVar,
      this.orden,
      this.miembroRepresentanteLegal.val01,
      this.miembroRepresentanteLegal.val02,
      this.miembroRepresentanteLegal.val03,
      this.miembroRepresentanteLegal.val04,
      this.miembroRepresentanteLegal.val05,
      this.miembroRepresentanteLegal.val06,
      this.miembroRepresentanteLegal.val07,
      this.miembroRepresentanteLegal.val08,
      this.miembroRepresentanteLegal.val09,
      this.miembroRepresentanteLegal.val10,
      this.miembroRepresentanteLegal.val11,
      this.miembroRepresentanteLegal.val12,
      "",
      "",
      "",
      "",
      this.clave,
      "insert into cialco_deth (cod_cial,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroRepresentanteLegal={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:""};
      this.cargarInformacionC4c();
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
