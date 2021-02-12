/*==============================================================*/
/* Table: dpa                                                   */
/*==============================================================*/
SELECT * FROM dpa;

SELECT
   id_dpa,
   nivel,
   texto,
   cod_dpa
FROM dpa;

/*==============================================================*/
/* Table: establecimiento                                       */
/*==============================================================*/
SELECT * FROM establecimiento;

SELECT
   id_establecimiento,
   cod_usuario,
   tipo,
   numero,
   fecha,
   referencia,
   estado_p,
   estado_t
FROM  establecimiento;

/*==============================================================*/
/* Table: establecimiento_deth                                  */
/*==============================================================*/
SELECT * FROM establecimiento_deth;

SELECT
   id_edeth,
   cod_esta,
   cod_var,
   orden,
   val01,
   val02,
   val03,
   val04,
   val05,
   val06,
   val07,
   val08,
   val09,
   val10,
   val11,
   val12,
   val13,
   val14,
   val15
FROM establecimiento_deth ;

/*==============================================================*/
/* Table: establecimiento_detv                                  */
/*==============================================================*/
SELECT * FROM establecimiento_detv;

SELECT 
   id_edetv,
   cod_esta,
   cod_mod,
   orden,
   cod_preg,
   valor 
FROM establecimiento_detv;

/*==============================================================*/
/* Table: formulario                                            */
/*==============================================================*/
SELECT * FROM formulario;

SELECT 
   id_formulario,
   cod_usuario,
   tipo,
   numero,
   fecha,
   referencia,
   estado_p,
   estado_t 
FROM formulario ;

/*==============================================================*/
/* Table: formulario_detv                                       */
/*==============================================================*/
SELECT * FROM formulario_detv;

SELECT
   id_fdetv,
   cod_form,
   cod_mod,
   orden,
   cod_preg,
   valor
FROM formulario_detv ;

/*==============================================================*/
/* Table: formulario_deth                                       */
/*==============================================================*/
SELECT * FROM formulario_deth;

SELECT
   id_fdeth,
   cod_form,
   cod_var,
   orden,
   val01,
   val02,
   val03,
   val04,
   val05,
   val06,
   val07,
   val08,
   val09,
   val10,
   val11,
   val12,
   val13,
   val14,
   val15,
   val16
FROM formulario_deth;


/*==============================================================*/
/* Table: organizacion                                          */
/*==============================================================*/
SELECT * FROM organizacion;

SELECT
   id_organizacion,
   cod_usuario,
   tipo,
   numero,
   fecha,
   referencia,
   estado_p,
   estado_t
FROM organizacion;


/*==============================================================*/
/* Table: organizacion_deth                                     */
/*==============================================================*/
SELECT * FROM organizacion_deth;

SELECT
   id_odeth,
   cod_orga,
   cod_var,
   orden,
   val01,
   val02,
   val03,
   val04,
   val05,
   val06,
   val07,
   val08,
   val09,
   val10,
   val11,
   val12,
   val13,
   val14,
   val15
FROM organizacion_deth;

/*==============================================================*/
/* Table: organizacion_detv                                     */
/*==============================================================*/
SELECT * FROM organizacion_detv;

SELECT 
   id_odetv,
   cod_orga,
   cod_mod,
   orden,
   cod_preg,
   valor 
FROM organizacion_detv;

/*==============================================================*/
/* Table: usuario                                               */
/*==============================================================*/
SELECT * FROM usuario;

SELECT usuario
   id_usuario,
   usuario,
   clave,
   nombres,
   apellidos
FROM usuario ;

/*==============================================================*/
/* Table: varias consultas                                      */
/*==============================================================*/

SELECT
  f.cod_usuario cod_usuario, f.numero numero, f.fecha fecha_registro, f.estado_p estado_p, f.clave clavecon, 
  substr(f.clave, 1, long_usuario) usu,
  substr(f.clave, long_usuario + 1, long_identificador) sec,
  substr(f.clave, long_usuario + long_identificador + 1) fec
FROM usuario u
INNER JOIN formulario f ON
  u.id_usuario = f.cod_usuario
ORDER BY f.cod_usuario, f.id_formulario asc


SELECT
 f.clave clave, u.nombres nombres, u.apellidos apellidos, f.numero numero, f.estado_p estado_p, f.cod_usuario cod_usuario, f.fecha fecha_crea, 
 substr(f.clave, 1, f.long_usuario) usuario_mod, 
 to_timestamp(substr(f.clave, f.long_usuario + f.long_identificador + 1), 'YYYYMMDDHH24MI') fecha_hora_mod,
 cast(coalesce(f.numero, '0') as integer) dos
FROM public.usuario u
INNER JOIN public.formulario f ON
  u.id_usuario = f.cod_usuario
ORDER BY f.cod_usuario, f.id_formulario asc


SELECT 
  id_fdeth,
  cod_form,
  cod_var,
  orden,
  val01,
  val02,
  val03,
  val04,
  val05,
  val06,
  val07,
  val08,
  val09,
  val10,
  val11,
  val12,
  val13,
  val14,
  val15,
  val16,
  clave
FROM public.formulario_deth 
WHERE cod_var = "m1b";


SELECT 
  id_fdetv,
  cod_form,
  cod_mod,
  orden,
  cod_preg,
  valor,
  clave
FROM public.formulario_detv 
WHERE cod_mod = 'm1a' ;