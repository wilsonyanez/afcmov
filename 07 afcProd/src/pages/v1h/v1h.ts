import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the V1hPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-v1h',
  templateUrl: 'v1h.html',
})
export class V1hPage {

  id_formulario_actual = 0;
  v1h_formulario=[];
  clave="v1h";
  v08_01 = "";
  v08_02 = "";
  v08_03 = "";
  v08_04 = "";
  v1h_detalles=[];

  codVar = "v1h";
  orden = 1;

  apiproducto = {val00:"",val01:"",val02:"",val03:"",val04:"",val05:"",val06:"",val07:"",val08:"",val09:"",val10:"",val11:"",val12:""};
  listaApiproducto = [];
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
    console.log('ionViewDidLoad V1hPage');
    this.storage.get("id_form_actual").then(val => {
      console.log("v1hidform:" + val);
      this.id_formulario_actual = val;
      this.cargarClaveFormulario();
      this.cargarProvincias();
      this.cargarInformacionV1h();
      this.cargarApiProductos();
    });

  }

  cargarClaveFormulario(){
    /* Se recupera el valor del campo "clave" de la tabla de formulario */
    this.databaseProvider.listarFormulariosPorIdentificador(this.id_formulario_actual).then(data=>{
      this.v1h_formulario=data;
      console.log("v1gformulario: " + "clave[" + this.v1h_formulario[0].clave+ "]");
      this.clave= this.v1h_formulario[0].clave;
    });
  }

  cargarInformacionV1h(){

    this.databaseProvider.listarDetallesPorFormularioyModulo(this.id_formulario_actual,'v1h').then(data=>{
      this.v1h_detalles=data;
      this.v08_01 = this.v1h_detalles[0].valor;
      this.v08_02 = this.v1h_detalles[1].valor;
      this.v08_03 = this.v1h_detalles[2].valor;
      this.v08_04 = this.v1h_detalles[3].valor;
/*      this.v08_05 = this.v1h_detalles[4].valor; */
    });
  }

  public guardarModuloV1h(){
    var ls_sql = "update formulario_detv set valor=? where cod_form=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1h','v08_01',this.v08_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1h','v08_02',this.v08_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1h','v08_03',this.v08_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1h','v08_04',this.v08_04, ls_sql);
/*    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_formulario_actual,'v1h','v08_05',this.v08_05, ls_sql); */
    this.presentToast('MODULO 7 APICULTURA Guardadas',3000);
  }

  cargarProvincias() {
    this.databaseProvider.listarProvincias().then(data => {
      this.listaProvincias = data;
    });
  }

  cargarCantonesPorProvincia() {
    this.databaseProvider.listarDpaPorPadre(this.apiproducto.val08).then(data => {
      this.listaCantones = data;
    });
  }

  cargarParroquiasPorCanton() {
    this.databaseProvider.listarDpaPorPadre(this.apiproducto.val09).then(data => {
      this.listaParroquias = data;
    });
  }

  cargarApiProductos() {
    this.databaseProvider.listarDetallesHyDPAPorFormularioyVar(this.id_formulario_actual, this.codVar,"val10").then(data => {
      this.listaApiproducto = data;
    });
  }

  guardarApiProducto() {
    this.databaseProvider.crearDetalleH(
      this.id_formulario_actual,
      this.codVar,
      this.orden,
      this.apiproducto.val00,
      this.apiproducto.val01,
      this.apiproducto.val02,
      this.apiproducto.val03,
      this.apiproducto.val04,
      this.apiproducto.val05,
      this.apiproducto.val06,
      this.apiproducto.val07,
      this.apiproducto.val08,
      this.apiproducto.val09,
      this.apiproducto.val10,
      this.apiproducto.val11,
      this.apiproducto.val12,
      "",
      "",
      "",
      this.clave,
      "insert into formulario_deth (cod_form,cod_var,orden,val01,val02,val03,val04,val05,val06,val07,val08,val09,val10,val11,val12,val13,val14,val15,val16,clave) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    ).then(data => {
      this.orden++;
      this.apiproducto = { val00: "", val01: "", val02: "", val03: "", val04: "", val05: "", val06: "", val07: "", val08: "", val09: "", val10: "" , val11: "" , val12: "" };
      this.cargarApiProductos();
    });
    this.presentToast('Producto Guardado', 3000);
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
