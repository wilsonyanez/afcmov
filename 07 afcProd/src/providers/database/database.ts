import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  servidorEnvioRemoto = "http://192.168.56.9:8080";
/*  servidorEnvioRemoto = "http://10.10.1.49:8080"; */
  servicioEnvioRemotoForm = "afc-rest/webresources/entidades.formulario/postForm";
  servicioEnvioRemotoOrga = "afc-rest/webresources/entidades.organizacion/postOrga";
  servicioEnvioRemotoEsta = "afc-rest/webresources/entidades.establecimiento/postEsta";
  servicioEnvioRemotoCial = "afc-rest/webresources/entidades.cialco/postCial";
  id_usuario_actual = "";

  /* Control de entrada de datos de nombre, cédula de identidad, horas y días trabajados */
  /* Se movío este dato de variables globales */

  database: SQLiteObject;
  private dataBaseReady: BehaviorSubject<boolean>;

  constructor(
    public http: Http,
    private sqlitePorter: SQLitePorter,
    private storage: Storage,
    private sqlite: SQLite,
    private platform: Platform,
    private datePipe: DatePipe) {

    this.dataBaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'afc_prod.db', location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('base_llena').then(val => {
            if (val) {
              this.dataBaseReady.next(true);
            } else {
              this.llenarBaseDeDatos();
            }
          })
        });
    });
  }

  llenarBaseDeDatos() {
    this.http.get('assets/crear_base.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.dataBaseReady.next(true);
            this.storage.set('base_llena', true);
          })
      });
  }

  obtenerEstadoDeBBDD() {
    return this.dataBaseReady.asObservable();
  }

  obtenerIdUsuarioStorage() {
    return this.storage.get("id_usuario_actual");
  }

  validarUsuario(pusuario, ppassword) {
    let parametros = [pusuario, ppassword];
    return this.database.executeSql("select id_usuario from usuario where usuario=? and clave=?", parametros).then(data => {
      var b = "err0";
      //let lstUsuarios=[];
      console.log("Nro. usuarios: [", data.rows.length + "]");
      if (data.rows.length > 0) {
        var i = data.rows.item(0).id_usuario;
        this.storage.set("id_usuario_actual", i);
        console.log("id:" + i);
        b = "ok";
      } else {
        b = "err1"
        this.storage.set("id_usuario_actual", null);
      }
      return b;
    }, err => {
      console.log("Error:", err);
      return "error" + err;
    });

  }

  /* **************************************************** */
  /* Codificación de Creación y listado de Formularios    */
  /* **************************************************** */
  listarFormulariosPorIdentificador(an_id_formulario: number) {
    console.log("dbts lfpI idForm: " + an_id_formulario.toString());
    let parametros = [an_id_formulario];
    return this.database.executeSql("select * from formulario where id_formulario=?", parametros).then(data => {
      let formularios = [];
      console.log("dbts lfpI lengthrows:" + data.rows.length);
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          console.log("dbts lfpI for:" + "i[" + i.toString() + "] Contador["+ data.rows.item(i) + "] clave[" + data.rows.item(i).clave+ "]");
          formularios.push({
            id_formulario: data.rows.item(i).id_formulario,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return formularios;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarFormulariosPorUsuario(codUsuario: string) {
    let parametros = [codUsuario];
    console.log("dbts lfpU codUsu: " + codUsuario);
    return this.database.executeSql("select * from formulario where cod_usuario=? order by fecha desc", parametros).then(data => {
      let formularios = [];
      if (data.rows.length > 0) {
        console.log("dbts lfpU lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          formularios.push({
            id_formulario: data.rows.item(i).id_formulario,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return formularios;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarFormulariosPorUsuarioyEstado(codUsuario: string,estadoT:string) {
    let parametros = [codUsuario,estadoT];
    console.log("dbts lfpU codUsu: " + codUsuario);
    return this.database.executeSql("select * from formulario where cod_usuario=? and estado_t=? order by id_formulario", parametros).then(data => {
      let formularios = [];
      if (data.rows.length > 0) {
        console.log("dbts lfpU lengthrows: " + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          formularios.push({
            id_formulario: data.rows.item(i).id_formulario,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return formularios;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  crearFormulario(as_codUsuario: string, ad_fecha: Date) {
    var ln_codform = 0;
    var ls_clave = "";
    let la_dataForm = [as_codUsuario, ad_fecha];

    return this.database.executeSql("insert into formulario (cod_usuario,tipo,numero,fecha,referencia,estado_p,estado_t) values(?,'R','',?,'',0,0);", la_dataForm).then(res => {
      return this.database.executeSql("select max(id_formulario) as max from formulario", []).then(data => {

        console.log("max:" + data.rows.item(0).max);
        ln_codform = data.rows.item(0).max;
        ls_clave = as_codUsuario + ln_codform.toString() + this.datePipe.transform(ad_fecha, 'yyyyMMddHHmmss') ;
        console.log("Clave Año mes dia hora minutos: " + ls_clave);

        /* Se actualiza el campo "clave" de la tabla de formulario */
        let la_parametros = [ls_clave, ln_codform];
        var ls_sql="update formulario set clave = ? where id_formulario = ? ";
        this.database.executeSql(ls_sql, la_parametros).then(res3 => {
          return res3;
        }, err => {
          console.log("Error:" + err);
          return [];
        });

        var conm1a = "";
        for (var i = 1; i <= 23; i++) {
          if (i < 10) {
            conm1a = conm1a + "(?1,'m1a', " + i + ",'v00_0" + i + "', ?2),"
          } else {
            conm1a = conm1a + "(?1,'m1a', " + i + ",'v00_" + i + "', ?2),"
          }
        }

        var conm1c = "";
        for (i = 1; i <= 2; i++) {
          if (i < 10) {
            conm1c = conm1c + "(?1,'m1c', " + i + ",'v01_0" + i + "', ?2),"
          } else {
            conm1c = conm1c + "(?1,'m1c', " + i + ",'v01_" + i + "', ?2),"
          }
        }

        var conm1f = "";
        for (i = 1; i <= 18; i++) {
          if (i < 10) {
            conm1f = conm1f + "(?1,'m1f', " + i + ",'v02_0" + i + "', ?2),"
          } else {
            conm1f = conm1f + "(?1,'m1f', " + i + ",'v02_" + i + "', ?2),"
          }
        }

        var conm1g = "";
        for (i = 1; i <= 14; i++) {
          if (i < 10) {
            conm1g = conm1g + "(?1,'m1g', " + i + ",'v03_0" + i + "', ?2),"
          } else {
            conm1g = conm1g + "(?1,'m1g', " + i + ",'v03_" + i + "', ?2),"
          }
        }

        var conm1h = "";
        for (i = 1; i <= 10; i++) {
          if (i < 10) {
            conm1h = conm1h + "(?1,'m1h', " + i + ",'v04_0" + i + "', ?2),"
          } else {
            conm1h = conm1h + "(?1,'m1h', " + i + ",'v04_" + i + "', ?2),"
          }
        }

        let la_vars = [ln_codform, ls_clave];
        var ls_sqlMultipleInsert = "insert into formulario_detv (cod_form,cod_mod,orden,cod_preg,clave) values " +
          conm1a +
          conm1c +
          conm1f +
          conm1g +
          conm1h +
          "(?1,'m1h',11,'v14_11',?2)"
          ;

        return this.database.executeSql(ls_sqlMultipleInsert, la_vars).then(res2 => {
          return res2;
        }, err => {
         console.log("Error:" + err);
         return [];
        });

      });

    });

  }

  listarDetallesPorFormularioyModulo(codForm: number, codMod: string) {
    let parametros = [codForm, codMod];
    return this.database.executeSql("select * from formulario_detv where cod_form=? and cod_mod=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpym lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_fdetv: data.rows.item(i).id_fdetv,
            cod_form: data.rows.item(i).cod_form,
            cod_mod: data.rows.item(i).cod_mod,
            orden: data.rows.item(i).orden,
            cod_preg: data.rows.item(i).cod_preg,
            valor: data.rows.item(i).valor,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }


  listarDetallesHPorFormularioyVar(codForm: number, codVar: string) {
    let parametros = [codForm, codVar];
    return this.database.executeSql("select * from formulario_deth where cod_form=? and cod_var=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpfyv lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_fdeth: data.rows.item(i).id_fdeth,
            cod_form: data.rows.item(i).cod_form,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHyDPAPorFormularioyVar(codForm: number, codVar: string, colDPAParr:string) {
    let parametros = [codForm, codVar];
    return this.database.executeSql("select d.*,pro.texto as pro,can.texto as can,par.texto as par from formulario_deth d,dpa par, dpa can, dpa pro where d."+colDPAParr+"=par.id_dpa and par.cod_dpa=can.id_dpa and can.cod_dpa=pro.id_dpa and cod_form=? and cod_var=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpfyv lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_fdeth: data.rows.item(i).id_fdeth,
            cod_form: data.rows.item(i).cod_form,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            clave: data.rows.item(i).clave,
            pro: data.rows.item(i).pro,
            can: data.rows.item(i).can,
            par: data.rows.item(i).par
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesVPorFormulario(codForm: number) {
    let parametros = [codForm];
    return this.database.executeSql("select * from formulario_detv where cod_form=? order by id_fdetv", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpym lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_fdetv: data.rows.item(i).id_fdetv,
            cod_form: data.rows.item(i).cod_form,
            cod_mod: data.rows.item(i).cod_mod,
            orden: data.rows.item(i).orden,
            cod_preg: data.rows.item(i).cod_preg,
            valor: data.rows.item(i).valor,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHPorFormulario(codForm: number) {
    let parametros = [codForm];
    return this.database.executeSql("select * from formulario_deth where cod_form=? order by id_fdeth", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpfyv lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_fdeth: data.rows.item(i).id_fdeth,
            cod_form: data.rows.item(i).cod_form,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }


  /* **************************************************** */

  /* **************************************************** */
  /* Codificación de Creación y listado de Formulario Ver */
  /* **************************************************** */
  crearFormularioV(as_codUsuario: string, ad_fecha: Date) {
    var ln_codform = 0;
    var ls_clave = "";
    let la_dataForm = [as_codUsuario, ad_fecha, ls_clave];
    return this.database.executeSql("insert into formulario (cod_usuario,tipo,numero,fecha,referencia,estado_p,estado_t,clave) values(?,'V','',?,'',0,0,?);", la_dataForm).then(res => {
      return this.database.executeSql("select max(id_formulario) as max from formulario", []).then(data => {

        console.log("max:" + data.rows.item(0).max);
        ln_codform = data.rows.item(0).max;
        ls_clave = as_codUsuario + ln_codform.toString() + this.datePipe.transform(ad_fecha, 'yyyyMMddHHmmss') ;

        /* Se actualiza el campo "clave" de la tabla de formulario */
        let la_parametros = [ls_clave, ln_codform];
        var ls_sql="update formulario set clave = ? where id_formulario = ? ";
        this.database.executeSql(ls_sql, la_parametros).then(res3 => {
          return res3;
        }, err => {
          console.log("Error:" + err);
          return [];
        });

        var conv1a = "";
        for (var i = 1; i <= 11; i++) {
          if (i < 10) {
            conv1a = conv1a + "(?1,'v1a', " + i + ",'v05_0" + i + "', ?2),"
          } else {
            conv1a = conv1a + "(?1,'v1a', " + i + ",'v05_" + i + "', ?2),"
          }
        }

        var conv1b = "";
        for (i = 1; i <= 24; i++) {
          if (i < 10) {
            conv1b = conv1b + "(?1,'v1b', " + i + ",'v06_0" + i + "', ?2),"
          } else {
            conv1b = conv1b + "(?1,'v1b', " + i + ",'v06_" + i + "', ?2),"
          }
        }

        var conv1e = "";
        for (i = 1; i <= 5; i++) {
          if (i < 10) {
            conv1e = conv1e + "(?1,'v1e', " + i + ",'v07_0" + i + "', ?2),"
          } else {
            conv1e = conv1e + "(?1,'v1e', " + i + ",'v07_" + i + "', ?2),"
          }
        }

        var conv1h = "";
        for (i = 1; i <= 4; i++) {
          if (i < 10) {
            conv1h = conv1h + "(?1,'v1h', " + i + ",'v08_0" + i + "', ?2),"
          } else {
            conv1h = conv1h + "(?1,'v1h', " + i + ",'v08_" + i + "', ?2),"
          }
        }

        var conv1i = "";
        for (i = 1; i <= 9; i++) {
          if (i < 10) {
            conv1i = conv1i + "(?1,'v1i', " + i + ",'v09_0" + i + "', ?2),"
          } else {
            conv1i = conv1i + "(?1,'v1i', " + i + ",'v09_" + i + "', ?2),"
          }
        }

        var conv1j = "";
        for (i = 1; i <= 19; i++) {
          if (i < 10) {
            conv1j = conv1j + "(?1,'v1j', " + i + ",'v10_0" + i + "', ?2),"
          } else {
            conv1j = conv1j + "(?1,'v1j', " + i + ",'v10_" + i + "', ?2),"
          }
        }

        var conv1k = "";
        for (i = 1; i <= 20; i++) {
          if (i < 10) {
            conv1k = conv1k + "(?1,'v1k', " + i + ",'v11_0" + i + "', ?2),"
          } else {
            conv1k = conv1k + "(?1,'v1k', " + i + ",'v11_" + i + "', ?2),"
          }
        }

        var conv1l = "";
        for (i = 1; i <= 36; i++) {
          if (i < 10) {
            conv1l = conv1l + "(?1,'v1l', " + i + ",'v12_0" + i + "', ?2),"
          } else {
            conv1l = conv1l + "(?1,'v1l', " + i + ",'v12_" + i + "', ?2),"
          }
        }

        var conv1m = "";
        for (i = 1; i <= 47; i++) {
          if (i < 10) {
            conv1m = conv1m + "(?1,'v1m', " + i + ",'v13_0" + i + "', ?2),"
          } else {
            conv1m = conv1m + "(?1,'v1m', " + i + ",'v13_" + i + "', ?2),"
          }
        }

        var conv1n = "";
        for (i = 1; i <= 4; i++) {
          if (i < 10) {
            conv1n = conv1n + "(?1,'v1n', " + i + ",'v14_0" + i + "', ?2),"
          } else {
            conv1n = conv1n + "(?1,'v1n', " + i + ",'v14_" + i + "', ?2),"
          }
        }

        let la_vars = [ln_codform, ls_clave];
        var ls_sqlMultipleInsert = "insert into formulario_detv (cod_form,cod_mod,orden,cod_preg,clave) values " +
          conv1a +
          conv1b +
          conv1e +
          conv1h +
          conv1i +
          conv1j +
          conv1k +
          conv1l +
          conv1m +
          conv1n +
          "(?1,'v1n',5,'v14_05',?2)"
          ;

        return this.database.executeSql(ls_sqlMultipleInsert, la_vars).then(res2 => {
          return res2;
        }, err => {
         console.log("Error:" + err);
         return [];
        });

      });

    });

  }

  /* **************************************************** */
  /* Codificación de Creación y listado de Organizaciones */
  /* **************************************************** */
  crearEntidad( as_codUsuario: string, ad_fecha: Date, as_tipo: string, as_entidad: string ) {
    var ln_codentidad = 0;
    var ls_clave = "";
    var i = 0;
    var sqlVariablesInsert = "";
    let la_dataEntidad = [as_codUsuario, as_tipo, ad_fecha, ls_clave];
    return this.database.executeSql("insert into "+ as_entidad + " (cod_usuario,tipo,numero,fecha,referencia,estado_p,estado_t,clave) values(?,?,'',?,'',0,0,?);", la_dataEntidad).then(res => {
      return this.database.executeSql("select max(id_" + as_entidad + ") as max from "+as_entidad, []).then(data => {

        console.log("max:" + data.rows.item(0).max);
        ln_codentidad= data.rows.item(0).max;
        ls_clave = as_codUsuario + ln_codentidad.toString() + this.datePipe.transform(ad_fecha, 'yyyyMMddHHmmss') ;

        /* Se actualiza el campo "clave" de la tabla de entidad (formulario, organizacion, establecimiento, cialco) enviada como parámetro */
        let la_parametros = [ls_clave, ln_codentidad];
        var ls_sql="update " + as_entidad + " set clave = ? where id_" + as_entidad + " = ? ";
        this.database.executeSql(ls_sql, la_parametros).then(res3 => {
          return res3;
        }, err => {
          console.log("Error:" + err);
          return [];
        });

        let la_vars = [ln_codentidad, ls_clave];
        if (as_tipo === "A" ) {
          var cono2a = "";
          for (i = 1; i <= 8; i++) {
            if (i < 10) {
              cono2a = cono2a + "(?1,'o2a', " + i + ",'v00_0" + i + "', ?2),"
            } else {
              cono2a = cono2a + "(?1,'o2a', " + i + ",'v00_" + i + "', ?2),"
            }
          }
          var cono2d = "";
          for (i = 1; i <= 13; i++) {
            if (i < 10) {
              cono2d = cono2d + "(?1,'o2d', " + i + ",'v01_0" + i + "', ?2),"
            } else {
              cono2d = cono2d + "(?1,'o2d', " + i + ",'v01_" + i + "', ?2),"
            }
          }
          var cono2e = "";
          for (i = 1; i <= 14; i++) {
            if (i < 10) {
              cono2e = cono2e + "(?1,'o2e', " + i + ",'v02_0" + i + "', ?2),"
            } else {
              cono2e = cono2e + "(?1,'o2e', " + i + ",'v02_" + i + "', ?2),"
            }
          }
          var cono2f = "";
          for (i = 1; i <= 12; i++) {
            if (i < 10) {
              cono2f = cono2f + "(?1,'o2f', " + i + ",'v03_0" + i + "', ?2),"
            } else {
              cono2f = cono2f + "(?1,'o2f', " + i + ",'v03_" + i + "', ?2),"
            }
          }
          var cono2g = "";
          for (i = 1; i <= 13; i++) {
            if (i < 10) {
              cono2g = cono2g + "(?1,'o2g', " + i + ",'v04_0" + i + "', ?2),"
            } else {
              cono2g = cono2g + "(?1,'o2g', " + i + ",'v04_" + i + "', ?2),"
            }
          }

          sqlVariablesInsert = cono2a + cono2d + cono2e + cono2f + cono2g + "(?1,'o2g',14,'v04_14',?2)" ;

        } else if(as_tipo === 'C'){
          var conc4a = "";
          for (i = 1; i <= 12; i++) {
            if (i < 10) {
              conc4a = conc4a + "(?1,'c4a', " + i + ",'v00_0" + i + "', ?2),"
            } else {
              conc4a = conc4a + "(?1,'c4a', " + i + ",'v00_" + i + "', ?2),"
            }
          }
          var conc4e = "";
          for (i = 1; i <= 11; i++) {
            if (i < 10) {
              conc4e = conc4e + "(?1,'c4e', " + i + ",'v01_0" + i + "', ?2),"
            } else {
              conc4e = conc4e + "(?1,'c4e', " + i + ",'v01_" + i + "', ?2),"
            }
          }
/*          var conc4f = "";
          for (i = 1; i <= 12; i++) {
            if (i < 10) {
              conc4f = conc4f + "(?1,'c4f', " + i + ",'v02_0" + i + "', ?2),"
            } else {
              conc4f = conc4f + "(?1,'c4f', " + i + ",'v02_" + i + "', ?2),"
            }
          }
          var conc4g = "";
          for (i = 1; i <= 13; i++) {
            if (i < 10) {
              conc4g = conc4g + "(?1,'c4g', " + i + ",'v03_0" + i + "', ?2),"
            } else {
              conc4g = conc4g + "(?1,'c4g', " + i + ",'v03_" + i + "', ?2),"
            }
          }
*/
/*          sqlVariablesInsert = conc4a + conc4e + conc4f + conc4g + "(?1,'c4g',14,'v03_14',?2)" ; */
          sqlVariablesInsert = conc4a + conc4e + "(?1,'c4e',12,'v01_12',?2)" ;

        }

        var sqlMultipleInsert = "insert into " + as_entidad + "_detv (cod_" + as_entidad.substring(0, 4) + ",cod_mod,orden,cod_preg,clave) values " + sqlVariablesInsert ;

        return this.database.executeSql(sqlMultipleInsert, la_vars).then(res2 => {
          return res2;
        }, err => {
          console.log("Error:" + err);
          return [];
        });

      });

    });

  }

  listarOrganizacionesPorIdentificador(idOrganizacion: number) {
    let parametros = [idOrganizacion];
    console.log("dbts lopI codUsu:" + idOrganizacion.toString());
    return this.database.executeSql("select * from organizacion where id_organizacion=? order by id_organizacion", parametros).then(data => {
      let organizaciones = [];
      if (data.rows.length > 0) {
        console.log("dbts lopU lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          organizaciones.push({
            id_organizacion: data.rows.item(i).id_organizacion,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return organizaciones;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }


  listarOrganizacionesPorUsuario(codUsuario: string) {
    let parametros = [codUsuario];
    console.log("dbts lopU codUsu:" + codUsuario);
    return this.database.executeSql("select * from organizacion where cod_usuario=? order by fecha desc", parametros).then(data => {
      let organizaciones = [];
      if (data.rows.length > 0) {
        console.log("dbts lopU lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          organizaciones.push({
            id_organizacion: data.rows.item(i).id_organizacion,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return organizaciones;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarOrganizacionesPorUsuarioyEstado(as_codUsuario: string, as_estadoT:string) {
    let parametros = [as_codUsuario, as_estadoT];
    console.log("dbts lopU codUsu:" + as_codUsuario);
    return this.database.executeSql("select * from organizacion where cod_usuario=? and estado_t =? order by id_organizacion", parametros).then(data => {
      let organizaciones = [];
      if (data.rows.length > 0) {
        console.log("dbts lopU lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          organizaciones.push({
            id_organizacion: data.rows.item(i).id_organizacion,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return organizaciones;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }


  listarDetallesPorOrganizacionyModulo(codOrga: number, codMod: string) {
    let parametros = [codOrga, codMod];
    return this.database.executeSql("select * from organizacion_detv where cod_orga=? and cod_mod=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpoym lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_odetv: data.rows.item(i).id_odetv,
            cod_orga: data.rows.item(i).cod_orga,
            cod_mod: data.rows.item(i).cod_mod,
            orden: data.rows.item(i).orden,
            cod_preg: data.rows.item(i).cod_preg,
            valor: data.rows.item(i).valor,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHPorOrganizacionyVar(codOrga: number, codVar: string) {
    let parametros = [codOrga, codVar];
    return this.database.executeSql("select * from organizacion_deth where cod_orga=? and cod_var=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldhpoyv lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_odeth: data.rows.item(i).id_odeth,
            cod_orga: data.rows.item(i).cod_orga,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesVPorOrganizacion(an_codOrga: number) {
    let parametros = [an_codOrga];
    return this.database.executeSql("select * from organizacion_detv where cod_orga=? order by id_odetv", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldvpo lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_odetv: data.rows.item(i).id_odetv,
            cod_orga: data.rows.item(i).cod_orga,
            cod_mod: data.rows.item(i).cod_mod,
            orden: data.rows.item(i).orden,
            cod_preg: data.rows.item(i).cod_preg,
            valor: data.rows.item(i).valor,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }


  listarDetallesHPorOrganizacion(an_codOrga: number) {
    let parametros = [an_codOrga];
    return this.database.executeSql("select * from organizacion_deth where cod_orga=? order by id_odeth", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldhpo lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_odeth: data.rows.item(i).id_odeth,
            cod_orga: data.rows.item(i).cod_orga,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  /* **************************************************** */

  /* ***************************************************** */
  /* Codificación de Creación y listado de Establecimiento */
  /* ***************************************************** */
  crearEstablecimiento(as_codUsuario: string, ad_fecha: Date) {
    var ln_codesta = 0;
    var ls_clave = "";
    let la_dataEsta = [as_codUsuario, ad_fecha,ls_clave];
    return this.database.executeSql("insert into establecimiento (cod_usuario,tipo,numero,fecha,referencia,estado_p,estado_t,clave) values(?,'V','',?,'',0,0,?);", la_dataEsta).then(res => {
      return this.database.executeSql("select max(id_establecimiento) as max from establecimiento", []).then(data => {

        console.log("max:" + data.rows.item(0).max);
        ln_codesta= data.rows.item(0).max;
        ls_clave = as_codUsuario + ln_codesta.toString() + this.datePipe.transform(ad_fecha, 'yyyyMMddHHmmss') ;

        /* Se actualiza el campo "clave" de la tabla de formulario */
        let la_parametros = [ls_clave, ln_codesta];
        var ls_sql="update establecimiento set clave = ? where id_establecimiento = ? ";
        this.database.executeSql(ls_sql, la_parametros).then(res3 => {
          return res3;
        }, err => {
          console.log("Error:" + err);
          return [];
        });

        var cone3a = "";
        for (var i = 1; i <= 19; i++) {
          if (i < 10) {
            cone3a = cone3a + "(?1,'e3a', " + i + ",'v00_0" + i + "', ?2),"
          } else {
            cone3a = cone3a + "(?1,'e3a', " + i + ",'v00_" + i + "', ?2),"
          }
        }
        var cone3b = "";
        for (i = 1; i <= 15; i++) {
          if (i < 10) {
            cone3b = cone3b + "(?1,'e3b', " + i + ",'v01_0" + i + "', ?2),"
          } else {
            cone3b = cone3b + "(?1,'e3b', " + i + ",'v01_" + i + "', ?2),"
          }
        }
        var cone3e = "";
        for (i = 1; i <= 1; i++) {
          if (i < 10) {
            cone3e = cone3e + "(?1,'e3e', " + i + ",'v02_0" + i + "', ?2),"
          } else {
            cone3e = cone3e + "(?1,'e3e', " + i + ",'v02_" + i + "', ?2),"
          }
        }
        var cone3f = "";
        for (i = 1; i <= 10; i++) {
          if (i < 10) {
            cone3f = cone3f + "(?1,'e3f', " + i + ",'v03_0" + i + "', ?2),"
          } else {
            cone3f = cone3f + "(?1,'e3f', " + i + ",'v03_" + i + "', ?2),"
          }
        }
        var cone3g = "";
        for (i = 1; i <= 20; i++) {
          if (i < 10) {
            cone3g = cone3g + "(?1,'e3g', " + i + ",'v04_0" + i + "', ?2),"
          } else {
            cone3g = cone3g + "(?1,'e3g', " + i + ",'v04_" + i + "', ?2),"
          }
        }

        let la_vars = [ln_codesta,ls_clave];
        var sqlMultipleInsert = "insert into establecimiento_detv (cod_esta,cod_mod,orden,cod_preg,clave) values " +
            cone3a +
            cone3b +
            cone3e +
            cone3f +
            cone3g +
          "(?1,'e3g',21,'v04_03',?2)"
          ;

        return this.database.executeSql(sqlMultipleInsert, la_vars).then(res2 => {
          return res2;
        }, err => {
          console.log("Error:" + err);
          return [];
        });

      });

    });

  }

  listarEstablecimientosPorIdentificador(id_establecimiento: number) {
    let la_parametros = [id_establecimiento];
    console.log("dbts lepI idEsta:" + id_establecimiento.toString());
    return this.database.executeSql("select * from establecimiento where id_establecimiento=? ", la_parametros).then(data => {
      let la_establecimientos = [];
      if (data.rows.length > 0) {
        console.log("dbts lepU lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          la_establecimientos.push({
            id_establecimiento: data.rows.item(i).id_establecimiento,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return la_establecimientos;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarEstablecimientosPorUsuario(as_codUsuario: string) {
    let la_parametros = [as_codUsuario];
    console.log("dbts lepU codUsu:" + as_codUsuario);
    return this.database.executeSql("select * from establecimiento where cod_usuario=? order by fecha desc", la_parametros).then(data => {
      let la_establecimientos = [];
      if (data.rows.length > 0) {
        console.log("dbts lepU lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          la_establecimientos.push({
            id_establecimiento: data.rows.item(i).id_establecimiento,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return la_establecimientos;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarEstablecimientosPorUsuarioyEstado(as_codUsuario: string, as_estadoT:string) {
    let parametros = [as_codUsuario, as_estadoT];
    console.log("dbts lepUyE codUsu:" + as_codUsuario);
    return this.database.executeSql("select * from establecimiento where cod_usuario=? and estado_t =? order by id_establecimiento", parametros).then(data => {
      let establecimientos = [];
      if (data.rows.length > 0) {
        console.log("dbts lepUyE lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          establecimientos.push({
            id_establecimiento: data.rows.item(i).id_establecimiento,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return establecimientos;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesPorEstablecimientoyModulo(an_codEsta: number, as_codMod: string) {
    let la_parametros = [an_codEsta, as_codMod];
    return this.database.executeSql("select * from establecimiento_detv where cod_esta=? and cod_mod=? order by orden", la_parametros).then(data => {
      let la_detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpeym lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          la_detalles.push({
            id_edetv: data.rows.item(i).id_edetv,
            cod_esta: data.rows.item(i).cod_esta,
            cod_mod: data.rows.item(i).cod_mod,
            orden: data.rows.item(i).orden,
            cod_preg: data.rows.item(i).cod_preg,
            valor: data.rows.item(i).valor,
            clave: data.rows.item(i).clave
          });
        }
      }
      return la_detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHPorEstablecimiento(an_codEsta: number) {
    let parametros = [an_codEsta];
    return this.database.executeSql("select * from establecimiento_deth where cod_esta=? order by id_edeth", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldhpe lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_edeth: data.rows.item(i).id_edeth,
            cod_esta: data.rows.item(i).cod_esta,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHPorEstablecimientoyVar(an_codEsta: number, as_codVar: string) {
    let la_parametros = [an_codEsta, as_codVar];
    return this.database.executeSql("select * from establecimiento_deth where cod_esta=? and cod_var=? order by orden", la_parametros).then(data => {
      let la_detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldhpeyv lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          la_detalles.push({
            id_edeth: data.rows.item(i).id_edeth,
            cod_esta: data.rows.item(i).cod_esta,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            clave: data.rows.item(i).clave
          });
        }
      }
      return la_detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesVPorEstablecimiento(an_codEsta: number) {
    let parametros = [an_codEsta];
    return this.database.executeSql("select * from establecimiento_detv where cod_esta=? order by id_edetv", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldvpe lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_edetv: data.rows.item(i).id_edetv,
            cod_esta: data.rows.item(i).cod_esta,
            cod_mod: data.rows.item(i).cod_mod,
            orden: data.rows.item(i).orden,
            cod_preg: data.rows.item(i).cod_preg,
            valor: data.rows.item(i).valor,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }


  /* **************************************************** */


  /* *************************************************************** */
  /* Codificación de Funciones envio de información                  */
  /* Enviar Información desde el dispositivo movil a la BDD:POSGRES  */
  /* *************************************************************** */
  enviarInformacionPorFormulario(as_usuario: string, an_codform : number, as_formulario: string) {

    let listadetallesFH = [];
    let listadetallesFV = [];

    var ls_detfhori = "";
    var ls_detfvert = "";

    this.listarDetallesHPorFormulario(an_codform).then(data2 => {
      listadetallesFH = data2;
      console.log('EIF - Se enviaran: ' + listadetallesFH.length  + ' detalles de formularios H');
      for (var j = 0; j < listadetallesFH.length; j++) {
        ls_detfhori = ls_detfhori + listadetallesFH[j].cod_form + '^' + listadetallesFH[j].cod_var + '^' + listadetallesFH[j].orden + '^' + listadetallesFH[j].val01 + '^' + listadetallesFH[j].val02 + '^' + listadetallesFH[j].val03 + '^' + listadetallesFH[j].val04 + '^' + listadetallesFH[j].val05 + '^' + listadetallesFH[j].val06 + '^' + listadetallesFH[j].val07 + '^' + listadetallesFH[j].val08 + '^' + listadetallesFH[j].val09 + '^' + listadetallesFH[j].val10 + '^' + listadetallesFH[j].val11 + '^' + listadetallesFH[j].val12 + '^' + listadetallesFH[j].val13 + '^' + listadetallesFH[j].val14 + '^' + listadetallesFH[j].val15 + '^' + listadetallesFH[j].val16 + '^' + listadetallesFH[j].clave + '^' + '$' ;
      }
    });

    this.listarDetallesVPorFormulario(an_codform).then(data1 => {
      listadetallesFV = data1;
      console.log('EIF - Se enviaran: ' + listadetallesFV.length  + ' detalles de formularios V');
      for (var k = 0; k < listadetallesFV.length; k++) {
        ls_detfvert = ls_detfvert + listadetallesFV[k].cod_form + '^' + listadetallesFV[k].cod_mod + '^' + listadetallesFV[k].orden + '^' + listadetallesFV[k].cod_preg + '^' + listadetallesFV[k].valor + '^' + listadetallesFV[k].clave + '^' + '$' ;
      }
      this.postFormulario(as_formulario, ls_detfvert, ls_detfhori);
    });

  }

  preFormulario(as_formulario: string) {
    let headers = new Headers();
    console.log('EIF - Inicia Evaluación transferencia');
    headers.append('content-type', 'application/json');
    let body = {
      formulario: as_formulario
    }
    this.http.post(this.servidorEnvioRemoto + '/' + this.servicioEnvioRemotoForm, JSON.stringify(body), { headers: headers })
      .subscribe(
        data => { console.log('EIF - Bien: '); },
        error => {
          console.log('EIF - Mal: ' + error);
          alert("EIF - Sin conexión!" + error);
          return 0;
        });
    console.log('EIF - Termina Evaluación transferencia');
    return 1;
  }

  postFormulario(as_formulario: string, as_detfvert: string, as_detfhori: string) {
    let headers = new Headers();
    console.log('EIF - Inicio transferencia Formulario:' + "[" + as_formulario + "][" + as_detfvert + "][" + as_detfhori+ "]");
    headers.append('content-type', 'application/json');
    let body = {
      formulario: as_formulario,
      formularioDetv: as_detfvert,
      formularioDeth: as_detfhori
    }
    this.http.post(this.servidorEnvioRemoto + '/' + this.servicioEnvioRemotoForm, JSON.stringify(body), { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {console.log('EI - Finaliza transferencia Formulario: ' + "[" + as_formulario + "][" + as_detfvert + "][" + as_detfhori+ "]");},
         err => {console.log('EI - Error: ' + err);
                  if(err == "Response with status: 0  for URL: null") {
                    alert("Sin respuesta desde la URL! " + err);
                    return err;
                  }
                },
          () => console.log('EI - Finalizar envío Formularios.')
      ),

    console.log('EIF - Termina proceso envío Formulario: ' + "[" + as_formulario + "][" + as_detfvert + "][" + as_detfhori+ "]");
  }

  enviarInformacionPorOrganizacion(as_usuario: string, an_codorga: number, as_organizacion: string) {

    let listadetallesOH = [];
    let listadetallesOV = [];

    var ls_detohori = "";
    var ls_detovert = "";

    this.listarDetallesHPorOrganizacion(an_codorga).then(data2 => {
      listadetallesOH = data2;
      console.log('EIF - Se enviaran: ' + listadetallesOH.length  + ' detalles de organizaciones H');
      for (var j = 0; j < listadetallesOH.length; j++) {
        ls_detohori = ls_detohori + listadetallesOH[j].cod_orga + '^' + listadetallesOH[j].cod_var + '^' + listadetallesOH[j].orden + '^' + listadetallesOH[j].val01 + '^' + listadetallesOH[j].val02 + '^' + listadetallesOH[j].val03 + '^' + listadetallesOH[j].val04 + '^' + listadetallesOH[j].val05 + '^' + listadetallesOH[j].val06 + '^' + listadetallesOH[j].val07 + '^' + listadetallesOH[j].val08 + '^' + listadetallesOH[j].val09 + '^' + listadetallesOH[j].val10 + '^' + listadetallesOH[j].val11 + '^' + listadetallesOH[j].val12 + '^' + listadetallesOH[j].val13 + '^' + listadetallesOH[j].val14 + '^' + listadetallesOH[j].val15 + '^' + listadetallesOH[j].val16 + '^' + listadetallesOH[j].clave + '^' + '$' ;
      }
    });

    this.listarDetallesVPorOrganizacion(an_codorga).then(data1 => {
      listadetallesOV = data1;
      console.log('EIF - Se enviaran: ' + listadetallesOV.length  + ' detalles de organizaciones V');
      for (var k = 0; k < listadetallesOV.length; k++) {
        ls_detovert = ls_detovert + listadetallesOV[k].cod_orga + '^' + listadetallesOV[k].cod_mod + '^' + listadetallesOV[k].orden + '^' + listadetallesOV[k].cod_preg + '^' + listadetallesOV[k].valor + '^' + listadetallesOV[k].clave + '^' + '$' ;
      }
      this.postOrganizacion(as_organizacion, ls_detovert, ls_detohori);
    });
  }

  postOrganizacion(as_organizacion: string, as_detovert: string, as_detohori: string) {
    let headers = new Headers();
    console.log('EIF - Inicio transferencia Organizaciones:' + "[" + as_organizacion + "][" + as_detovert + "][" + as_detohori+ "]");

    headers.append('content-type', 'application/json');
    let body = {
      organizacion: as_organizacion,
      organizacionDetv: as_detovert,
      organizacionDeth: as_detohori
    }
    this.http.post(this.servidorEnvioRemoto + '/' + this.servicioEnvioRemotoOrga, JSON.stringify(body), { headers: headers })
      .subscribe(
        data => {console.log('EI - Finaliza transferencia Organizaciones: ' + "[" + as_organizacion + "]");},
         err => {console.log('EI - Error: ' + err);
                  if(err == "Response with status: 0  for URL: null") {
                    alert("Sin respuesta desde la URL! " + err);
                    return err;
                  }
                },
          () => console.log('EI - Finalizar envío Organizaciones.'))
    console.log('EIF - Se termina proceso envío Organizaciones. ' + "[" + as_organizacion + "]");
  }

  enviarInformacionPorEstablecimiento(as_usuario: string, an_codesta: number, as_establecimiento: string) {

    let listadetallesEH = [];
    let listadetallesEV = [];

    var ls_detehori = "";
    var ls_detevert = "";

    this.listarDetallesHPorEstablecimiento(an_codesta).then(data2 => {
      listadetallesEH = data2;
      console.log('EIF - Se enviaran: ' + listadetallesEH.length  + ' detalles de establecimientos H');
      for (var j = 0; j < listadetallesEH.length; j++) {
        ls_detehori = ls_detehori + listadetallesEH[j].cod_esta + '^' + listadetallesEH[j].cod_var + '^' + listadetallesEH[j].orden + '^' + listadetallesEH[j].val01 + '^' + listadetallesEH[j].val02 + '^' + listadetallesEH[j].val03 + '^' + listadetallesEH[j].val04 + '^' + listadetallesEH[j].val05 + '^' + listadetallesEH[j].val06 + '^' + listadetallesEH[j].val07 + '^' + listadetallesEH[j].val08 + '^' + listadetallesEH[j].val09 + '^' + listadetallesEH[j].val10 + '^' + listadetallesEH[j].val11 + '^' + listadetallesEH[j].val12 + '^' + listadetallesEH[j].val13 + '^' + listadetallesEH[j].val14 + '^' + listadetallesEH[j].val15 + '^' + listadetallesEH[j].val16 + '^' + listadetallesEH[j].clave + '^' + '$' ;
      }
    });

    this.listarDetallesVPorEstablecimiento(an_codesta).then(data1 => {
      listadetallesEV = data1;
      console.log('EIF - Se enviaran: ' + listadetallesEV.length  + ' detalles de establecimientos V');
      for (var k = 0; k < listadetallesEV.length; k++) {
        ls_detevert = ls_detevert + listadetallesEV[k].cod_esta + '^' + listadetallesEV[k].cod_mod + '^' + listadetallesEV[k].orden + '^' + listadetallesEV[k].cod_preg + '^' + listadetallesEV[k].valor + '^' + listadetallesEV[k].clave + '^' + '$' ;
      }
      this.postEstablecimiento(as_establecimiento, ls_detevert, ls_detehori);
    });
  }

  postEstablecimiento(as_establecimiento: string, as_detevert: string, as_detehori: string) {
    let headers = new Headers();
    console.log('EIF - Inicio transferencia Establecimientos:' + "[" + as_establecimiento + "][" + as_detevert + "][" + as_detehori+ "]");

    headers.append('content-type', 'application/json');
    let body = {
      establecimiento: as_establecimiento,
      establecimientoDetv: as_detevert,
      establecimientoDeth: as_detehori
    }
    this.http.post(this.servidorEnvioRemoto + '/' + this.servicioEnvioRemotoEsta, JSON.stringify(body), { headers: headers })
      .subscribe(
        data => {console.log('EI - Finaliza transferencia Establecimientos: ' + "[" + as_establecimiento + "]");},
         err => {console.log('EI - Error: ' + err);
                  if(err == "Response with status: 0  for URL: null") {
                    alert("Sin respuesta desde la URL! " + err);
                    return err;
                  }
                },
          () => console.log('EI - Finalizar envío Establecimientos.')
        )
    console.log('EIF - Se termina proceso envío Establecimientos. ' + "[" + as_establecimiento + "]");
  }

  enviarInformacionPorCialco(as_usuario: string, an_codcial: number, as_cialco: string) {

    let listadetallesCH = [];
    let listadetallesCV = [];

    var ls_detchori = "";
    var ls_detcvert = "";

    this.listarDetallesHPorCialco(an_codcial).then(data2 => {
      listadetallesCH = data2;
      console.log('EIF - Se enviaran: ' + listadetallesCH.length  + ' detalles de cialcos H');
      for (var j = 0; j < listadetallesCH.length; j++) {
        ls_detchori = ls_detchori + listadetallesCH[j].cod_cial + '^' + listadetallesCH[j].cod_var + '^' + listadetallesCH[j].orden + '^' + listadetallesCH[j].val01 + '^' + listadetallesCH[j].val02 + '^' + listadetallesCH[j].val03 + '^' + listadetallesCH[j].val04 + '^' + listadetallesCH[j].val05 + '^' + listadetallesCH[j].val06 + '^' + listadetallesCH[j].val07 + '^' + listadetallesCH[j].val08 + '^' + listadetallesCH[j].val09 + '^' + listadetallesCH[j].val10 + '^' + listadetallesCH[j].val11 + '^' + listadetallesCH[j].val12 + '^' + listadetallesCH[j].val13 + '^' + listadetallesCH[j].val14 + '^' + listadetallesCH[j].val15 + '^' + listadetallesCH[j].val16 + '^' + listadetallesCH[j].val17 + '^' + listadetallesCH[j].val18 + '^' + listadetallesCH[j].val19 + '^' + listadetallesCH[j].clave + '^' + '$' ;
      }
    });

    this.listarDetallesVPorCialco(an_codcial).then(data1 => {
      listadetallesCV = data1;
      console.log('EIF - Se enviaran: ' + listadetallesCV.length  + ' detalles de cialcos V');
      for (var k = 0; k < listadetallesCV.length; k++) {
        ls_detcvert = ls_detcvert + listadetallesCV[k].cod_cial + '^' + listadetallesCV[k].cod_mod + '^' + listadetallesCV[k].orden + '^' + listadetallesCV[k].cod_preg + '^' + listadetallesCV[k].valor + '^' + listadetallesCV[k].clave + '^' + '$' ;
      }
      this.postCialco(as_cialco, ls_detcvert, ls_detchori);
    });
  }

  postCialco(as_cialco: string, as_detcvert: string, as_detchori: string) {
    let headers = new Headers();
    console.log('EIF - Inicio transferencia Cialcos:' + "[" + as_cialco + "][" + as_detcvert + "][" + as_detchori+ "]");

    headers.append('content-type', 'application/json');
    let body = {
      cialco: as_cialco,
      cialcoDetv: as_detcvert,
      cialcoDeth: as_detchori
    }
    this.http.post(this.servidorEnvioRemoto + '/' + this.servicioEnvioRemotoCial, JSON.stringify(body), { headers: headers })
      .subscribe(
        data => {console.log('EI - Finaliza transferencia Cialcos: ' + "[" + as_cialco + "]");},
         err => {console.log('EI - Error: ' + err);
                  if(err == "Response with status: 0  for URL: null") {
                    alert("Sin respuesta desde la URL! " + err);
                    return err;
                  }
                },
          () => console.log('EI - Finalizar envío CIALCO.'))
    console.log('EIF - Se termina proceso envío Cialcos. ' + "[" + as_cialco + "]");
  }

  /* **************************************************** */

  /* ***************************************************** */
  /* Codificación de Funciones globales                    */
  /* ***************************************************** */

  actualizarDetallePorModuloYPregunta(an_identificador: number, as_codMod: string, as_codPreg: string, as_valor: string, as_sql: string) {
    let la_parametros = [as_valor, an_identificador, as_codMod, as_codPreg];
    return this.database.executeSql(as_sql, la_parametros).then(res => {

      return res;
    }, err => {
      console.log("Error adpmp:" + err);
      return [];
    });
  }

  crearDetalleH(an_codId: number, as_codVar: string, an_orden: number, as_val01: string, as_val02: string, as_val03: string, as_val04: string, as_val05: string, as_val06: string, as_val07: string, as_val08: string, as_val09: string, as_val10: string, as_val11: string, as_val12: string, as_val13: string, as_val14: string, as_val15: string, as_val16: string, as_clave: string, as_sql: string) {
    let la_dataDet = [an_codId, as_codVar, an_orden, as_val01, as_val02, as_val03, as_val04, as_val05, as_val06, as_val07, as_val08, as_val09, as_val10, as_val11, as_val12, as_val13, as_val14, as_val15, as_val16, as_clave];
    return this.database.executeSql(as_sql, la_dataDet).then(res => {

    });
  }

  crearCialcoDetalleH(an_codId: number, as_codVar: string, an_orden: number, as_val01: string, as_val02: string, as_val03: string, as_val04: string, as_val05: string, as_val06: string, as_val07: string, as_val08: string, as_val09: string, as_val10: string, as_val11: string, as_val12: string, as_val13: string, as_val14: string, as_val15: string, as_val16: string, as_val17: string, as_val18: string, as_val19: string, as_clave: string, as_sql: string) {
    let la_dataDet = [an_codId, as_codVar, an_orden, as_val01, as_val02, as_val03, as_val04, as_val05, as_val06, as_val07, as_val08, as_val09, as_val10, as_val11, as_val12, as_val13, as_val14, as_val15, as_val16, as_val17, as_val18, as_val19, as_clave];
    return this.database.executeSql(as_sql, la_dataDet).then(res => {

    });
  }

  listarProvincias() {
    return this.database.executeSql("select * from dpa where nivel=1 order by texto", []).then(data => {
      let provincias = [];
      if (data.rows.length > 0) {
        console.log("dbts provincias lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          provincias.push({
            id_dpa: data.rows.item(i).id_dpa,
            nivel: data.rows.item(i).nivel,
            texto: data.rows.item(i).texto,
            cod_dpa: data.rows.item(i).cod_dpa
          });
        }
      }
      return provincias;
    }, err => {
      console.log("Error provincias:" + err);
      return [];
    });
  }

  listarDpaPorPadre(codDpaPadre: string) {
    let parametros = [codDpaPadre];
    return this.database.executeSql("select * from dpa where cod_dpa=? order by texto", parametros).then(data => {
      let dpa = [];
      if (data.rows.length > 0) {
        console.log("dbts dpa lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          dpa.push({
            id_dpa: data.rows.item(i).id_dpa,
            texto: data.rows.item(i).texto
          });
        }
      }
      return dpa;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  /* **************************************************** */

  /* *********************************************************** */
  /* Codificación de Creación y listado de CIALCO                */
  /* *********************************************************** */
  listarCialcosPorUsuario(codUsuario: string) {
    let parametros = [codUsuario];
    console.log("dbts lcpU codUsu:" + codUsuario);
    return this.database.executeSql("select * from cialco where cod_usuario=? order by fecha desc", parametros).then(data => {
      let cialcos = [];
      if (data.rows.length > 0) {
        console.log("dbts lcpU lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          cialcos.push({
            id_cialco: data.rows.item(i).id_cialco,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return cialcos;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesPorCialcoyModulo(codCial: number, codMod: string) {
    let parametros = [codCial, codMod];
    return this.database.executeSql("select * from cialco_detv where cod_cial=? and cod_mod=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpcym lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_cdetv: data.rows.item(i).id_cdetv,
            cod_orga: data.rows.item(i).cod_orga,
            cod_mod: data.rows.item(i).cod_mod,
            orden: data.rows.item(i).orden,
            cod_preg: data.rows.item(i).cod_preg,
            valor: data.rows.item(i).valor,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }


  listarCialcosPorIdentificador(idCialco: number) {
    let parametros = [idCialco];
    console.log("dbts lcpI codUsu:" + idCialco.toString());
    return this.database.executeSql("select * from cialco where id_cialco =? order by id_cialco", parametros).then(data => {
      let cialcos = [];
      if (data.rows.length > 0) {
        console.log("dbts lcpU lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          cialcos.push({
            id_cialco: data.rows.item(i).id_cialco,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return cialcos;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHPorCialcoyVar(codCial: number, codVar: string) {
    let parametros = [codCial, codVar];
    return this.database.executeSql("select * from cialco_deth where cod_cial=? and cod_var=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldhpcyv lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_cdeth: data.rows.item(i).id_cdeth,
            cod_cial: data.rows.item(i).cod_cial,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHyDPAPorCialcoyVar(codCial: number, codVar: string, colDPAParr:string) {
    let parametros = [codCial, codVar];
    return this.database.executeSql("select d.*,pro.texto as pro,can.texto as can,par.texto as par from cialco_deth d, dpa par, dpa can, dpa pro where d."+colDPAParr+"=par.id_dpa and par.cod_dpa=can.id_dpa and can.cod_dpa=pro.id_dpa and cod_cial=? and cod_var=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpcyv lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_cdeth: data.rows.item(i).id_cdeth,
            cod_orga: data.rows.item(i).cod_orga,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            val17: data.rows.item(i).val17,
            val18: data.rows.item(i).val18,
            val19: data.rows.item(i).val19,
            clave: data.rows.item(i).clave,
            pro: data.rows.item(i).pro,
            can: data.rows.item(i).can,
            par: data.rows.item(i).par
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHyDPACnPorCialcoyVar(codCial: number, codVar: string, colDPACn:string) {
    let parametros = [codCial, codVar];
    return this.database.executeSql("select d.*, pro.texto as pro, can.texto as can from cialco_deth d, dpa can, dpa pro where d."+colDPACn+"=can.id_dpa and can.cod_dpa=pro.id_dpa and cod_cial=? and cod_var=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpcyv lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_cdeth: data.rows.item(i).id_cdeth,
            cod_orga: data.rows.item(i).cod_orga,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            val17: data.rows.item(i).val17,
            val18: data.rows.item(i).val18,
            val19: data.rows.item(i).val19,
            clave: data.rows.item(i).clave,
            pro: data.rows.item(i).pro,
            can: data.rows.item(i).can,
            par: data.rows.item(i).par
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHyDPAPvPorCialcoyVar(codCial: number, codVar: string, colDPAPv:string) {
    let parametros = [codCial, codVar];
    return this.database.executeSql("select d.*, pro.texto as pro from cialco_deth d, dpa pro where d."+colDPAPv+"=pro.id_dpa and cod_cial=? and cod_var=? order by orden", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldpcyv lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_cdeth: data.rows.item(i).id_cdeth,
            cod_orga: data.rows.item(i).cod_orga,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            val17: data.rows.item(i).val17,
            val18: data.rows.item(i).val18,
            val19: data.rows.item(i).val19,
            clave: data.rows.item(i).clave,
            pro: data.rows.item(i).pro,
            can: data.rows.item(i).can,
            par: data.rows.item(i).par
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarCialcosPorUsuarioyEstado(as_codUsuario: string, as_estadoT:string) {
    let parametros = [as_codUsuario, as_estadoT];
    console.log("dbts lcpU codUsu:" + as_codUsuario);
    return this.database.executeSql("select * from cialco where cod_usuario=? and estado_t =? order by id_cialco", parametros).then(data => {
      let cialcos = [];
      if (data.rows.length > 0) {
        console.log("dbts lcpU lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          cialcos.push({
            id_cialco: data.rows.item(i).id_cialco,
            cod_usuario: data.rows.item(i).cod_usuario,
            tipo: data.rows.item(i).tipo,
            numero: data.rows.item(i).numero,
            fecha: data.rows.item(i).fecha,
            referencia: data.rows.item(i).referencia,
            estado_p: data.rows.item(i).estado_p,
            estado_t: data.rows.item(i).estado_t,
            clave: data.rows.item(i).clave
          });
        }
      }
      return cialcos;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesHPorCialco(an_codCial: number) {
    let parametros = [an_codCial];
    return this.database.executeSql("select * from cialco_deth where cod_cial=? order by id_cdeth", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldhpc lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_cdeth: data.rows.item(i).id_cdeth,
            cod_cial: data.rows.item(i).cod_cial,
            cod_var: data.rows.item(i).cod_var,
            orden: data.rows.item(i).orden,
            val01: data.rows.item(i).val01,
            val02: data.rows.item(i).val02,
            val03: data.rows.item(i).val03,
            val04: data.rows.item(i).val04,
            val05: data.rows.item(i).val05,
            val06: data.rows.item(i).val06,
            val07: data.rows.item(i).val07,
            val08: data.rows.item(i).val08,
            val09: data.rows.item(i).val09,
            val10: data.rows.item(i).val10,
            val11: data.rows.item(i).val11,
            val12: data.rows.item(i).val12,
            val13: data.rows.item(i).val13,
            val14: data.rows.item(i).val14,
            val15: data.rows.item(i).val15,
            val16: data.rows.item(i).val16,
            val17: data.rows.item(i).val17,
            val18: data.rows.item(i).val18,
            val19: data.rows.item(i).val19,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  listarDetallesVPorCialco(an_codCial: number) {
    let parametros = [an_codCial];
    return this.database.executeSql("select * from cialco_detv where cod_cial=? order by id_cdetv", parametros).then(data => {
      let detalles = [];
      if (data.rows.length > 0) {
        console.log("dbts ldvpc lengthrows:" + data.rows.length);
        for (var i = 0; i < data.rows.length; i++) {
          detalles.push({
            id_cdetv: data.rows.item(i).id_cdetv,
            cod_cial: data.rows.item(i).cod_cial,
            cod_mod: data.rows.item(i).cod_mod,
            orden: data.rows.item(i).orden,
            cod_preg: data.rows.item(i).cod_preg,
            valor: data.rows.item(i).valor,
            clave: data.rows.item(i).clave
          });
        }
      }
      return detalles;
    }, err => {
      console.log("Error:" + err);
      return [];
    });
  }

  /* **************************************************** */
  /* **************************************************** */
  public actualizarTabla(as_codUsuario: string, ad_fecha: Date, an_idTabla: number, as_tabla: string, as_estado_t: string){
    /* var ls_numero = '1'; */
    var ls_referencia = 'El usuario: [' + as_codUsuario + '] transfirió el ' + as_tabla + ' [' + an_idTabla.toString() + '] el [' + this.datePipe.transform(ad_fecha, 'yyyyMMddHHmmss') + ']';

    /* as_estado_p = '0' Creado */
    /* as_estado_p = '1' Procesada a la base de datos de destino final sin error */
    /* as_estado_p = '2' Procesada a la base de datos de destino final con error */

    /* as_estado_t = '0' Creado */
    /* as_estado_t = '1' Transferencia a la base de datos temporal sin error */
    /* As_estado_t = '2' Transferencia a la base de datos temporal con error */

    /* Durante el presente proceso, se actualiza los campos: "referencia", "estado_t" de la tabla de formularios */
    console.log("Actualizar "+ as_tabla + ": " + an_idTabla.toString());
    let la_parametros = [ls_referencia, as_estado_t, an_idTabla];
    var ls_sql="update " + as_tabla + " set referencia=?, estado_t=? where " + an_idTabla + " =? ";
    this.database.executeSql(ls_sql, la_parametros).then(res3 => {
       return res3;
    }, err => {
       console.log("Error:" + err);
       return [];
    });
  }




}
