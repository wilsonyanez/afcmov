import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DatabaseProvider } from '../../providers/database/database';
import { Http } from '@angular/http';
/* import { FormGroup, FormControl } from '@angular/forms'; */

/**
 * Generated class for the EnvioinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-envioinfo',
  templateUrl: 'envioinfo.html',
})
export class EnvioinfoPage {

/*
  servidorEnvioRemoto = "http://192.168.56.8:8080";
  servicioEnvioRemoto = "afc-rest/webresources/entidades.formulario/postForm";
*/
  formularios = [];
  organizaciones = [];
  establecimientos = [];
  cialcos = [];
  id_usuario_actual = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    private databaseProvider: DatabaseProvider,
    private toastCtrl: ToastController,
    public http: Http) {

    this.viewCtrl = this.navParams.get('viewCtrl');
    this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo => {
      if (listo) {

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnvioinfoPage');
    this.storage.get("id_usuario_actual").then(val => {
      console.log("VALviewdidload:" + val);
      this.id_usuario_actual = val;
      this.cargarFormulariosAEnviar();
    });
  }

/*
  const url = require('url');
  let url = new FormControl('', Validators.required);
  let certainUrl = new FormControl('', CustomValidators.url);
  this.form = new FormGroup({
    url: url,
    certainUrl: certainUrl
  });
*/


  cargarFormulariosAEnviar() {
    this.formularios = [];
    this.organizaciones = [];
    this.establecimientos = [];
    this.cialcos = [];

    this.databaseProvider.listarFormulariosPorUsuarioyEstado(this.id_usuario_actual, "0").then(data => {
      this.formularios = data;
      if (this.formularios.length > 0) {
        console.log('EIF - Se enviaran ' + this.formularios.length + ' formularios');
      } else {
        console.log('EIF - No hay formularios para enviar');
      }
    });

    this.databaseProvider.listarOrganizacionesPorUsuarioyEstado(this.id_usuario_actual, "0").then(data => {
      this.organizaciones = data;
      if (this.organizaciones.length > 0) {
        console.log('EIF - Se enviaran ' + this.organizaciones.length + ' organizaciones');
      } else {
        console.log('EIF - No hay organizaciones para enviar');
      }
    });

    this.databaseProvider.listarEstablecimientosPorUsuarioyEstado(this.id_usuario_actual, "0").then(data => {
      this.establecimientos = data;
      if (this.establecimientos.length > 0) {
        console.log('EIF - Se enviaran ' + this.establecimientos.length + ' establecimientos');
      } else {
        console.log('EIF - No hay establecimientos para enviar');
      }
    });

    this.databaseProvider.listarCialcosPorUsuarioyEstado(this.id_usuario_actual, "0").then(data => {
      this.cialcos = data;
      if (this.cialcos.length > 0) {
        console.log('EIF - Se enviaran ' + this.cialcos.length + ' cialcos');
      } else {
        console.log('EIF - No hay cialcos para enviar');
      }
    });

  }

  enviarInformacion() {

    var ls_formulario = "";
    var ls_organizacion = "";
    var ls_establecimiento = "";
    var ls_cialco = "";
    var ls_estado_t = "1";
    var ld_fechaCarga = new Date();

/*
    if (!this.validarConexion()) {
      console.log('EIF - Mal, no debió entrar.');
      return 0;
    } else {
      console.log('EIF - Bien, debió entrar.');
      return 1;
    }

    if (!this.databaseProvider.preFormulario(ls_formulario)) {
      console.log('EIF - Mal, no debió entrar.');
      return 0;
    } else {
      console.log('EIF - Bien, debió entrar.');
      return 1;
    }

*/


    this.databaseProvider.listarFormulariosPorUsuarioyEstado(this.id_usuario_actual, "0").then(data => {
      this.formularios = data;
      if (this.formularios.length > 0) {
        for(var i=0;i<this.formularios.length;i++){
          ls_formulario = this.formularios[i].id_formulario+'^'+this.formularios[i].cod_usuario+'^'+this.formularios[i].tipo+'^'+this.formularios[i].numero+'^'+(new Date(this.formularios[i].fecha)).getTime()+'^'+this.formularios[i].referencia+'^'+this.formularios[i].estado_p+'^'+ ls_estado_t +'^'+this.formularios[i].clave +'^' + this.id_usuario_actual.length + '^' + this.formularios[i].id_formulario.toString().length + '^' + '$' ;
          console.log('EIF - Inicia proceso envío Formulario: [' + this.formularios[i].id_formulario + '][' + this.id_usuario_actual.length + '][' + this.formularios[i].id_formulario.toString().length + '][' + ls_formulario + ']');
          this.databaseProvider.enviarInformacionPorFormulario(this.id_usuario_actual, this.formularios[i].id_formulario, ls_formulario) ;
          this.databaseProvider.actualizarTabla(this.id_usuario_actual, ld_fechaCarga, this.formularios[i].id_formulario, 'formulario', ls_estado_t);
        }
      } else {
         console.log('EIF - No hay formularios para enviar');
      }
    });

    this.databaseProvider.listarOrganizacionesPorUsuarioyEstado(this.id_usuario_actual, "0").then(data => {
      this.organizaciones = data;
      if (this.organizaciones.length > 0) {
        for(var i=0;i<this.organizaciones.length;i++){
          ls_organizacion = this.organizaciones[i].id_organizacion+'^'+this.organizaciones[i].cod_usuario+'^'+this.organizaciones[i].tipo+'^'+this.organizaciones[i].numero+'^'+(new Date(this.organizaciones[i].fecha)).getTime()+'^'+this.organizaciones[i].referencia+'^'+this.organizaciones[i].estado_p+'^'+ls_estado_t+'^'+this.organizaciones[i].clave + '^' + this.id_usuario_actual.length + '^' + this.organizaciones[i].id_organizacion.toString().length + '^' + '$' ;
          console.log('EIF - Inicia proceso envío Organización:[' + this.organizaciones[i].id_organizacion + '][' + this.id_usuario_actual.length + '][' + this.organizaciones[i].id_organizacion.toString().length + '][' + ls_organizacion + ']');
          this.databaseProvider.enviarInformacionPorOrganizacion(this.id_usuario_actual, this.organizaciones[i].id_organizacion, ls_organizacion) ;
          this.databaseProvider.actualizarTabla(this.id_usuario_actual, ld_fechaCarga, this.organizaciones[i].id_organizacion, 'organizacion', ls_estado_t);
        }
      } else {
      console.log('EIF - No hay organizaciones para enviar');
      }
    });

    this.databaseProvider.listarEstablecimientosPorUsuarioyEstado(this.id_usuario_actual, "0").then(data => {
      this.establecimientos = data;
      if (this.establecimientos.length > 0) {
        for(var i=0;i<this.establecimientos.length;i++){
          ls_establecimiento = this.establecimientos[i].id_establecimiento+'^'+this.establecimientos[i].cod_usuario+'^'+this.establecimientos[i].tipo+'^'+this.establecimientos[i].numero+'^'+(new Date(this.establecimientos[i].fecha)).getTime()+'^'+this.establecimientos[i].referencia+'^'+this.establecimientos[i].estado_p+'^'+ls_estado_t+'^'+this.establecimientos[i].clave +'^' + this.id_usuario_actual.length + '^' + this.establecimientos[i].id_establecimiento.toString().length + '^' + '$' ;
          console.log('EIF - Inicia proceso envío Establecimiento:[' + this.establecimientos[i].id_establecimiento + '][' + this.id_usuario_actual.length + '][' + this.establecimientos[i].id_establecimiento.toString().length + '][' + ls_establecimiento + ']');
          this.databaseProvider.enviarInformacionPorEstablecimiento(this.id_usuario_actual, this.establecimientos[i].id_establecimiento, ls_establecimiento) ;
          this.databaseProvider.actualizarTabla(this.id_usuario_actual, ld_fechaCarga, this.establecimientos[i].id_establecimiento, 'establecimiento', ls_estado_t);
        }
      } else {
      console.log('EIF - No hay establecimientos para enviar');
      }
    });

    this.databaseProvider.listarCialcosPorUsuarioyEstado(this.id_usuario_actual, "0").then(data => {
      this.cialcos = data;
      if (this.cialcos.length > 0) {
        for(var i=0;i<this.cialcos.length;i++){
          ls_cialco = this.cialcos[i].id_cialco+'^'+this.cialcos[i].cod_usuario+'^'+this.cialcos[i].tipo+'^'+this.cialcos[i].numero+'^'+(new Date(this.cialcos[i].fecha)).getTime()+'^'+this.cialcos[i].referencia+'^'+this.cialcos[i].estado_p+'^'+ls_estado_t+'^'+this.cialcos[i].clave + '^' + this.id_usuario_actual.length + '^' + this.cialcos[i].id_cialco.toString().length + '^' + '$' ;
          console.log('EIF - Inicia proceso envío de Cialco:[' + this.cialcos[i].id_cialco + '][' + this.id_usuario_actual.length + '][' + this.cialcos[i].id_cialco.toString().length + '][' + ls_cialco + ']');
          this.databaseProvider.enviarInformacionPorCialco(this.id_usuario_actual, this.cialcos[i].id_cialco, ls_cialco);
          this.databaseProvider.actualizarTabla(this.id_usuario_actual, ld_fechaCarga, this.cialcos[i].id_cialco, 'cialco', ls_estado_t);
        }
      } else {
      console.log('EIF - No hay cialcos para enviar');
      }
    });

    this.presentToast('EI - Termina proceso envío Información.', 3000);
  }

  presentToast(as_message: string, an_seconds: number) {
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
