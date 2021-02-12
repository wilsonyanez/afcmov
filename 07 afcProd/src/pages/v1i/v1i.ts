import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1iPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1i',
  templateUrl: 'v1i.html',
})
export class V1iPage {

  id_formulario_actual = 0;
  v1i_detalles = [];
  v09_01 = "";
  v09_02 = "";
  v09_03 = "";
  v09_04 = "";
  v09_05 = "";
  v09_06 = "";
  v09_07 = "";
  v09_08 = "";
  v09_09 = "";


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
    console.log('ionViewDidLoad V1iPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1iidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionV1i();
    });
  }

  cargarInformacionV1i(){

    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1i').then(data=>{
      this.v1i_detalles=data;
      this.v09_01 = this.v1i_detalles[0].valor;
      this.v09_02 = this.v1i_detalles[1].valor;
      this.v09_03 = this.v1i_detalles[2].valor;
      this.v09_04 = this.v1i_detalles[3].valor;
      this.v09_05 = this.v1i_detalles[4].valor;
      this.v09_06 = this.v1i_detalles[5].valor;
      this.v09_07 = this.v1i_detalles[6].valor;
      this.v09_08 = this.v1i_detalles[7].valor;
      this.v09_09 = this.v1i_detalles[8].valor;
    });


  }

  public guardarModuloV1i(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1i','v09_01',this.v09_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1i','v09_02',this.v09_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1i','v09_03',this.v09_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1i','v09_04',this.v09_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1i','v09_05',this.v09_05, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1i','v09_06',this.v09_06, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1i','v09_07',this.v09_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1i','v09_08',this.v09_08, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1i','v09_09',this.v09_09, ls_sql);
    this.presentToast('MODULO 8 TRABAJO FAMILIAR Y CONTRATADO Guardado',3000);
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
