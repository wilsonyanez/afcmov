import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TabsVPage } from '../tabs-v/tabs-v';
import { TabsOPage } from '../tabs-o/tabs-o';
import { TabsEPage } from '../tabs-e/tabs-e';
import { EnvioinfoPage } from '../envioinfo/envioinfo';
import { TabsCPage } from '../tabs-c/tabs-c';
import { LoginPage } from '../login/login';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {

  id_usuario_actual = "";
  formularios = [];
  organizaciones = [];
  establecimientos = [];
  cialcos = [];
  formularioActual = {};
  organizacionActual = {};
  establecimientoActual = {};
  cialcoActual = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private databaseProvider: DatabaseProvider) {
    this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo => {
      if (listo) {

      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
    this.storage.get("id_usuario_actual").then(val => {
      console.log("VALviewdidload:" + val);
      this.id_usuario_actual = val;
      this.cargarFormulariosPorUsuario();
      this.cargarOrganizacionesPorUsuario();
      this.cargarEstablecimientosPorUsuario();
      this.cargarCialcosPorUsuario();
    });
  }


  /* ********************************************************** */
  /* Codificación de Creación y listado de Formularios          */
  /* ********************************************************** */
  cargarFormulariosPorUsuario() {
    this.databaseProvider.listarFormulariosPorUsuario(this.id_usuario_actual).then(data => {
      this.formularios = data;
    });
  }

  crearFormulario() {
    this.databaseProvider.crearFormulario(this.id_usuario_actual, new Date()).then(res => {
      this.cargarFormulariosPorUsuario();
    });
    this.formularioActual = {};
  }

  verFormularioDetalle(idFormulario: number,tipo:string) {
    this.storage.set("id_form_actual", idFormulario);
    console.log('id Formulario: ' + idFormulario);
    if(tipo==='R'){
      this.navCtrl.push(TabsPage);
    }else if(tipo==='V'){
      this.navCtrl.push(TabsVPage);
    }
  }

  /* ************************************************************** */
  /* Codificación de Creación y listado de Formularios Verificación */
  /* ************************************************************** */
  crearFormularioVerificacion() {
    this.databaseProvider.crearFormularioV(this.id_usuario_actual, new Date()).then(res => {
      this.cargarFormulariosPorUsuario();
    });
    this.formularioActual = {};
  }

  /* ********************************************************** */
  /* Codificación de Creación y listado de Organizaciones AFC   */
  /* ********************************************************** */
  cargarOrganizacionesPorUsuario() {
    this.databaseProvider.listarOrganizacionesPorUsuario(this.id_usuario_actual).then(data => {
      this.organizaciones = data;
    });
  }

  crearOrganizacion() {
    this.databaseProvider.crearEntidad(this.id_usuario_actual, new Date(), 'A', "organizacion").then(res => {
      this.cargarOrganizacionesPorUsuario();
    });
    this.organizacionActual = {};
  }

  verEntidadDetalle(idEntidad: number, tipo:string) {
    var ls_identificador = "";
    if(tipo==='A'){
      ls_identificador = "id_orga_actual";
    }else if(tipo==='C'){
      ls_identificador = "id_cial_actual";
    }

    this.storage.set(ls_identificador, idEntidad);
    console.log(ls_identificador + ': [' + idEntidad + '] Tipo: [' + tipo + ']');

    if(tipo==='A'){
      this.navCtrl.push(TabsOPage);
    }else if(tipo==='C'){
      this.navCtrl.push(TabsCPage);
    }

  }

  /* ********************************************************** */
  /* Codificación de Creación y listado de Establecimientos AFC */
  /* ********************************************************** */
  cargarEstablecimientosPorUsuario() {
    this.databaseProvider.listarEstablecimientosPorUsuario(this.id_usuario_actual).then(data => {
      this.establecimientos = data;
    });
  }

  crearEstablecimiento() {
    this.databaseProvider.crearEstablecimiento(this.id_usuario_actual, new Date()).then(res => {
      this.cargarEstablecimientosPorUsuario();
    });
    this.establecimientoActual = {};
  }

  verEstablecimientoDetalle(idEstablecimiento: number,tipo:string) {
    this.storage.set("id_esta_actual", idEstablecimiento);
    console.log('id Establecimiento: ' + idEstablecimiento);
    this.navCtrl.push(TabsEPage);
  }

  /* ******************************************************** */

  irEnvioInfo() {
    this.navCtrl.push(EnvioinfoPage);
  }

  llenarFormulario() {

  }

  /* *********************************************************** */
  /* Codificación de Creación y listado de CIALCO                */
  /* *********************************************************** */
  cargarCialcosPorUsuario() {
    this.databaseProvider.listarCialcosPorUsuario(this.id_usuario_actual).then(data => {
      this.cialcos = data;
    });
  }

  crearCialco() {
    this.databaseProvider.crearEntidad(this.id_usuario_actual, new Date(), 'C', 'cialco').then(res => {
      this.cargarCialcosPorUsuario();
    });
    this.cialcoActual = {};
  }

  /* *********************************************************** */
  /* Codificación de cerrarSesion                                */
  /* *********************************************************** */
  cerrarSesion() {
    this.storage.set('id_usuario_actual', null);
    this.navCtrl.push(LoginPage);
  }

}
