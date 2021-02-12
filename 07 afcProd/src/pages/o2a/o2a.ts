import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the O2aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-o2a',
  templateUrl: 'o2a.html',
})
export class O2aPage {

  id_organizacion_actual = 0;
  o2a_detalles=[];

  v00_01="";
  v00_02="";
  v00_03="";
  v00_04="";
  v00_05="";
  v00_06="";
  v00_07="";
  v00_08="";

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
    console.log('ionViewDidLoad O2aPage');
    this.storage.get("id_orga_actual").then(val=>{
      console.log("o2aidform:"+val);
      this.id_organizacion_actual=val;
      this.cargarInformacionO2a();
    });
  }

  cargarInformacionO2a(){
    this.databaseProvider.listarDetallesPorOrganizacionyModulo(this.id_organizacion_actual,'o2a').then(data=>{
      this.o2a_detalles=data;
      this.v00_01 = this.o2a_detalles[0].valor;
      this.v00_02 = this.o2a_detalles[1].valor;
      this.v00_03 = this.o2a_detalles[2].valor;
      this.v00_04 = this.o2a_detalles[3].valor;
      this.v00_05 = this.o2a_detalles[4].valor;
      this.v00_06 = this.o2a_detalles[5].valor;
      this.v00_07 = this.o2a_detalles[6].valor;
      this.v00_08 = this.o2a_detalles[7].valor;

    });
  }

  public guardarModuloO2a(){
  var ls_sql="update organizacion_detv set valor=? where cod_orga=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2a','v00_01',this.v00_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2a','v00_02',this.v00_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2a','v00_03',this.v00_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2a','v00_04',this.v00_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2a','v00_05',this.v00_05, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2a','v00_06',this.v00_06, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2a','v00_07',this.v00_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_organizacion_actual,'o2a','v00_08',this.v00_08, ls_sql);
    this.presentToast('Modulo Datos Generales de Organizaciones (O2a) Guardado',3000);
  }

  presentToast(pmessage:string, pseconds:number) {
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
