import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the C4dPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4d',
  templateUrl: 'c4d.html',
})
export class C4dPage {

  id_cialco_actual=0;
  c4d_cialco=[];
  clave="c4d";
  codVar="c4d";
  orden=1;

  miembroFuncionamiento={val01:false,val02:false,val03:false,val04:false,val05:false,val06:false,val07:false,val08:"",val09:"",val10:"",val11:"",val12:"",val13:false,val14:"",val15:""};
  listaMiembroFuncionamiento=[];

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
      console.log("c4didcial:"+val);
      this.id_cialco_actual=val;
      this.cargarClaveCialco();
      this.cargarInformacionC4d();
    });
  }

  cargarClaveCialco(){
    /* Se recupera el valor del campo "clave" de la tabla de Cialco */
    this.databaseProvider.listarCialcosPorIdentificador(this.id_cialco_actual).then(data=>{
      this.c4d_cialco=data;
      console.log("c4dCialco: " + "clave[" + this.c4d_cialco[0].clave+ "]");
      this.clave= this.c4d_cialco[0].clave;
    });
  }

  cargarInformacionC4d(){
    this.databaseProvider.listarDetallesHPorCialcoyVar(this.id_cialco_actual,this.codVar).then(data=>{
      this.listaMiembroFuncionamiento=data;
      this.orden= this.listaMiembroFuncionamiento.length+1;
    });
  }

  public guardarModuloC4d(){
    var txtVal01="0";
    if(this.miembroFuncionamiento.val01){
      txtVal01="1";
    }

    var txtVal02="0";
    if(this.miembroFuncionamiento.val02){
      txtVal02="1";
    }

    var txtVal03="0";
    if(this.miembroFuncionamiento.val03){
      txtVal03="1";
    }

    var txtVal04="0";
    if(this.miembroFuncionamiento.val04){
      txtVal04="1";
    }

    var txtVal05="0";
    if(this.miembroFuncionamiento.val05){
      txtVal05="1";
    }

    var txtVal06="0";
    if(this.miembroFuncionamiento.val06){
      txtVal06="1";
    }

    var txtVal07="0";
    if(this.miembroFuncionamiento.val07){
      txtVal07="1";
    }

    var txtVal13="0";
    if(this.miembroFuncionamiento.val13){
      txtVal13="1";
    }

    this.databaseProvider.crearDetalleH(
      this.id_cialco_actual,
      this.codVar,
      this.orden,
      txtVal01,
      txtVal02,
      txtVal03,
      txtVal04,
      txtVal05,
      txtVal06,
      txtVal07,
      this.miembroFuncionamiento.val08,
      this.miembroFuncionamiento.val09,
      this.miembroFuncionamiento.val10,
      this.miembroFuncionamiento.val11,
      this.miembroFuncionamiento.val12,
      txtVal13,
      "",
      "",
      "",
      this.clave,
      "insert into cialco_deth (cod_cial,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
      this.miembroFuncionamiento={val01:false,val02:false,val03:false,val04:false,val05:false,val06:false,val07:false,val08:"",val09:"",val10:"",val11:"",val12:"",val13:false,val14:"",val15:""};
      this.cargarInformacionC4d();
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
