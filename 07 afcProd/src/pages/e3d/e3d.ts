import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the E3dPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-e3d',
  templateUrl: 'e3d.html',
})
export class E3dPage {
  id_establecimiento_actual=0;
  e3d_establecimiento=[];
  clave="e3d";
  codVar="e3d";
  orden=1;
  miembroGrupo={val01:"",val02:"",val03:"",val04:""};
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
    console.log('ionViewDidLoad E3dPage');
    this.storage.get("id_esta_actual").then(val=>{
      console.log("e3didform:"+val);
      this.id_establecimiento_actual=val;
      this.cargarClaveEstablecimiento();
      this.cargarMiembrosGrupoProveedor();
    });
  }

  cargarClaveEstablecimiento(){
    /* Se recupera el valor del campo "clave" de la tabla de Establecimiento */
    this.databaseProvider.listarEstablecimientosPorIdentificador(this.id_establecimiento_actual).then(data=>{
      this.e3d_establecimiento=data;
      console.log("e3dEstablecimiento: " + "clave[" + this.e3d_establecimiento[0].clave+ "]");
      this.clave= this.e3d_establecimiento[0].clave;
    });
  }

  cargarMiembrosGrupoProveedor(){
    this.databaseProvider.listarDetallesHPorEstablecimientoyVar(this.id_establecimiento_actual,this.codVar).then(data=>{
      this.listaMiembrosGrupo=data;
      this.orden= this.listaMiembrosGrupo.length+1;
    });
  }

  guardarMiembroGrupoProveedor(){
    this.databaseProvider.crearDetalleH(
      this.id_establecimiento_actual,
      this.codVar,
      this.orden,
      this.miembroGrupo.val01,
      this.miembroGrupo.val02,
      this.miembroGrupo.val03,
      this.miembroGrupo.val04,
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
      "insert into establecimiento_deth (cod_esta,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data=>{
/*      this.orden++; */
      this.miembroGrupo={val01:"",val02:"",val03:"",val04:""};
      this.cargarMiembrosGrupoProveedor();
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
