import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the O2bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-o2b',
  templateUrl: 'o2b.html',
})
export class O2bPage {

  id_organizacion_actual=0;
  o2b_organizacion=[];
  clave="o2b";
  codVar="o2b";
  orden=1;

  miembroOrganizacion={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:""};
  listaMiembroOrganizacion=[];

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
    console.log('ionViewDidLoad O2bPage');
    this.storage.get("id_orga_actual").then(val=>{
      console.log("o2bidorga:"+val);
      this.id_organizacion_actual=val;
      this.cargarClaveOrganizacion();
      this.cargarInformacionO2b();
    });
  }

  cargarClaveOrganizacion(){
    /* Se recupera el valor del campo "clave" de la tabla de Organizacion */
    this.databaseProvider.listarOrganizacionesPorIdentificador(this.id_organizacion_actual).then(data=>{
      this.o2b_organizacion=data;
      console.log("o2bOrganizacion: " + "clave[" + this.o2b_organizacion[0].clave+ "]");
      this.clave= this.o2b_organizacion[0].clave;
    });
  }

  cargarInformacionO2b(){
    this.databaseProvider.listarDetallesHPorOrganizacionyVar(this.id_organizacion_actual,this.codVar).then(data=>{
      this.listaMiembroOrganizacion=data;
      this.orden= this.listaMiembroOrganizacion.length+1;
    });
  }

  public guardarModuloO2b(){

    this.databaseProvider.crearDetalleH(
      this.id_organizacion_actual,
      this.codVar,
      this.orden,
      this.miembroOrganizacion.val01,
      this.miembroOrganizacion.val02,
      this.miembroOrganizacion.val03,
      this.miembroOrganizacion.val04,
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
      "insert into organizacion_deth (cod_orga,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroOrganizacion={val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:"",val13:"",val14:"",val15:""};
      this.cargarInformacionO2b();
    });

    this.presentToast('Organizacion Guardada',3000);
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
