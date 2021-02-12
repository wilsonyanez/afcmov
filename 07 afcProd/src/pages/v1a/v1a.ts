import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ListadoPage } from '../listado/listado';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the V1aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1a',
  templateUrl: 'v1a.html',
})
export class V1aPage {

  id_formulario_actual=0;
  v1a_detalles=[];

  v05_00 = "";
  v05_01 = "";
  v05_02 = "";
  v05_03 = "";
  v05_04 = "";
  v05_05 = "";
  v05_06 = "";
  v05_07 = "";
  v05_08 = "";
  v05_09 = "";
  v05_10 = "";
  v05_11 = "";

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
    console.log('ionViewDidLoad V1aPage');
    this.storage.get("id_form_actual").then(val=>{
      console.log("v1aidform:"+val);
      this.id_formulario_actual=val;
      this.cargarInformacionV1a();
    });
  }

  cargarInformacionV1a(){

    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1a').then(data=>{
      this.v1a_detalles=data;
      this.v05_00 = this.v1a_detalles[0].valor;
      this.v05_01 = this.v1a_detalles[1].valor;
      this.v05_02 = this.v1a_detalles[2].valor;
      this.v05_03 = this.v1a_detalles[3].valor;
      this.v05_04 = this.v1a_detalles[4].valor;
      this.v05_05 = this.v1a_detalles[5].valor;
      this.v05_06 = this.v1a_detalles[6].valor;
      this.v05_07 = this.v1a_detalles[7].valor;
      this.v05_08 = this.v1a_detalles[8].valor;
      this.v05_09 = this.v1a_detalles[9].valor;
      this.v05_10 = this.v1a_detalles[10].valor;
      this.v05_11 = this.v1a_detalles[11].valor;
    });

  }

  public guardarModuloV1a(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_00',this.v05_00, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_01',this.v05_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_02',this.v05_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_03',this.v05_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_04',this.v05_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_05',this.v05_05, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_06',this.v05_06, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_07',this.v05_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_08',this.v05_08, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_09',this.v05_09, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_10',this.v05_10, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1a','v05_11',this.v05_11, ls_sql);
    this.presentToast('AGRICULTURA FAMILIAR CAMPESINA - VALIDACIÓN PRODUCTORES Guardado',3000);
  }

  public onClickCancel() {
    //
    this.navCtrl.push(ListadoPage);
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
