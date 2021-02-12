/* import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core'; */
import { FormControl } from '@angular/forms';

/* @Injectable() */
export class Validar {
  static nombreValido(fc: FormControl){
    if(fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc"){
      return ({nombreValido: true});
    } else {
      return (null);
    }
  }

  /* ***************************************************** */
  /* Codificación de Funciones globales de validación      */
  /* ***************************************************** */

  /* Control de entrada de datos de nombre, cédula de identidad, horas y días trabajados */
  gb_novalida=true;
  gb_civalida=true;
  gb_hsvalida=true;
  gb_dsvalida=true;
  gs_valnomensaje='';
  gs_valcimensaje='';
  gs_valhsmensaje='';
  gs_valdsmensaje='';

  /* Validar Cédula */
  validar_cedula(as_cedula:string){
    var ls_cedula='';
    let la_numero_cedula = [];
    var ll_sum=0;
    var ll_multi=0;
    var ll_cociente=0;
    var ll_decena=0;
    var ll_verificador=0;

    if ( as_cedula.length != 10) {
      this.gb_civalida=true;
      this.gs_valcimensaje='Número de Cédula no válido: Se espera 10 digitos.';
/*      this.presentToast('Número de Cédula no válido: Se espera 10 digitos.',3000); */
      return true;
    } else {
      this.gb_civalida=false;
    }

    if (parseInt(as_cedula, 10) <= 0 || parseInt(as_cedula, 10) > 9999999999) {
      this.gb_civalida=true;
      this.gs_valcimensaje='Número de Cédula no válido: Digitos no válidos.';
/*      console.log('Número de Cédula no válido: Digitos no válidos.',3000); */
      return true;
    } else {
      this.gb_civalida=false;
    }

    ls_cedula = as_cedula.substring(0, 10);
    for (var ll_i = 0; ll_i < 10; ll_i++) {
      la_numero_cedula[ll_i] = parseInt(ls_cedula.substring(ll_i, ll_i + 1), 10);
    }

/*
    ll_sum =  la_numero_cedula[0] * 4 + la_numero_cedula[1] * 3 + la_numero_cedula[2] * 2 + la_numero_cedula[3] * 7 + la_numero_cedula[4] * 6 + la_numero_cedula[5] * 5 + la_numero_cedula[6] * 4 + la_numero_cedula[7] * 3 + la_numero_cedula[8] * 2 ;
    while (ll_sum > 11) {
      ll_sum = ll_sum - 11;
    }
    ll_dverr1 = 11 - ll_sum;
    if (ll_dverr1 = 10) {
      this.gs_valcimensaje='Número de Cédula no válido: Digito verificador no válido: igual posición 9. [' + ll_sum.toString() + '] [' + ll_dverr1.toString()+ '] ';
      return true;
    } else {
      if (ll_dverr1 != la_numero_cedula[9]) {
        this.gs_valcimensaje='Número de Cédula no válido: Digito verificador no válido: diferente posición 9. [' + ll_dverr1.toString() + '] [' + ll_dverr1.toString()+ '] ';
        return true;
      } else {
        this.gb_civalida=false;
      }
    }
*/

    ll_sum = 0;
    for (ll_i = 0; ll_i < 10;  ll_i+=2) {
	    console.log('CI: Contador Par. [' + ll_i.toString()+ ']');
	    ll_multi = la_numero_cedula[ll_i] * 2;
	    console.log('CI: Multiplicación. [' + ll_multi.toString()+ ']');
	    if (ll_multi >= 10) {
        ll_multi = 1 + (ll_multi % 10 );
	    console.log('CI: Módulo. [' + ll_multi.toString()+ ']');
      }
      ll_sum = ll_sum + ll_multi;
	    console.log('CI: Suma acumulada PARES. [' + ll_sum.toString()+ ']');
    }

    for (ll_i = 1; ll_i < 10; ll_i+=2) {
	    console.log('CI: Contador Impar. [' + ll_i.toString()+ ']');
      ll_sum = ll_sum + la_numero_cedula[ll_i];
	    console.log('CI: Suma acumulada IMPARES. [' + ll_sum.toString()+ ']');
    }

    ll_cociente = Math.trunc(ll_sum/10);
	  console.log('CI: Cociente. [' + ll_cociente.toString()+ ']');
    ll_decena = (ll_cociente+1)*10;
	  console.log('CI: Decena. [' + ll_decena.toString()+ ']');
    ll_verificador = ll_decena - ll_sum;
	  console.log('CI: Verificador. [' + ll_verificador.toString()+ ']');

    if (ll_verificador = 10) {
	    ll_verificador = 0 ;
    }

    if (ll_verificador = la_numero_cedula[9]) {
	    console.log('CI: Número de Cédula válida.');
      this.gs_valcimensaje='Número de Cédula válida.';
      return false ;
    } else {
	    console.log('CI: Número de Cédula inválida. [' + ll_verificador.toString() + '] [' + la_numero_cedula[9].toString()+ '] ');
      this.gs_valcimensaje='Número de Cédula no válido: Digito verificador no válido. [' + ll_verificador.toString() + '] [' + la_numero_cedula[9].toString()+ '] ';
      return true ;
    }
  }

