import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1gPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1g',
  templateUrl: 'v1g.html',
})
export class V1gPage {
  id_formulario_actual = 0;
  v1g_formulario=[];
  clave="v1g";
  codVar = "v1g";
  orden = 1;
  recoleccion = { val01: "", val02: "", val03: "", val04: "", val05: "", val06: "", val07: "", val08: "", val09: "", val10: "", val11: "" };
  listaRecoleccion = [];
  listaProvincias = [];
  listaCantones = [];
  listaParroquias = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    private databaseProvider: DatabaseProvider,
    private toastCtrl: ToastController
  ) {
    this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo => {
      if (listo) {

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad V1gPage');
    this.storage.get("id_form_actual").then(val => {
      console.log("v1gidform:" + val);
      this.id_formulario_actual = val;
      this.cargarClaveFormulario();
      this.cargarProvincias();
      this.cargarRecoleccion();
    });
  }

  cargarClaveFormulario(){
    /* Se recupera el valor del campo "clave" de la tabla de formulario */
    this.databaseProvider.listarFormulariosPorIdentificador(this.id_formulario_actual).then(data=>{
      this.v1g_formulario=data;
      console.log("v1gformulario: " + "clave[" + this.v1g_formulario[0].clave+ "]");
      this.clave= this.v1g_formulario[0].clave;
    });
  }

  cargarProvincias() {
    this.databaseProvider.listarProvincias().then(data => {
      this.listaProvincias = data;
    });
  }

  cargarCantonesPorProvincia() {
    this.databaseProvider.listarDpaPorPadre(this.recoleccion.val08).then(data => {
      this.listaCantones = data;
    });
  }

  cargarParroquiasPorCanton() {
    this.databaseProvider.listarDpaPorPadre(this.recoleccion.val09).then(data => {
      this.listaParroquias = data;
    });
  }

  cargarRecoleccion() {
    this.databaseProvider.listarDetallesHyDPAPorFormularioyVar(this.id_formulario_actual, this.codVar,"val10").then(data => {
      this.listaRecoleccion = data;
      this.orden= this.listaRecoleccion.length+1;
    });
  }

  guardarRecoleccion() {
    this.databaseProvider.crearDetalleH(
      this.id_formulario_actual,
      this.codVar,
      this.orden,
      this.recoleccion.val01,
      this.recoleccion.val02,
      this.recoleccion.val03,
      this.recoleccion.val04,
      this.recoleccion.val05,
      this.recoleccion.val06,
      this.recoleccion.val07,
      this.recoleccion.val08,
      this.recoleccion.val09,
      this.recoleccion.val10,
      this.recoleccion.val11,
      "",
      "",
      "",
      "",
      "",
      this.clave,
      "insert into formulario_deth (cod_form,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data => {
/*      this.orden++; */
      this.recoleccion = { val01: "", val02: "", val03: "", val04: "", val05: "", val06: "", val07: "", val08: "", val09: "", val10: "",val11:""};
      this.cargarRecoleccion();
    });
    this.presentToast('Item Guardado', 3000);
  }

  presentToast(pmessage: string, pseconds: number) {
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
