
var formRegistro = document.getElementsByClassName('registro')[0],
    formReserva  = document.getElementsByClassName('reserva')[0];

// Almacenamos el objeto localStorage en una variable
var Storage = window.localStorage
// Verificar si localStorage tiene alguna
if (Storage.length > 0 && Storage.hasOwnProperty('usuario')) {
  // Si la llave usuario existe en localStorage mostrar el formulario de reserva
  formReserva.className = "reserva"
  formRegistro.className = "registro hide"
} else {
  // Si no existe se debe mostrar el formulario de regisro
  formRegistro.className = "registro"
  formReserva.className += "reserva hide"
}


var botonRegistro = document.getElementById('registrar'),
    botonReserva  = document.getElementById('reservar')
    inputDocumento = document.getElementById('numDocRes');

function guardarUsuario() {
  var usuario = {
    numeroDoc: document.getElementById('numDoc').value,
    nombreCompleto: document.getElementById('nombreCom').value,
    correo: document.getElementById('correo').value,
    nombreUsuario: document.getElementById('nombreUsuario').value,
    password: document.getElementById('password').value
  }
  localStorage.setItem('usuario', JSON.stringify(usuario))
  formReserva.className = "reserva"
  formRegistro.className = "registro hide"
  valida_cedula(usuario.numeroDoc)
  alert('Se guardo la reserva correctamente')
}

function guardarReserva() {
  var reserva = {
    destino: document.getElementById('destino').value
  }
  localStorage.setItem('reserva', JSON.stringify(reserva))
  alert('Se guardo la reserva correctamente')
}

function consultarUsuario(documento) {
  var usuario = JSON.parse(localStorage.getItem('usuario'))
  if (usuario.numeroDoc === documento) {
    document.getElementById('nombreUsuarioRes').value = usuario.nombreUsuario
    document.getElementById('nombreComRes').value = usuario.nombreCompleto
    document.getElementById('correoRes').value = usuario.correo
  } else {
    alert('El numero de documento ingresado no corresponde con el usuario almacenado')
  }
}


/* ***************************************************** */
  /* Codificación de Funciones globales de validación      */
  /* ***************************************************** */

  valida_cedula(as_cedula:string){
    var ls_cedula='';
    let la_numero_cedula = [];
    var ll_sum=0;
    var ll_multi=0;
    var ll_division=0;
    var ll_cociente=0;
    var ll_decena=0;
    var ll_verificador=0;

    if (parseInt(as_cedula, 10) <= 0 || parseInt(as_cedula, 10) > 9999999999) {
      this.gb_civalida=true;
      this.gs_civalmensaje='Número de Cédula no válido: No son caracteres válidos.';
/*      this.presentToast('Número de Cédula no válido: No son caracteres válidos.',3000); */
    }

    if ( as_cedula.length != 10) {
      this.gb_civalida=true;
      this.gs_civalmensaje='Número de Cédula no válido: No tiene la longitud de 10 caracteres esperados.';
/*      this.presentToast('Número de Cédula no válido: No tiene la longitud de 10 caracteres esperados.',3000); */
    } else {

      ls_cedula = as_cedula.substring(0, 10);

      for (var ll_i = 0; ll_i < 10; ll_i++) {
        la_numero_cedula[ll_i] = parseInt(ls_cedula.substring(ll_i, ll_i + 1), 10);
/*          la_numero_cedula[ll_i] = ls_cedula.charCodeAt(parseInt(ls_cedula.substring(ll_i, ll_i + 1), 10)) - ls_cedula.charCodeAt(parseInt('0', 10)); */
      }

      var ll_n = 0 ;
      for (ll_i = 0; ll_i < 9; ll_i++) {
        if (ll_n == ll_i){
          ll_multi = la_numero_cedula[ll_i] * 2;
          if (ll_multi >= 10) {
            ll_multi = 1 + (ll_multi % 10 );
          }
          ll_sum = ll_sum + ll_multi;
          ll_n = ll_n + 2;
        }
      }

      ll_n = 1 ;
      for (ll_i = 1; ll_i < 9; ll_i++) {
        if (ll_n == ll_i){
          ll_sum = ll_sum + la_numero_cedula[ll_i];
          ll_n = ll_n + 2;
        }
      }
      console.log("Número Cédula ll_sum: [" + ll_sum.toString() + "]");
      ll_division = ll_sum / 10;
      console.log("Número Cédula ll_division: [" + ll_division.toString() + "]");
      ll_cociente = Math.trunc(ll_division);
      console.log("Número Cédula ll_cociente: [" + ll_cociente.toString() + "]");
      ll_decena = (ll_cociente+1)*10;
      console.log("Número Cédula ll_decena: [" + ll_decena.toString() + "]");
      ll_verificador = ll_decena - ll_sum;
      console.log("Número Cédula ll_verificador: [" + ll_verificador.toString() + "]");

      if (ll_verificador = 10) {
        ll_verificador = 0;
      }

      if (ll_verificador = la_numero_cedula[9]) {
        this.gb_civalida=false;
        this.gs_civalmensaje='OK';
      }else {
        this.gb_civalida=true;
        this.gs_civalmensaje='Número de Cédula no válido: El número de cédula tiene inconsitencias.';
/*        this.presentToast('Número de Cédula no válido: El número de cédula tiene inconsitencias.',3000); */
      }
    }
  }

  /* **************************************************** */


botonRegistro.addEventListener('click', function(e) {
  e.preventDefault()
  guardarUsuario()
})

botonReserva.addEventListener('click', function(e) {
  e.preventDefault()
  var Documento = inputDocumento.value
  guardarReserva(Documento)
})

inputDocumento.addEventListener('keypress', function(e) {
  if (e.which === 13) {
    var Documento = inputDocumento.value
    consultarUsuario(Documento)
  }
})