  /* Validar Nombre */
  validar_nombre(as_nombre:string, an_longitud:number){
	  console.log('Nro: Número ingresado [' + as_nombre + '] longitud [' + an_longitud.toString() + '] ' );

/*
    if (parseInt(as_numero, an_longitud)) {
	    console.log('Nro: Número inválido.');
      this.gb_hsvalida=true;
      this.gs_valhsmensaje='Digitos no válidos.';
      //selecciono el texto
      //document.m1b.miembroGrupo.val08.select()
      //coloco otra vez el foco
      //document.m1b.miembroGrupo.val08.focus()
      return true;
    } else {
      this.gb_hsvalida=false;
    }
*/

    if ( as_nombre.length > an_longitud) {
	    console.log('Nro: Longitud mayor al establecido ['+ an_longitud.toString() + '] caracteres.');
      this.gb_novalida=true;
      this.gs_valnomensaje='Nombre no válido: Se espera máximo[' + an_longitud.toString() + '] caracteres.';
      //selecciono el texto
      //m1b.miembroGrupo.val08.select()
      //coloco otra vez el foco
      //m1b.miembroGrupo.val08.focus()
      return true;
    } else {
      this.gb_novalida=false;
    }

/*
    if (parseInt(as_numero, an_longitud) <= an_minimo || parseInt(as_numero, an_longitud) > an_maximo) {
	    console.log('Nro: Se excede el rango establecido.');
      this.gb_hsvalida=true;
      this.gs_valhsmensaje='Digitos exceden el rango establecido.';
      //selecciono el texto
      //m1b.miembroGrupo.val08.select()
      //coloco otra vez el foco
      //m1b.miembroGrupo.val08.focus()
      return true;
    } else {
      this.gb_hsvalida=false;
      return false;
    }
*/

  }


  /* Validar Número horas semana */
  validar_numero_hs(as_numero:string, an_longitud:number, an_minimo:number, an_maximo:number){
	  console.log('Nro: Número ingresado [' + as_numero.toString() + '] longitud [' + an_longitud.toString()+ '] minimo [' + an_minimo.toString()+ '] maximo [' + an_maximo.toString()+ ']' );
    if (parseInt(as_numero, an_longitud)) {
	    console.log('Nro: Número inválido.');
      this.gb_hsvalida=true;
      this.gs_valhsmensaje='Digitos no válidos.';
      //selecciono el texto
      //document.m1b.miembroGrupo.val08.select()
      //coloco otra vez el foco
      //document.m1b.miembroGrupo.val08.focus()
      return true;
    } else {
      this.gb_hsvalida=false;
    }

    if ( as_numero.length > an_longitud) {
	    console.log('Nro: Longitud mayor al establecido.');
      this.gb_hsvalida=true;
      this.gs_valhsmensaje='Número no válido: Se espera máximo[' + an_longitud +'] digitos.';
      //selecciono el texto
      //m1b.miembroGrupo.val08.select()
      //coloco otra vez el foco
      //m1b.miembroGrupo.val08.focus()
      return true;
    } else {
      this.gb_hsvalida=false;
    }

    if (parseInt(as_numero, an_longitud) <= an_minimo || parseInt(as_numero, an_longitud) > an_maximo) {
	    console.log('Nro: Se excede el rango establecido.');
      this.gb_hsvalida=true;
      this.gs_valhsmensaje='Digitos exceden el rango establecido.';
      //selecciono el texto
      //m1b.miembroGrupo.val08.select()
      //coloco otra vez el foco
      //m1b.miembroGrupo.val08.focus()
      return true;
    } else {
      this.gb_hsvalida=false;
      return false;
    }

  }

  /* Validar Número dias semana */
  validar_numero_ds(as_numero:string, an_longitud:number, an_minimo:number, an_maximo:number){
	  console.log('Nro: Número ingresado [' + as_numero.toString() + '] longitud [' + an_longitud.toString()+ '] minimo [' + an_minimo.toString()+ '] maximo [' + an_maximo.toString()+ ']' );
    if (parseInt(as_numero, an_longitud)) {
	    console.log('Nro: Número inválido.');
      this.gb_dsvalida=true;
      this.gs_valdsmensaje='Digitos no válidos.';
      //selecciono el texto
      // document.f1.numero.select()
      //m1b.miembroGrupo.val09.select()
      //coloco otra vez el foco
      //m1b.miembroGrupo.val09.focus()
      return true;
    } else {
      this.gb_dsvalida=false;
    }

    if ( as_numero.length > an_longitud) {
	    console.log('Nro: Longitud mayor al establecido.');
      this.gb_dsvalida=true;
      this.gs_valdsmensaje='Número no válido: Se espera máximo[' + an_longitud +'] digitos.';
      //selecciono el texto
      //m1b.miembroGrupo.val09.select()
      //coloco otra vez el foco
      //m1b.miembroGrupo.val09.focus()
      return true;
    } else {
      this.gb_dsvalida=false;
    }

    if (parseInt(as_numero, an_longitud) <= an_minimo || parseInt(as_numero, an_longitud) > an_maximo) {
	    console.log('Nro: Se excede el rango establecido.');
      this.gb_dsvalida=true;
      this.gs_valdsmensaje='Digitos exceden el rango establecido.';
      //selecciono el texto
      //m1b.miembroGrupo.val09.select()
      //coloco otra vez el foco
      //m1b.miembroGrupo.val09.focus()
      return true;
    } else {
      this.gb_dsvalida=false;
      return false;
    }
  }


  /* **************************************************** */


}
