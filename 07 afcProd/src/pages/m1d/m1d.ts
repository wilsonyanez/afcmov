import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the M1dPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-m1d',
  templateUrl: 'm1d.html',
})
export class M1dPage {

  id_formulario_actual=0;
  m1d_formulario=[];
  clave="m1d";

  codVar="m1d";
  orden=1;

  miembroOrganizacion={val01:"",val02:"",val03:false,val04:false,val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:""};
  listaMiembroOrganizacion=[];

  /* Control de los botones de Juridico y Hecho*/
  gb_var01Habilitada=true;
  gb_var02Habilitada=true;
  gb_var03Habilitada=false;
  gb_var04Habilitada=false;
  gb_var05Habilitada=false;

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
    console.log('ionViewDidLoad M1dPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("m1didform:"+val);
      this.id_formulario_actual=val;
      this.cargarClaveFormulario();
      this.cargarInformacionM1d();
    });
  }

  validarVar01(){
    this.gb_var01Habilitada=true;
    if(this.miembroOrganizacion.val01=='1'){
      this.gb_var01Habilitada=false;
    } else if(this.miembroOrganizacion.val01=='2'){
      this.gb_var01Habilitada=true;
    }
  }

  validarVar02(){

    this.gb_var02Habilitada=true;
    if(this.miembroOrganizacion.val02=='1'){
      this.gb_var02Habilitada=false;
    } else if(this.miembroOrganizacion.val02=='2'){
      this.gb_var02Habilitada=true;
    }

    this.gb_var03Habilitada=false;
    this.gb_var04Habilitada=false;

    this.miembroOrganizacion.val03=false;
    this.miembroOrganizacion.val04=false;

    if(this.miembroOrganizacion.val02=='1'){
      this.gb_var03Habilitada=true;
      this.miembroOrganizacion.val03=true;
      this.miembroOrganizacion.val04=false;
      this.gb_var04Habilitada=false;
    }else if(this.miembroOrganizacion.val02=='2'){
      this.gb_var04Habilitada=true;
      this.miembroOrganizacion.val03=false;
      this.miembroOrganizacion.val04=true;
      this.gb_var03Habilitada=false;
    }

    this.gb_var05Habilitada=true;
    if(this.miembroOrganizacion.val05=='1'){
      this.gb_var05Habilitada=false;
    } else if(this.miembroOrganizacion.val05=='2'){
      this.gb_var05Habilitada=true;
    }

  }

  cargarClaveFormulario(){
    /* Se recupera el valor del campo "clave" de la tabla de formulario */
    this.databaseProvider.listarFormulariosPorIdentificador(this.id_formulario_actual).then(data=>{
      this.m1d_formulario=data;
      console.log("m1bformulario: " + "clave[" + this.m1d_formulario[0].clave+ "]");
      this.clave= this.m1d_formulario[0].clave;
    });
  }

  cargarInformacionM1d(){
    this.databaseProvider.listarDetallesHPorFormularioyVar(this.id_formulario_actual,this.codVar).then(data=>{
      this.listaMiembroOrganizacion=data;
      this.orden= this.listaMiembroOrganizacion.length+1;
    });
  }

  public guardarModulo1d(){

    var txtVal03="0";
    if(this.miembroOrganizacion.val03){
      txtVal03="1";
    }

    var txtVal04="0";
    if(this.miembroOrganizacion.val04){
      txtVal04="1";
    }

    this.databaseProvider.crearDetalleH(
      this.id_formulario_actual,
      this.codVar,
      this.orden,
      this.miembroOrganizacion.val01,
      this.miembroOrganizacion.val02,
      txtVal03,
      txtVal04,
      this.miembroOrganizacion.val05,
      this.miembroOrganizacion.val06,
      this.miembroOrganizacion.val07,
      this.miembroOrganizacion.val08,
      this.miembroOrganizacion.val09,
      this.miembroOrganizacion.val10,
      this.miembroOrganizacion.val11,
      this.miembroOrganizacion.val12,
      "",
      "",
      "",
      "",
      this.clave,
      "insert into formulario_deth (cod_form,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroOrganizacion={val01:"",val02:"",val03:false,val04:false,val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:""};
      this.cargarInformacionM1d();
    });

    this.presentToast('MODULO 1 ORGANIZACIONES QUE PERTENECE PRODUCTOR Guardada',3000);
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
