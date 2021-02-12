import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the O2hPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-o2h',
  templateUrl: 'o2h.html',
})
export class O2hPage {
  id_organizacion_actual=0;
  o2h_organizacion=[];
  clave="o2h";
  codVar="o2h";
  orden=1;
  miembroGrupo={val01:"",val02:"",val03:"",val04:"",val05:"",val06:""};
  listaMiembrosGrupo=[];

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
    console.log('ionViewDidLoad O2hPage');
    this.storage.get("id_orga_actual").then(val=>{
      console.log("O2hidform:"+val);
      this.id_organizacion_actual=val;
      this.cargarClaveOrganizacion();
      this.cargarMiembrosGrupoProducto();
    });
  }

  cargarClaveOrganizacion(){
    /* Se recupera el valor del campo "clave" de la tabla de Organizacion */
    this.databaseProvider.listarOrganizacionesPorIdentificador(this.id_organizacion_actual).then(data=>{
      this.o2h_organizacion=data;
      console.log("o2hOrganizacion: " + "clave[" + this.o2h_organizacion[0].clave+ "]");
      this.clave= this.o2h_organizacion[0].clave;
    });
  }

  cargarMiembrosGrupoProducto(){
    this.databaseProvider.listarDetallesHPorOrganizacionyVar(this.id_organizacion_actual,this.codVar).then(data=>{
      this.listaMiembrosGrupo=data;
      this.orden= this.listaMiembrosGrupo.length+1;
    });
  }

  guardarMiembroGrupoProducto(){
    this.databaseProvider.crearDetalleH(
      this.id_organizacion_actual,
      this.codVar,
      this.orden,
      this.miembroGrupo.val01,
      this.miembroGrupo.val02,
      this.miembroGrupo.val03,
      this.miembroGrupo.val04,
      this.miembroGrupo.val05,
      this.miembroGrupo.val06,
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
      "insert into organizacion_deth (cod_orga,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroGrupo={val01:"",val02:"",val03:"",val04:"",val05:"",val06:""};
      this.cargarMiembrosGrupoProducto();
    });
    this.presentToast('Miembro Guardado',3000);
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
