import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';
/*
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidarNombre } from '../validacion/nombre.validator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
*/
import { FormsModule } from '@angular/forms';

/**
 * Generated class for the C4aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c4a',
  templateUrl: 'c4a.html',
})
export class C4aPage {
  id_cialco_actual=0;
  c4a_cialco=[];
  c4a_detalles=[];
  clave="c4a";
  codVar="c4a";
  orden=1;

  v00_01="";
  v00_02="";
  v00_03="";
  v00_04="";
  v00_05="";
  v00_06="";
  v00_07="";
  v00_08="";
  v00_09="";
  v00_10="";
  v00_11="";
  v00_12="";
  v00_13="";
  v00_14="";
  v00_15="";
  v00_16="";
  v00_17="";
  v00_18="";
  v00_19="";
  v00_20="";
  v00_21="";
  v00_22="";
  v00_23="";
  v00_24="";

  formularioCialco:FormsModule;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private storage: Storage,
    private databaseProvider:DatabaseProvider,
    /* private alertCtrl: AlertController,
    public fb: FormBuilder, */
    private toastCtrl: ToastController) {
      this.databaseProvider.obtenerEstadoDeBBDD().subscribe(listo =>{
        if(listo){

        }
      })

    /**
     * @description Asignamos a la propiedad "formularioUsuario" los campos que se van a controlar de la vista
     */

/*
    this.formularioCialco = this.fb.group({
      v00_04:new FormControl('', Validators.compose([
             		ValidarNombre.nombreValido,
             		Validators.maxLength(100),
             		Validators.minLength(5),
             		Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
             		Validators.required
             	])),
      v00_05:new FormControl('', Validators.compose([
             		Validators.required,
             		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
              ])),
      v00_06:['',[Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
      v00_07:['',[Validators.required]],
      v00_08:['',[Validators.required]],
    });
*/

/* old
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
      phone: ['', Validators.compose(
        [
          Validators.required,
          phoneValidator(/^[679]{1}[0-9]{8}$/),
        ]
      )]
    });

    this.buildForm();
*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad C4aPage');
    this.storage.get("id_cial_actual").then(val=>{
      console.log("c4aidcial:"+val);
      this.id_cialco_actual=val;
      this.cargarClaveCialco();
      this.cargarInformacionC4a();
     });
  }

  calcularVarTotal(){
    var hombres = parseInt(this.v00_07);
    var mujeres = parseInt(this.v00_08);
    var total_h_m = parseInt(this.v00_09);

    if( isNaN(hombres) ){
       hombres = 0;
    } else {
       hombres = parseInt(this.v00_07);
    }
    if( isNaN(mujeres) ){
       mujeres = 0;
    } else {
       mujeres = parseInt(this.v00_08);
    }
    total_h_m = hombres + mujeres ;
    this.v00_09 = total_h_m.toString();
  }

  cargarClaveCialco(){
    /* Se recupera el valor del campo "clave" de la tabla de cialco CIALCO */
    this.databaseProvider.listarCialcosPorIdentificador(this.id_cialco_actual).then(data=>{
      this.c4a_cialco = data;
      console.log("c4acialco: " + "clave[" + this.c4a_cialco[0].clave+ "]");
      this.clave= this.c4a_cialco[0].clave;
    });
  }


  cargarInformacionC4a(){
    this.databaseProvider.listarDetallesPorCialcoyModulo(this.id_cialco_actual,'c4a').then(data=>{
      this.c4a_detalles=data;
      this.v00_01 = this.c4a_detalles[0].valor;
      this.v00_02 = this.c4a_detalles[1].valor;
      this.v00_03 = this.c4a_detalles[2].valor;
      this.v00_04 = this.c4a_detalles[3].valor;
      this.v00_05 = this.c4a_detalles[4].valor;
      this.v00_06 = this.c4a_detalles[5].valor;
      this.v00_07 = this.c4a_detalles[6].valor;
      this.v00_08 = this.c4a_detalles[7].valor;
      this.v00_09 = this.c4a_detalles[8].valor;
      this.v00_10 = this.c4a_detalles[9].valor;
      this.v00_11 = this.c4a_detalles[10].valor;
      this.v00_12 = this.c4a_detalles[11].valor;
      this.v00_13 = "";
      this.v00_14 = "";
      this.v00_15 = "";
      this.v00_16 = "";
      this.v00_17 = "";
      this.v00_18 = "";
      this.v00_19 = "";
      this.v00_20 = "";
      this.v00_21 = "";
      this.v00_22 = "";
      this.v00_23 = "";
      this.v00_24 = "";

    });
  }

  public guardarModuloC4a(){
    var ls_sql = "update cialco_detv set valor=? where cod_cial=? and cod_mod=? and cod_preg=?";
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_01',this.v00_01, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_02',this.v00_02, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_03',this.v00_03, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_04',this.v00_04, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_05',this.v00_05, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_06',this.v00_06, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_07',this.v00_07, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_08',this.v00_08, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_09',this.v00_09, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_10',this.v00_10, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_11',this.v00_11, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_12',this.v00_12, ls_sql);
/*
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_13',this.v00_13, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_14',this.v00_14, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_15',this.v00_15, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_16',this.v00_16, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_17',this.v00_17, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_18',this.v00_18, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_19',this.v00_19, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_20',this.v00_20, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_21',this.v00_21, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_22',this.v00_22, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_23',this.v00_23, ls_sql);
    this.databaseProvider.actualizarDetallePorModuloYPregunta(this.id_cialco_actual,'c4a','v00_24',this.v00_24, ls_sql);
*/


/*
    console.log(this.formularioCialco.value);
    const alert = this.alertCtrl.create({
      title: "Datos enviados!",
      subTitle: "Información",
      message: "Los registros fueron enviados correctamente",
      buttons: ['Ok']
    });

    alert.present()

*/

/* old   this.buildForm();
    alert(JSON.stringify(this.formularioCialco.value)); */

    this.presentToast('INFORMACIÓN DEL CIALCO Guardado',3000);
  }

  presentToast(as_message:string, an_seconds:number) {
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
