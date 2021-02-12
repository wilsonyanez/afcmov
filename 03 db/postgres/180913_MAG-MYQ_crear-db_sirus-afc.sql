/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     13/09/2018 14:57:07                          */
/*==============================================================*/


drop table if exists afc_agricola;

drop table if exists afc_agricola_m2;

drop table if exists afc_amenazasm12;

drop table if exists afc_apicultura;

drop table if exists afc_apicultura_m7;

drop table if exists afc_apicultura_mod7;

drop table if exists afc_credito_asistenciatec_m9;

drop table if exists afc_datos_ter_mod1;

drop table if exists afc_equipamientom11;

drop table if exists afc_familiar_mod1;

drop table if exists afc_gfc_mod1;

drop table if exists afc_gfc_mod1_2;

drop table if exists afc_infraestructura_m10;

drop table if exists afc_ingresos_m13;

drop table if exists afc_pecuario;

drop table if exists afc_pecuario_m3;

drop table if exists afc_producto_elaborado;

drop table if exists afc_producto_elaborado_m5;

drop table if exists afc_recoleccion;

drop table if exists afc_recoleccion_m6;

drop table if exists afc_tipo_produccion_mod4;

drop table if exists afc_trabajo_fam_con_mod8;

drop table if exists area_coordenadas;

drop table if exists asistencia_tecnica;

drop table if exists autoidentificacion;

drop table if exists base_reg_civil;

drop table if exists base_sri;

drop table if exists catalogo_arbustiva_forestal;

drop table if exists catalogo_asistencia_objetivo;

drop table if exists catalogo_aves_problemas;

drop table if exists catalogo_banco;

drop table if exists catalogo_bovinos;

drop table if exists catalogo_cultivos;

drop table if exists catalogo_cultivos_estado;

drop table if exists catalogo_destino_produccion;

drop table if exists catalogo_div_canton;

drop table if exists catalogo_div_parroquia;

drop table if exists catalogo_div_provincia;

drop table if exists catalogo_enfermedades;

drop table if exists catalogo_esp_forestal;

drop table if exists catalogo_esp_otras;

drop table if exists catalogo_infraestructura;

drop table if exists catalogo_maquinaria;

drop table if exists catalogo_pastos;

drop table if exists catalogo_rendimiento;

drop table if exists credito;

drop table if exists cultivos;

drop table if exists datos_informante;

drop table if exists datos_inicial;

drop table if exists datos_productor;

drop table if exists destino_produccion;

drop table if exists especie_avicola_existencias_plantel;

drop table if exists especie_avicola_galpones;

drop table if exists especie_avicola_plantel;

drop table if exists especie_avicola_plantel_ciclos;

drop table if exists especie_avicola_plantel_encubadoras;

drop table if exists especie_avicola_traspatio;

drop table if exists especie_bovino;

drop table if exists especie_bovino_leche;

drop table if exists especie_bovino_ventas;

drop table if exists especie_otros;

drop table if exists especie_porcino;

drop table if exists especie_porcino_enfermedades;

drop table if exists especie_porcino_galpones;

drop table if exists especie_porcino_reproduccion;

drop table if exists figura_organizativa;

drop table if exists formulario_verificar;

drop table if exists general;

drop table if exists genero;

drop table if exists gps_shape;

drop table if exists gps_shape_centroide;

drop table if exists gps_shape_chris;

drop table if exists gps_terrenos;

drop table if exists gps_usuarios;

drop table if exists grupo_preguntas_gfc;

drop table if exists infraestructura;

drop table if exists infraestructura_riego;

drop table if exists jornada;

drop table if exists listas_opciones;

drop table if exists log_auditoria;

drop table if exists log_procesos;

drop table if exists log_transaccion;

drop table if exists mano_obra;

drop table if exists mano_obra_ingresos;

drop table if exists mano_obra_jornaleros;

drop table if exists maquinaria;

drop table if exists medidas_sanitarias;

drop table if exists menu;

drop table if exists menu_perfil;

drop table if exists nacionalidad;

drop table if exists organizacion_hecho;

drop table if exists parametros;

drop table if exists parametros_lista;

drop table if exists perfil;

drop table if exists preguntas_gfc;

drop table if exists procesos;

drop table if exists produccion_forestal;

drop table if exists productor;

drop table if exists productor_organizacion;

drop table if exists pueblo_indigena;

drop table if exists relacion;

drop table if exists respuestas_preguntas_gfc;

drop table if exists terrenos;

drop table if exists tmp_catalogo_cultivo;

drop table if exists uso_suelo;

drop table if exists usuarios;

drop table if exists usuarios_bloque;

drop table if exists usuarios_provincial;

drop table if exists usuarios_sector;

/*==============================================================*/
/* Table: afc_agricola                                          */
/*==============================================================*/
create table afc_agricola
(
   COD_AGRICOLA         int(11) not null,
   CODIGO_INI           varchar(200) not null,
   TIPO                 int(11) not null,
   NOMBRE_CULTIVO       int(11) not null,
   TIPO_CULTIVO         varchar(200) not null,
   FORMA_CULTIVO        varchar(200) not null,
   DESTINO_CULTIVO      varchar(200) not null,
   FECHA_DESDE          date not null,
   FECHA_HASTA          date not null,
   VOLUMEN              decimal(10,2) not null,
   UNIDAD_MEDIDA        varchar(10) not null,
   FORMA_VENTA_CULTIVO  varchar(200) not null,
   TIPO_MERCADO         varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            int(11) not null,
   CANTON               int(10) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   OBSERVACIONES        varchar(200) not null,
   primary key (COD_AGRICOLA)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_agricola_m2                                       */
/*==============================================================*/
create table afc_agricola_m2
(
   COD_AGRICOLA         int(11) not null,
   CODIGO_INI           varchar(200) not null,
   TIPO                 int(11) not null,
   NOMBRE_CULTIVO       int(11) not null,
   TIPO_CULTIVO         varchar(200) not null,
   FORMA_CULTIVO        varchar(200) not null,
   DESTINO_CULTIVO      varchar(200) not null,
   FECHA_DESDE          date not null,
   FECHA_HASTA          date not null,
   VOLUMEN              decimal(10,2) not null,
   UNIDAD_MEDIDA        varchar(10) not null,
   FORMA_VENTA_CULTIVO  varchar(200) not null,
   TIPO_MERCADO         varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            int(11) not null,
   CANTON               int(10) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   OBSERVACIONES        varchar(200) not null,
   primary key (COD_AGRICOLA)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_amenazasm12                                       */
/*==============================================================*/
create table afc_amenazasm12
(
   ID_AMENAZAS          int(11) not null,
   CODIGO_INI           varchar(100) not null,
   SEQUIA               varchar(11) not null default '0',
   HELADA               varchar(11) not null default '0',
   PLAGAS               varchar(11) not null default '0',
   INUNDACIONES         varchar(11) not null default '0',
   LLUVIAS              varchar(11) not null default '0',
   OTRA1                varchar(200) not null default '',
   OBSERVACION1         varchar(200) not null default '',
   AUMENTO_TEMPERATURA  varchar(11) not null default '0',
   DISMINUCION_TEMPERATURA varchar(11) not null default '0',
   AUMENTO_LLUVIAS      varchar(11) not null default '0',
   DISMINUCION_LLUVIAS  varchar(11) not null default '0',
   CAMBIO_ESTACION      varchar(11) not null default '0',
   AUMENTO_HELADAS      varchar(11) not null default '0',
   AUMENTO_VIENTOS      varchar(11) not null default '0',
   OTRA2                varchar(200) not null default '',
   OBSERVACION2         varchar(200) not null default '',
   CAPTACION            varchar(11) not null default '0',
   ZANJAS               varchar(11) not null default '0',
   DRENAJE              varchar(11) not null default '0',
   RESIDENTES           varchar(11) not null default '0',
   OTRA3                varchar(200) not null default '',
   OBSERVACION3         varchar(200) not null default '',
   ABONO                varchar(11) not null default '0',
   LABRANZA             varchar(11) not null default '0',
   COBERTURAS           varchar(11) not null default '0',
   BIOLES               varchar(11) not null default '0',
   CULTIVOS_CURVAS      varchar(11) not null default '0',
   CULTIVOS_CAMAS       varchar(11) not null default '0',
   OTRA4                varchar(200) not null default '',
   OBSERVACION4         varchar(200) not null default '',
   CONTROL_QUIMICO      varchar(11) not null default '0',
   CONTROL_BIOLOGICO    varchar(11) not null default '0',
   CONTROL_MECANICO     varchar(11) not null default '0',
   MANEJO_INTEGRADO     varchar(11) not null default '0',
   OTRA5                varchar(200) not null default '',
   OBSERVACION5         varchar(200) not null default '',
   CERCAS               varchar(11) not null default '0',
   SISTEMAS             varchar(11) not null default '0',
   REFORESTACION        varchar(11) not null default '0',
   OTRA6                varchar(200) not null default '',
   OBSERVACION6         varchar(200) not null default '',
   BIODIGESTOR          varchar(11) not null default '0',
   FILTROS              varchar(11) not null default '0',
   BANOS                varchar(11) not null default '0',
   COCINAS              varchar(11) not null default '0',
   OTRA7                varchar(200) not null default '',
   OBSERVACION7         varchar(200) not null default '',
   primary key (ID_AMENAZAS)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_apicultura                                        */
/*==============================================================*/
create table afc_apicultura
(
   COD_RECOLECCION      int(11) not null,
   CODIGO_INI           varchar(200) not null,
   SI_PREDIO_COLMENA    varchar(10) not null default '0',
   NO_PREDIO_COLMENA    varchar(10) not null default '0',
   NUMERO_COLMENA       int(11) not null,
   NOMBRE_PRODUCTO      varchar(200) not null,
   FRECUENCIA           varchar(200) not null,
   VOLUMEN              decimal(10,2) not null,
   UNIDAD               varchar(200) not null,
   DESTINO_PRODUCTO     varchar(200) not null,
   VENTA_PRODUCTO       varchar(200) not null,
   LUGAR_VENTA          varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            varchar(200) not null,
   CANTON               varchar(200) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   NOTIFICACION_SANITARIA varchar(200) not null,
   OBSERVACIONES        varchar(200) not null,
   CENTRIFUGADA_INDUSTRIAL varchar(10) not null default '0',
   CENTRIFUGADA_MANUAL  varchar(10) not null default '0',
   CENTRIFUGADA_ARTESANAL varchar(10) not null default '0',
   DECANTADOR_ACERO     varchar(10) not null default '0',
   DECANTADOR_DOMESTICO varchar(10) not null default '0',
   DECANTADOR_ARTESANAL varchar(10) not null default '0',
   primary key (COD_RECOLECCION)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_apicultura_m7                                     */
/*==============================================================*/
create table afc_apicultura_m7
(
   COD_RECOLECCION      int(11) not null,
   CODIGO_INI           varchar(200) not null,
   NOMBRE_PRODUCTO      varchar(200) not null,
   FRECUENCIA           varchar(200) not null,
   VOLUMEN              decimal(10,2) not null,
   UNIDAD               varchar(200) not null,
   DESTINO_PRODUCTO     varchar(200) not null,
   VENTA_PRODUCTO       varchar(200) not null,
   LUGAR_VENTA          varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            varchar(200) not null,
   CANTON               varchar(200) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   NOTIFICACION_SANITARIA varchar(200) not null,
   OBSERVACIONES        varchar(200) not null,
   primary key (COD_RECOLECCION)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_apicultura_mod7                                   */
/*==============================================================*/
create table afc_apicultura_mod7
(
   COD_RECOLECCION      int(11) not null,
   CODIGO_INI           varchar(200) not null,
   SI_PREDIO_COLMENA    varchar(10) not null default '0',
   NO_PREDIO_COLMENA    varchar(10) not null default '0',
   NUMERO_COLMENA       int(11) not null,
   CENTRIFUGADA_INDUSTRIAL varchar(10) not null default '0',
   CENTRIFUGADA_MANUAL  varchar(10) not null default '0',
   CENTRIFUGADA_ARTESANAL varchar(10) not null default '0',
   DECANTADOR_ACERO     varchar(10) not null default '0',
   DECANTADOR_DOMESTICO varchar(10) not null default '0',
   DECANTADOR_ARTESANAL varchar(10) not null default '0',
   primary key (COD_RECOLECCION)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_credito_asistenciatec_m9                          */
/*==============================================================*/
create table afc_credito_asistenciatec_m9
(
   ID_CREDASISTEC       int(11) not null,
   CODIGO_INI           varchar(100) not null,
   M9_ESTADOUNO         varchar(10) not null default 'Off',
   M9_BANECUADOR        varchar(10) not null default '0',
   M9_PRESTAMISTA       varchar(10) not null default '0',
   M9_OTROBANCO         varchar(10) not null default '0',
   M9_FAMILIAR          varchar(10) not null default '0',
   M9_COOPERATIVA       varchar(10) not null default '0',
   M9_COMUNITARIA       varchar(10) not null default '0',
   M9_OTROASITEC        varchar(200) not null default '',
   M9_VENTAPROD         varchar(10) not null default '0',
   M9_INGRESOSFUERA     varchar(10) not null default '0',
   M9_ESTADODOS         varchar(10) not null default 'Off',
   M9_MAG               varchar(10) not null default '0',
   M9_MAGCAT            varchar(100) not null default '',
   M9_MAGNOMBRE         varchar(100) not null default '',
   M9_ONG               varchar(10) not null default '0',
   M9_ONGCAT            varchar(100) not null default '',
   M9_ONGNOMBRE         varchar(100) not null default '',
   M9_CASACOMERCIAL     varchar(10) not null default 'Off',
   M9_CASACOMERCIALCAT  varchar(100) not null default '',
   M9_CASACOMERCIALNOMBRE varchar(100) not null default '',
   M9_GAD               varchar(10) not null default '0',
   M9_GADCAT            varchar(100) not null default '',
   M9_GADNOMBRE         varchar(100) not null default '',
   M9_UNIVERSIDAD       varchar(10) not null default '0',
   M9_UNIVERSIDADCAT    varchar(100) not null default '',
   M9_UNIVERSIDADNOMBRE varchar(100) not null default '',
   M9_EMPRIVADA         varchar(10) not null default '0',
   M9_EMPRIVADACAT      varchar(100) not null default '',
   M9_EMPRIVADAOMBRE    varchar(100) not null default '',
   M9_OTRO              varchar(10) not null default '0',
   M9_OTROS             varchar(100) not null default '',
   M9_OTROS2            varchar(100) not null default '',
   M9_OBSERVACIONES     varchar(200) not null default '',
   primary key (ID_CREDASISTEC)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_datos_ter_mod1                                    */
/*==============================================================*/
create table afc_datos_ter_mod1
(
   CODIGO_DATOS_TER_M1  int(11) not null,
   CODIGO_TER           varchar(32) not null,
   COOR_X               int(11) not null,
   COOR_Y               int(11) not null,
   COOR_Z               int(11) not null,
   ZONA                 int(11) default NULL,
   HEMISFERIO           varchar(8) default NULL,
   COORDENADAS_OK       tinyint(4) not null default 0,
   CODIGO_M1            int(11) not null,
   primary key (CODIGO_DATOS_TER_M1)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: afc_equipamientom11                                   */
/*==============================================================*/
create table afc_equipamientom11
(
   ID_EQUIPAMIENTO      int(11) not null,
   CODIGO_INI           varchar(100) not null,
   TRACTOR              varchar(10) not null default '0',
   TRACTOR1             varchar(10) not null default '0',
   MONOCULTOR           varchar(10) not null default '0',
   MONOCULTOR1          varchar(10) not null default '0',
   ACCESORIOS_MONOCULTOR varchar(10) not null default '0',
   ACCESORIOS_MONOCULTOR1 varchar(10) not null default '0',
   ACCESORIOS_TRACTOR   varchar(10) not null default '0',
   ACCESORIOS_TRACTOR1  varchar(10) not null default '0',
   BOMBA_ESTACIONARIA   varchar(10) not null default '0',
   BOMBA_ESTACIONARIA1  varchar(10) not null default '0',
   BOMBA_MOCHILA        varchar(10) not null default '0',
   BOMBA_MOCHILA1       varchar(10) not null default '0',
   BOMBA_AGUA           varchar(10) not null default '0',
   BOMBA_AGUA1          varchar(10) not null default '0',
   MOTOGUADANA          varchar(10) not null default '0',
   MOTOGUADANA1         varchar(10) not null default '0',
   ENSILADORA           varchar(10) not null default '0',
   ENSILADORA1          varchar(10) not null default '0',
   PICADORA             varchar(10) not null default '0',
   PICADORA1            varchar(10) not null default '0',
   MOLINO               varchar(10) not null default '0',
   MOLINO1              varchar(10) not null default '0',
   SECADORA             varchar(10) not null default '0',
   SECADORA1            varchar(10) not null default '0',
   DESGRANADORA         varchar(10) not null default '0',
   DESGRANADORA1        varchar(10) not null default '0',
   HERRAMIENTAS         varchar(10) not null default '0',
   HERRAMIENTAS1        varchar(10) not null default '0',
   ORDENO               varchar(10) not null default '0',
   ORDENO1              varchar(10) not null default '0',
   EQUIPAMIENTO         varchar(10) not null default '0',
   EQUIPAMIENTO1        varchar(10) not null default '0',
   TRANSPORTE           varchar(10) not null default '0',
   TRANSPORTE1          varchar(10) not null default '0',
   OTRO                 varchar(200) not null default '',
   OTRO1                varchar(200) not null default '',
   OBSERVACIONES        varchar(200) not null default '',
   primary key (ID_EQUIPAMIENTO)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_familiar_mod1                                     */
/*==============================================================*/
create table afc_familiar_mod1
(
   CODIGO_FAM           int(11) not null,
   CEDULA_FAM           text not null,
   primary key (CODIGO_FAM)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: afc_gfc_mod1                                          */
/*==============================================================*/
create table afc_gfc_mod1
(
   CODIGO_M1            int(11) not null,
   CEDULA_INF           varchar(13) default NULL,
   CODIGO_TER_VIS       varchar(32) default NULL,
   CODIGO_PROD          int(16) not null,
   CODIGO_INI           varchar(100) not null,
   primary key (CODIGO_M1)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: afc_gfc_mod1_2                                        */
/*==============================================================*/
create table afc_gfc_mod1_2
(
   CODIGO_M1            int(11) not null,
   CEDULA_INF           varchar(32) default NULL,
   CODIGO_TER_VIS       varchar(32) default NULL,
   USO_TER_VIS          varchar(16) default NULL,
   COOR_Y_VIS           varchar(16) default NULL,
   COOR_X_VIS           varchar(16) default NULL,
   COOR_Z_VIS           varchar(16) default NULL,
   HEMISFERIO_VIS       varchar(8) default NULL,
   ZONA_VIS             varchar(8) default NULL,
   CONFIRMAR_COOR       tinyint(4) default NULL,
   CODIGO_PROD          int(11) not null,
   CODIGO_INI           varchar(100) not null,
   primary key (CODIGO_M1)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: afc_infraestructura_m10                               */
/*==============================================================*/
create table afc_infraestructura_m10
(
   ID_INFRAESTRUCTURA   int(11) not null,
   CODIGO_INI           varchar(200) not null,
   M10_VIVIENDA         varchar(10) not null default '0',
   M10_BODEGA           varchar(10) not null default '0',
   M10_ESTABLO          varchar(10) not null default '0',
   M10_CORRAL           varchar(10) not null default '0',
   M10_SILO             varchar(10) not null default '0',
   M10_GRANERO          varchar(10) not null default '0',
   M10_TENDAL           varchar(10) not null default '0',
   M10_MARQUESINA       varchar(10) not null default '0',
   M10_RESERVORIO       varchar(10) not null default '0',
   M10_VIVERO           varchar(10) not null default '0',
   M10_INVERNADERO      varchar(10) not null default '0',
   M10_OTROS            varchar(100) not null default '',
   M10_ASFALTADA        varchar(10) not null default '0',
   M10_LASTRADA         varchar(10) not null default '0',
   M10_ADOQUINADO       varchar(10) not null default '0',
   M10_TIERRA           varchar(10) not null default '0',
   M10_EMPEDRADA        varchar(10) not null default '0',
   M10_OTROS_ACCESO     varchar(100) not null default '',
   M10_ESTADO           varchar(10) not null default 'Off',
   M10_CANAL            varchar(10) not null default '0',
   M10_RIEGO            varchar(10) not null default '0',
   M10_POZO             varchar(10) not null default '0',
   M10_OTRAFUENTE       varchar(10) not null default '0',
   M10_NOMBRECANAL      varchar(10) not null default '0',
   M10_ASPERSION        varchar(10) not null default '0',
   M10_GOTEO            varchar(10) not null default '0',
   M10_GRAVEDAD         varchar(10) not null default '0',
   M10_NEBULIZACION     varchar(10) not null default '0',
   M10_OTROSRIEGO       varchar(200) not null default '',
   M10_SUPERFICIEREGADA varchar(10) not null default '0',
   M10_UNIDAD           varchar(100) not null default '',
   M10_OBSERVACIONES    varchar(10) not null default '0',
   primary key (ID_INFRAESTRUCTURA)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_ingresos_m13                                      */
/*==============================================================*/
create table afc_ingresos_m13
(
   ID_INGRESOS          int(11) not null,
   CODIGO_INI           varchar(100) not null,
   ACTIVIDADES_DENTRO   varchar(10) not null default '0',
   ACTIVIDADES_FUERA    varchar(10) not null default '0',
   AMBAS                varchar(10) not null default '0',
   INGRESO_DOLARES_VENTA decimal(10,2) not null default 0.00,
   SEMANAL              varchar(10) not null default '0',
   MUNSUAL              varchar(10) not null default '0',
   ANUAL                varchar(10) not null default '0',
   INGRESO_DOLARES_FUERA decimal(10,2) not null default 0.00,
   SEMANAL1             varchar(10) not null default '0',
   MENSUAL1             varchar(10) not null default '0',
   ANUAL1               varchar(10) not null default '0',
   SI                   varchar(10) not null default 'Off',
   FECHA                varchar(100) not null,
   primary key (ID_INGRESOS)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_pecuario                                          */
/*==============================================================*/
create table afc_pecuario
(
   COD_PECUARIO         int(11) not null,
   CODIGO_INI           varchar(200) not null,
   TIPO                 int(11) not null,
   ESPECIE_ANIMAL       varchar(200) not null,
   NUMERO               int(11) not null,
   FORMA_PRODUCCION     varchar(200) not null,
   OTRA_FORMA_PRODUCCION varchar(200) not null default '',
   PROPOSITO            varchar(200) not null,
   OTRO_PROPOSITO       varchar(200) not null default '',
   FRECUENCIA           varchar(200) not null,
   VOLUMEN_ACTUAL       decimal(10,2) not null,
   UNIDAD_ACTUAL        varchar(200) not null,
   DESTINO_PRODUCTO     varchar(200) not null,
   VENTA_PRODUCTO       varchar(200) not null,
   LUGAR_VENTA          varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            varchar(20) not null,
   CANTON               varchar(200) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   OBSERVACIONES        varchar(200) not null,
   primary key (COD_PECUARIO)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_pecuario_m3                                       */
/*==============================================================*/
create table afc_pecuario_m3
(
   COD_PECUARIO         int(11) not null,
   CODIGO_INI           varchar(200) not null,
   TIPO                 int(11) not null,
   ESPECIE_ANIMAL       varchar(200) not null,
   NUMERO               int(11) not null,
   FORMA_PRODUCCION     varchar(200) not null,
   OTRA_FORMA_PRODUCCION varchar(200) not null default '',
   PROPOSITO            varchar(200) not null,
   OTRO_PROPOSITO       varchar(200) not null default '',
   FRECUENCIA           varchar(200) not null,
   VOLUMEN_ACTUAL       decimal(10,2) not null,
   UNIDAD_ACTUAL        varchar(200) not null,
   DESTINO_PRODUCTO     varchar(200) not null,
   VENTA_PRODUCTO       varchar(200) not null,
   LUGAR_VENTA          varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            varchar(20) not null,
   CANTON               varchar(200) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   OBSERVACIONES        varchar(200) not null,
   primary key (COD_PECUARIO)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_producto_elaborado                                */
/*==============================================================*/
create table afc_producto_elaborado
(
   COD_PROD_ELABORADO   int(11) not null,
   CODIGO_INI           varchar(200) not null,
   TIPO                 int(11) not null,
   PRODUCTO_ELABORADO   varchar(200) not null,
   FRECUENCIA           varchar(200) not null,
   VOLUMEN              decimal(10,2) not null,
   UNIDAD               varchar(200) not null,
   VENTA_PRODUCTO       varchar(200) not null,
   LUGAR_VENTA          varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            varchar(200) not null,
   CANTON               varchar(200) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   NOTIFICACION_SANITARIA varchar(10) not null,
   OBSERVACIONES        varchar(200) not null,
   primary key (COD_PROD_ELABORADO)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_producto_elaborado_m5                             */
/*==============================================================*/
create table afc_producto_elaborado_m5
(
   COD_PROD_ELABORADO   int(11) not null,
   CODIGO_INI           varchar(200) not null,
   TIPO                 int(11) not null,
   PRODUCTO_ELABORADO   varchar(200) not null,
   FRECUENCIA           varchar(200) not null,
   VOLUMEN              decimal(10,2) not null,
   UNIDAD               varchar(200) not null,
   VENTA_PRODUCTO       varchar(200) not null,
   LUGAR_VENTA          varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            varchar(200) not null,
   CANTON               varchar(200) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   NOTIFICACION_SANITARIA varchar(10) not null,
   OBSERVACIONES        varchar(200) not null,
   primary key (COD_PROD_ELABORADO)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_recoleccion                                       */
/*==============================================================*/
create table afc_recoleccion
(
   COD_RECOLECCION      int(11) not null,
   CODIGO_INI           varchar(200) not null,
   NOMBRE_PRODUCTO      varchar(200) not null,
   FRECUENCIA           varchar(200) not null,
   VOLUMEN              decimal(10,2) not null,
   UNIDAD               varchar(200) not null,
   DESTINO_PRODUCTO     varchar(200) not null,
   VENTA_PRODUCTO       varchar(200) not null,
   LUGAR_VENTA          varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            varchar(200) not null,
   CANTON               varchar(200) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   OBSERVACIONES        varchar(200) not null,
   primary key (COD_RECOLECCION)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_recoleccion_m6                                    */
/*==============================================================*/
create table afc_recoleccion_m6
(
   COD_RECOLECCION      int(11) not null,
   CODIGO_INI           varchar(200) not null,
   NOMBRE_PRODUCTO      varchar(200) not null,
   FRECUENCIA           varchar(200) not null,
   VOLUMEN              decimal(10,2) not null,
   UNIDAD               varchar(200) not null,
   DESTINO_PRODUCTO     varchar(200) not null,
   VENTA_PRODUCTO       varchar(200) not null,
   LUGAR_VENTA          varchar(200) not null,
   OTRO_TIPO_MERCADO    varchar(200) not null default '',
   PROVINCIA            varchar(200) not null,
   CANTON               varchar(200) not null,
   PARROQUIA            varchar(200) not null,
   NOMBRE_ESPACIO_VENTA varchar(200) not null,
   OBSERVACIONES        varchar(200) not null,
   primary key (COD_RECOLECCION)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_tipo_produccion_mod4                              */
/*==============================================================*/
create table afc_tipo_produccion_mod4
(
   ID_TIPOPROD          int(11) not null,
   CODIGO_INI           varchar(100) not null,
   M4_CONVENCIONAL      varchar(100) not null default '0',
   M4_ORGANICO          varchar(100) default '0',
   M4_AGROECOLOGICO     char(200) not null default '0',
   M4_TRANSICION        varchar(200) default '0',
   M4_OTRO              varchar(200) not null default '',
   M4_ESTADO            varchar(200) default 'Off',
   M4_PROD_ORGANICA     varchar(200) not null default '0',
   M4_PRAC_AMBIENTE     varchar(200) default '0',
   M4_PRAC_AGROPE       varchar(200) not null default '0',
   M4_AGRICULTURA       varchar(200) default '0',
   M4_SOSTENIBLE        varchar(200) not null default '0',
   M4_FORESTAL          varchar(200) not null default '0',
   M4_COMERCIO_JUSTO    varchar(200) not null default '0',
   M4_CERTIFICACION     varchar(200) not null default '0',
   M4_SIS_PARTICIPATIVO varchar(200) not null default '0',
   M4_BUENAS_PRACTICCAS varchar(200) not null default '0',
   M4_OTROS             varchar(200) not null default '0',
   M4_VAL_OTROS         varchar(200) not null default '',
   M4_OBSERVACIONES     varchar(200) not null default '',
   primary key (ID_TIPOPROD)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: afc_trabajo_fam_con_mod8                              */
/*==============================================================*/
create table afc_trabajo_fam_con_mod8
(
   CODIGO_TFC           int(11) not null,
   FAM_PER_H            int(11) not null default 0,
   FAM_PER_M            int(11) not null default 0,
   FAM_OCA_H            int(11) not null default 0,
   FAM_OCA_M            int(11) not null default 0,
   CON_PER_H            int(11) not null default 0,
   CON_PER_M            int(11) not null default 0,
   CON_OCA_H            int(11) not null default 0,
   CON_OCA_M            int(11) not null default 0,
   OBSERVACIONES        varchar(128) default NULL,
   CODIGO_INI           varchar(100) not null,
   CODIGO_PROD          int(11) not null,
   primary key (CODIGO_TFC)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: area_coordenadas                                      */
/*==============================================================*/
create table area_coordenadas
(
   ac_id                int(11) not null,
   ubi_id               int(11) not null,
   ac_x                 int(20) default NULL,
   ac_y                 int(20) default NULL,
   ac_reg_usu           int(11) default NULL,
   ac_reg_fecha         datetime default NULL,
   ac_act_usu           int(11) default NULL,
   ac_act_fecha         datetime default NULL,
   primary key (ac_id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: asistencia_tecnica                                    */
/*==============================================================*/
create table asistencia_tecnica
(
   CODIGO_ASTEC         int(10) unsigned not null comment 'CONTIENE EL CODIGO UNICO DE IDENTIFICACION DE LA ASISTENCIA TECNICA',
   CODIGO_INI           varchar(100) default NULL comment 'CONTIENE EL CODIGO UNICO DE IDENTIFICACION DE LA TABLA DATOS INICIAL',
   DISPONE_ASTEC        varchar(20) default NULL comment 'CONTIENE INFORMACION DE SI O NO DISPONES DE AISTENCIA TECNICA',
   FUENTE_ASTEC         varchar(50) default NULL comment 'CONTIENE INFORMACION DE LA FUENTE DE ASISTENCIA TECNICA',
   OBJETIVO_ASTEC       varchar(50) default NULL comment 'CONTIENE INFORMACION DEL OBJETIVO DE LA ASISTENCIA TECNICA',
   OTRO_OBJETIVO_ASTEC  text not null comment 'CONTIENE INFORMACION DE OTRO OBJETIVO',
   ESTADO_ASTEC         char(1) not null comment 'CONTIENE EL ESTADO A=ACTIVO I=INACTIVO DEL DATO',
   USUARIO_CREA_ASTEC   int(10) default NULL,
   FECHA_CREA_ASTEC     timestamp default NULL,
   USUARIO_MOD_ASTEC    int(10) default NULL,
   FECHA_MOD_ASTEC      timestamp default NULL,
   primary key (CODIGO_ASTEC)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: autoidentificacion                                    */
/*==============================================================*/
create table autoidentificacion
(
   CODIGO_AUT_IDEN      int(11) not null,
   AUTOIDENTIFICACION   varchar(50) default NULL,
   primary key (CODIGO_AUT_IDEN)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: base_reg_civil                                        */
/*==============================================================*/
create table base_reg_civil
(
   CODIGO               int(11) unsigned not null,
   CEDULA               text not null,
   NOMBRE               text not null,
   CONDICION_CEDULADO   text not null,
   FECHA_NACIMIENTO     text not null,
   LUGAR_NACIMIENTO     text,
   ESTADO_CIVIL         text,
   CONYUGE              text,
   DOMICILIO            text,
   CALLES_DOMICILIO     text,
   NUMERO_CASA          text,
   INSTRUCCION          text,
   CODIGO_GEN           int(11) default NULL,
   NOMBRES_SOLO         text not null,
   APELLIDOS_SOLO       text not null,
   FECHA_CONSULTA       text not null,
   CODIGO_ERROR         text,
   CODIGO_NAC           int(11) default NULL,
   TRABAJA_UNIDAD_PRODUCTIVA int(1) default NULL,
   CODIGO_PROD          int(10) unsigned default NULL,
   CODIGO_REL           int(11) default NULL,
   JORNADA              float default NULL,
   primary key (CODIGO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: base_sri                                              */
/*==============================================================*/
create table base_sri
(
   CODIGO               int(11) unsigned not null,
   RUC                  text not null,
   RAZON_SOCIAL         text,
   DIRECCION_LARGA      text,
   DIRECCION_CORTA      text,
   TELEFONO_TRABAJO     text,
   TELEFONO_DOMICILIO   text,
   ACTIVIDAD_ECONOMICA  text,
   NOMBRE_COMERCIAL     text,
   REPRE_LEGAL_NOMBRE   text,
   REPRE_LEGAL_IDEN     text,
   LISTA_BLANCA         text,
   ESTADO               text,
   FECHA_CONSULTA       text,
   CODIGO_ERROR         text,
   CODIGO_FIG_ORG       int(11) default NULL,
   NUMERO_SOCIOS        int(11) default NULL,
   CORREO               varchar(100) default NULL,
   primary key (CODIGO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_arbustiva_forestal                           */
/*==============================================================*/
create table catalogo_arbustiva_forestal
(
   CODIGO_ARBUS_FORST   int(11) not null,
   NOMBRE_ARBUS_FOREST  varchar(100) default NULL,
   PRIORIDAD_ARBUS_FOREST int(11) default NULL,
   ESTADO_ARBUS_FOREST  varchar(2) default NULL,
   primary key (CODIGO_ARBUS_FORST)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: catalogo_asistencia_objetivo                          */
/*==============================================================*/
create table catalogo_asistencia_objetivo
(
   CAO_CODIGO           int(11) unsigned not null,
   CAO_NOMBRE           varchar(100) not null,
   CAO_PRIORIDAD        int(11) not null,
   CAO_ESTADO           char(1) not null,
   primary key (CAO_CODIGO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_aves_problemas                               */
/*==============================================================*/
create table catalogo_aves_problemas
(
   CODIGO_CAP           int(11) unsigned not null,
   NOMBRE_CAP           varchar(100) not null,
   ESTADO_CAP           char(1) not null,
   primary key (CODIGO_CAP)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: catalogo_banco                                        */
/*==============================================================*/
create table catalogo_banco
(
   CODIGO_BANCO         int(11) unsigned not null,
   NOMBRE_BANCO         varchar(200) not null,
   PRIORIDAD_BANCO      int(11) not null,
   ESTADO_BANCO         char(1) not null,
   primary key (CODIGO_BANCO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_bovinos                                      */
/*==============================================================*/
create table catalogo_bovinos
(
   CODIGO_BOV           int(11) unsigned not null,
   RAZA_BOV             varchar(100) not null,
   PRIORIDAD_BOV        int(11) not null,
   ESTADO_BOV           char(1) not null,
   primary key (CODIGO_BOV)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: catalogo_cultivos                                     */
/*==============================================================*/
create table catalogo_cultivos
(
   CODIGO_CULT          int(11) unsigned not null,
   TIPO_CULT            varchar(50) not null,
   NOMBRE_CULT          varchar(100) not null,
   ESTADO_CULT          char(1) not null,
   primary key (CODIGO_CULT)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: catalogo_cultivos_estado                              */
/*==============================================================*/
create table catalogo_cultivos_estado
(
   CODIGO_CULTEST       int(11) unsigned not null,
   CODIGO_CULT          int(11) not null,
   RECOLECCION_CULTEST  varchar(100) not null,
   TIPO_CULTEST         varchar(50) not null,
   ESTADO_CULTEST       char(1) not null,
   primary key (CODIGO_CULTEST)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_destino_produccion                           */
/*==============================================================*/
create table catalogo_destino_produccion
(
   CDP_CODIGO           int(11) unsigned not null,
   CDP_NOMBRE           varchar(100) not null,
   CDP_PRIORIDAD        int(11) not null,
   CDP_ESTADO           char(1) not null,
   primary key (CDP_CODIGO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_div_canton                                   */
/*==============================================================*/
create table catalogo_div_canton
(
   CODIGO_CAN           int(11) not null,
   NOMBRE_CAN           varchar(200) not null,
   ID_PROV              int(10) not null,
   ID_CAN               int(10) not null,
   primary key (CODIGO_CAN)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_div_parroquia                                */
/*==============================================================*/
create table catalogo_div_parroquia
(
   CODIGO_PAR           int(11) unsigned not null,
   NOMBRE_PAR           varchar(200) not null,
   ID_PROV              int(11) not null,
   ID_CAN               int(11) not null,
   ID_PAR               int(11) not null,
   primary key (CODIGO_PAR)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_div_provincia                                */
/*==============================================================*/
create table catalogo_div_provincia
(
   CODIGO_PROV          int(11) not null,
   NOMBRE_PROV          varchar(200) not null,
   ID_PROV              int(10) not null,
   primary key (CODIGO_PROV)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_enfermedades                                 */
/*==============================================================*/
create table catalogo_enfermedades
(
   CODIGO_ENF           int(11) unsigned not null,
   ESPECIE_ENF          varchar(50) not null,
   NOMBRE_ENF           varchar(200) not null,
   ESTADO_ENF           char(1) not null,
   primary key (CODIGO_ENF)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: catalogo_esp_forestal                                 */
/*==============================================================*/
create table catalogo_esp_forestal
(
   CODIGO_FOR           int(11) unsigned not null,
   NOMBRE_CIEN_FOR      text not null,
   NOMBRE_FOR           text not null,
   ESTADO_FOR           char(1) not null,
   primary key (CODIGO_FOR)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_esp_otras                                    */
/*==============================================================*/
create table catalogo_esp_otras
(
   CODIGO_CEO           int(11) unsigned not null,
   NOMBRE_CEO           text not null,
   ESTADO_CEO           char(1) not null,
   primary key (CODIGO_CEO)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: catalogo_infraestructura                              */
/*==============================================================*/
create table catalogo_infraestructura
(
   CODIGO_CINFRA        int(11) unsigned not null,
   NOMBRE_CINFRA        varchar(250) not null,
   ESTADO_CINFRA        char(1) not null,
   APLI_CINFRA          varchar(3) not null,
   primary key (CODIGO_CINFRA)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_maquinaria                                   */
/*==============================================================*/
create table catalogo_maquinaria
(
   CODIGO_CMAQ          int(11) unsigned not null,
   NOMBRE_CMAQ          varchar(250) not null,
   CODIGO_GRUPO_CMAQ    int(11) not null,
   TIPO_MAQUINARIA_CMAQ varchar(100) not null,
   PRIORIDAD_CMAQ       int(11) not null,
   ESTADO_CMAQ          char(1) not null,
   primary key (CODIGO_CMAQ)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: catalogo_pastos                                       */
/*==============================================================*/
create table catalogo_pastos
(
   CODIGO_PASTOS        int(11) not null,
   NOMBRE_PASTOS        varchar(45) default NULL,
   PRIORIDAD_PASTOS     int(11) default NULL,
   ESTADO_PASTOS        varchar(2) default NULL,
   primary key (CODIGO_PASTOS)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: catalogo_rendimiento                                  */
/*==============================================================*/
create table catalogo_rendimiento
(
   CODIGO_REN           int(11) not null,
   CODIGO_CULTEST       int(11) not null,
   INFERIOR_TM3_HAS     decimal(12,3) not null,
   SUPERIOR_TM3_HAS     decimal(12,3) not null,
   INFERIOR_LB_HAS      decimal(12,3) not null,
   SUPERIOR_LB_HAS      decimal(12,3) not null,
   INFERIOR_LB_CUA      decimal(12,3) not null,
   SUPERIOR_LB_CUA      decimal(12,3) not null,
   INFERIOR_LB_M2       decimal(12,3) not null,
   SUPERIOR_LB_M2       decimal(12,3) not null,
   ESTADO_REN           varchar(1) not null
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: credito                                               */
/*==============================================================*/
create table credito
(
   CODIGO_CRE           int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   DISPONE_CRE          varchar(20) default NULL,
   FUENTE_CRE           varchar(50) default NULL,
   ESTADO_CRE           char(1) not null,
   USUARIO_CREA_CRE     int(10) default NULL,
   FECHA_CREA_CRE       timestamp default NULL,
   USUARIO_MOD_CRE      int(10) default NULL,
   FECHA_MOD_CRE        timestamp default NULL,
   primary key (CODIGO_CRE)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: cultivos                                              */
/*==============================================================*/
create table cultivos
(
   CODIGO_CPT           int(11) unsigned not null,
   CODIGO_INI           varchar(100) not null,
   ACTIVIDAD_CULTIVO_CPT text not null,
   COD_CULT_CPT         int(11) not null,
   TIPO_ASOCIAMIENTO_CPT text not null,
   CODIGO_ASOCIAMIENTO_CPT int(11) not null,
   PLANTULAS_CPT        varchar(2) not null,
   FERTIZANTES_CPT      varchar(2) not null,
   CONDICION_CPT        text not null,
   SUPERFICIE_PLANTADA_CPT float not null,
   SUPERFICIE_PROD_CPT  float not null,
   SUPERFICIE_COSECHADA_CPT float not null,
   MOTIVO_COSECHA_BAJA_CPT text not null comment 'P=Plaga, F=Fenomenos  Climaticos, O=Otra Razon',
   CANTIDAD_CPT         int(11) not null,
   UNI_MEDIDA_CPT       text not null,
   EQUIV_LIBRAS_CPT     text not null,
   CANTIDAD_VENTA_CPT   int(11) not null,
   UNI_MEDIDA_VENTA_CPT text not null,
   EQUIV_LIBRAS_VENTA_CPT text not null,
   ESTADO_PRI_COSECHA_CPT varchar(100) not null,
   ESTADO_PRI_VENTA_CPT varchar(100) not null,
   ESTADO_CPT           char(1) not null,
   USUARIO_CREA_CPT     int(11) not null,
   FECHA_CREA_CPT       datetime not null,
   USUARIO_MOD_CPT      int(11) not null,
   FECHA_MOD_CPT        datetime not null,
   primary key (CODIGO_CPT)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: datos_informante                                      */
/*==============================================================*/
create table datos_informante
(
   CODIGO_INF           int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   NOMBRES_INF          varchar(100) default NULL,
   APELLIDOS_INF        varchar(100) default NULL,
   RELACION_INF         varchar(20) default NULL,
   FECHA_ENTREVISTA_INF timestamp default NULL,
   OBSERVACION_INF      text,
   ESTADO_INF           char(1) not null,
   USUARIO_CREA_INF     int(10) default NULL,
   FECHA_CREA_INF       timestamp default NULL,
   USUARIO_MOD_INF      int(10) default NULL,
   FECHA_MOD_INF        timestamp default NULL,
   primary key (CODIGO_INF)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: datos_inicial                                         */
/*==============================================================*/
create table datos_inicial
(
   CODIGO_INI           varchar(100) not null,
   NOMBRE_RESPONSABLE_INI text,
   APELLIDO_RESPONSABLE_INI text,
   CANTIDAD_TERRENOS_INI int(10) default NULL,
   ESTADO_INI           char(1) not null,
   USUARIO_CREA_INI     int(10) default NULL,
   FECHA_CREA_INI       timestamp default NULL,
   USUARIO_MOD_INI      int(10) default NULL,
   FECHA_MOD_INI        timestamp default NULL,
   "KEY"                CODIGO_INI (CODIGO_INI)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: datos_productor                                       */
/*==============================================================*/
create table datos_productor
(
   CODIGO_DAT_PROD      int(11) not null,
   CODIGO_PROD          int(10) unsigned default NULL,
   CODIGO_PAR           int(11) default NULL,
   CADENA               varchar(250) default NULL,
   NUM_DECIMAL          float default NULL,
   ENTERO               int(11) default NULL,
   FECHA_INICIO         datetime default NULL,
   FECHA_FIN            datetime default NULL,
   MINIMO               float default NULL,
   MAXIMO               float default NULL,
   primary key (CODIGO_DAT_PROD)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: destino_produccion                                    */
/*==============================================================*/
create table destino_produccion
(
   CODIGO_DEPRO         int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   TIPO_DEPRO           varchar(100) not null,
   TIPO_COMPRADOR_DEPRO varchar(50) default NULL,
   ESTADO_DEPRO         char(1) not null,
   USUARIO_CREA_DEPRO   int(10) default NULL,
   FECHA_CREA_DEPRO     timestamp default NULL,
   USUARIO_MOD_DEPRO    int(10) default NULL,
   FECHA_MOD_DEPRO      timestamp default NULL,
   primary key (CODIGO_DEPRO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_avicola_existencias_plantel                   */
/*==============================================================*/
create table especie_avicola_existencias_plantel
(
   CODIGO_EXPT          int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   TIPO_AVE_EXPT        text,
   NUM_AVES_EXPT        int(11) not null,
   FASE_AVES_EXPT       int(11) not null,
   GENETICA_AVES_EXPT   int(11) not null,
   ESTADO_PYT           char(1) not null,
   USUARIO_CREA_PYT     int(10) default NULL,
   FECHA_CREA_PYT       timestamp default NULL,
   USUARIO_MOD_PYT      int(10) default NULL,
   FECHA_MOD_PYT        timestamp default NULL,
   primary key (CODIGO_EXPT)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_avicola_galpones                              */
/*==============================================================*/
create table especie_avicola_galpones
(
   CODIGO_AVE           int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   EXISTENCIA_GALPON_AVE text,
   NUM_GALPONES_AVE     int(11) not null,
   CAPACIDAD_GALPON_AVE int(11) not null,
   ESTADO_AVE           char(1) not null,
   USUARIO_CREA_AVE     int(10) default NULL,
   FECHA_CREA_AVE       timestamp default NULL,
   USUARIO_MOD_AVE      int(10) default NULL,
   FECHA_MOD_AVE        timestamp default NULL,
   primary key (CODIGO_AVE)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_avicola_plantel                               */
/*==============================================================*/
create table especie_avicola_plantel
(
   CODIGO_PYT           int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   RAZON_NO_EXISTEN_AVES_PYT varchar(100) not null,
   CONTROL_ENFERMEDADES_PYT varchar(100) not null,
   ESTADO_PYT           char(1) not null,
   USUARIO_CREA_PYT     int(10) default NULL,
   FECHA_CREA_PYT       timestamp default NULL,
   USUARIO_MOD_PYT      int(10) default NULL,
   FECHA_MOD_PYT        timestamp default NULL,
   primary key (CODIGO_PYT)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_avicola_plantel_ciclos                        */
/*==============================================================*/
create table especie_avicola_plantel_ciclos
(
   CODIGO_CICLO         int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   TIPO_AVES_CICLO      text,
   NUMERO_CICLO         int(11) not null,
   ESTADO_CICLO         char(1) not null,
   USUARIO_CREA_CICLO   int(10) default NULL,
   FECHA_CREA_CICLO     timestamp default NULL,
   USUARIO_MOD_CICLO    int(10) default NULL,
   FECHA_MOD_CICLO      timestamp default NULL,
   primary key (CODIGO_CICLO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_avicola_plantel_encubadoras                   */
/*==============================================================*/
create table especie_avicola_plantel_encubadoras
(
   CODIGO_ENCU          int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   NOMBRE_EQUIPO_ENCU   text,
   NUMERO_EQUIPOS_ENCU  int(11) not null,
   CAPACIDAD_EQUIPO_ENCU int(11) not null,
   ESTADO_ENCU          char(1) not null,
   USUARIO_CREA_ENCU    int(10) default NULL,
   FECHA_CREA_ENCU      timestamp default NULL,
   USUARIO_MOD_ENCU     int(10) default NULL,
   FECHA_MOD_ENCU       timestamp default NULL,
   primary key (CODIGO_ENCU)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_avicola_traspatio                             */
/*==============================================================*/
create table especie_avicola_traspatio
(
   CODIGO_TRAS          int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   NUM_POLLOS_TRAS      int(10) default NULL,
   ESTADO_TRAS          char(1) not null,
   USUARIO_CREA_TRAS    int(10) default NULL,
   FECHA_CREA_TRAS      timestamp default NULL,
   USUARIO_MOD_TRAS     int(10) default NULL,
   FECHA_MOD_TRAS       timestamp default NULL,
   primary key (CODIGO_TRAS)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_bovino                                        */
/*==============================================================*/
create table especie_bovino
(
   CODIGO_BOVINO        int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   EXISTENCIA_BOVINO    text,
   CODIGO_BOV           int(11) not null,
   NUM_CABEZAS_BOVINO   int(11) not null,
   ESTADO_BOVINO        char(1) not null,
   USUARIO_CREA_BOVINO  int(10) default NULL,
   FECHA_CREA_BOVINO    timestamp default NULL,
   USUARIO_MOD_BOVINO   int(10) default NULL,
   FECHA_MOD_BOVINO     timestamp default NULL,
   primary key (CODIGO_BOVINO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_bovino_leche                                  */
/*==============================================================*/
create table especie_bovino_leche
(
   CODIGO_BOLE          int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   ORDENIO_AYER_BOLE    text,
   NUM_CABEZAS_ORDENIO_BOLE int(11) not null,
   LITROS_DIA_BOLE      float not null,
   ESTADO_BOLE          char(1) not null,
   USUARIO_CREA_BOLE    int(10) default NULL,
   FECHA_CREA_BOLE      timestamp default NULL,
   USUARIO_MOD_BOLE     int(10) default NULL,
   FECHA_MOD_BOLE       timestamp default NULL,
   primary key (CODIGO_BOLE)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_bovino_ventas                                 */
/*==============================================================*/
create table especie_bovino_ventas
(
   CODIGO_VEN           int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   VENDIO_CABEZAS_VEN   text,
   NUM_CABEZAS_VENDIDAS_VEN int(11) not null,
   FORMA_REPRODUCCION_VEN text,
   VACUNAS_APLICADAS_VEN text,
   DISPONE_MAQUINARIA_VEN text,
   DISPONE_SIST_SILVOPASTORIL text,
   VARIEDAD_PASTO       text,
   VARIEDAD_FORESTAL    text,
   ESTADO_VEN           char(1) not null,
   USUARIO_CREA_VEN     int(10) default NULL,
   FECHA_CREA_VEN       timestamp default NULL,
   USUARIO_MOD_VEN      int(10) default NULL,
   FECHA_MOD_VEN        timestamp default NULL,
   primary key (CODIGO_VEN)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_otros                                         */
/*==============================================================*/
create table especie_otros
(
   CODIGO_ESP           int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   NOMBRE_ESP           text,
   CANTIDAD_ESPECIE_ESP int(10) default NULL,
   TIPO_ESPECIE_ESP     varchar(50) default NULL comment 'SE GUARDARA EL TIPO DE ESPECIE ',
   ESTADO_ESP           char(1) not null,
   USUARIO_CREA_ESP     int(10) default NULL,
   FECHA_CREA_ESP       timestamp default NULL,
   USUARIO_MOD_ESP      int(10) default NULL,
   FECHA_MOD_ESP        timestamp default NULL,
   primary key (CODIGO_ESP)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_porcino                                       */
/*==============================================================*/
create table especie_porcino
(
   CODIGO_PORCINO       int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   EXISTE_GANADO_PORCINO text,
   CATEGORIA_GANADO_PORCINO text,
   NUM_CABEZAS_GANADO_PORCINO int(11) not null,
   ESTADO_PORCINO       char(1) not null,
   USUARIO_CREA_PORCINO int(10) default NULL,
   FECHA_CREA_PORCINO   timestamp default NULL,
   USUARIO_MOD_PORCINO  int(10) default NULL,
   FECHA_MOD_PORCINO    timestamp default NULL,
   primary key (CODIGO_PORCINO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_porcino_enfermedades                          */
/*==============================================================*/
create table especie_porcino_enfermedades
(
   CODIGO_PORENF        int(11) unsigned not null,
   CODIGO_INI           varchar(100) not null,
   VACUNADO_CONTRA_ENF_PORENF text not null,
   CODIGO_ENF           int(11) not null,
   ESTADO_REPRO         char(1) not null,
   USUARIO_CREA_REPRO   int(11) not null,
   FECHA_CREA_REPRO     datetime not null,
   USUARIO_MOD_REPRO    int(11) not null,
   FECHA_MOD_REPRO      datetime not null,
   primary key (CODIGO_PORENF)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_porcino_galpones                              */
/*==============================================================*/
create table especie_porcino_galpones
(
   CODIGO_PORGAL        int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   NUM_GALPONES_PORGAL  text,
   CAPACIDAD_GALPONES_PORGAL int(10) default NULL,
   ESTADO_PORGAL        char(1) not null,
   USUARIO_CREA_PORGAL  int(10) default NULL,
   FECHA_CREA_PORGAL    timestamp default NULL,
   USUARIO_MOD_PORGAL   int(10) default NULL,
   FECHA_MOD_PORGAL     timestamp default NULL,
   primary key (CODIGO_PORGAL)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: especie_porcino_reproduccion                          */
/*==============================================================*/
create table especie_porcino_reproduccion
(
   CODIGO_REPRO         int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   TIPO_REPRODUCCION_REPRO text,
   NUM_CERDOS_VENDIDOS_REPRO int(10) default NULL,
   NUM_CERDOS_NACIDOS_MADRE_REPRO int(10) default NULL,
   ESTADO_REPRO         char(1) not null,
   USUARIO_CREA_REPRO   int(10) default NULL,
   FECHA_CREA_REPRO     timestamp default NULL,
   USUARIO_MOD_REPRO    int(10) default NULL,
   FECHA_MOD_REPRO      timestamp default NULL,
   primary key (CODIGO_REPRO)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: figura_organizativa                                   */
/*==============================================================*/
create table figura_organizativa
(
   CODIGO_FIG_ORG       int(11) not null,
   FIGURA_ORGANIZATIVA  varchar(100) default NULL,
   primary key (CODIGO_FIG_ORG)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: formulario_verificar                                  */
/*==============================================================*/
create table formulario_verificar
(
   CODIGO_FOR           int(11) not null,
   CODIGO_PROD          int(11) not null,
   CODIGO_INI           varchar(100) not null,
   PARAM_1              tinyint(4) not null default 0,
   PARAM_2              tinyint(4) not null default 0,
   PARAM_3              tinyint(4) not null default 0,
   PARAM_4              tinyint(4) not null default 0,
   primary key (CODIGO_FOR)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: general                                               */
/*==============================================================*/
create table general
(
   CODIGO_GEN           int(11) not null,
   CODIGO_PROV          int(11) not null,
   CODIGO_BLOQUE        varchar(50) not null,
   CODIGO_AREA          varchar(50) not null,
   CODIGO_ENT_USS       varchar(50) not null,
   CARGA_TRABAJO        int(11) not null,
   PRIORIDAD            int(11) not null,
   SUPERFICIE           double not null,
   NUM_VIVIENDAS        int(11) not null,
   OBSERVACION          text not null,
   ESTADO_GEN           char(1) not null,
   primary key (CODIGO_GEN)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: genero                                                */
/*==============================================================*/
create table genero
(
   CODIGO_GEN           int(11) not null,
   GENERO               varchar(20) default NULL,
   primary key (CODIGO_GEN)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: gps_shape                                             */
/*==============================================================*/
create table gps_shape
(
   CODIGO_SHA           int(11) unsigned not null,
   CODIGO_ENT_USS       varchar(100) not null,
   COORD_X              varchar(100) not null,
   COORD_Y              varchar(100) not null,
   LATITUD_SHA          varchar(100) not null,
   LONGITUD_SHA         varchar(100) not null,
   ESTADO_SHA           varchar(1) not null,
   primary key (CODIGO_SHA)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: gps_shape_centroide                                   */
/*==============================================================*/
create table gps_shape_centroide
(
   codigo               int(11) not null,
   dpa_provin           text not null,
   dpa_despro           text not null,
   dpa_canton           text not null,
   dpa_descan           text not null,
   dpa_parroq           text not null,
   dpa_despar           text not null,
   dpa_zondis           text not null,
   dpa_secdis           text not null,
   dpa_anio             text not null,
   area_ha              text not null,
   coor_x               text not null,
   coor_y               text not null,
   "long"               double not null,
   lat                  double not null,
   estado               char(1) not null,
   primary key (codigo)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: gps_shape_chris                                       */
/*==============================================================*/
create table gps_shape_chris
(
   CODIGO_SHA           int(11) unsigned not null,
   COD_SECTOR_SHA       varchar(100) not null,
   COORD_X              varchar(100) not null,
   COORD_Y              varchar(100) not null,
   LATITUD_SHA          varchar(100) not null,
   LONGITUD_SHA         varchar(100) not null,
   ESTADO_SHA           varchar(1) not null,
   primary key (CODIGO_SHA)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: gps_terrenos                                          */
/*==============================================================*/
create table gps_terrenos
(
   CODIGO_TCR           int(11) unsigned not null,
   CODIGO_INI           varchar(100) not null,
   TIPO_CAPTURA_TCR     varchar(20) not null comment 'EN ESTE CAMPO SE GUARDARA EL TIPO DE CAPTURA AUTOMATICA O MANUAL',
   CODIGO_TER           int(11) not null,
   LATITUD_TCR          varchar(100) not null,
   LONGITUD_TCR         varchar(100) not null,
   CORDENADA_X_TCR      varchar(100) not null,
   CORDENADA_Y_TCR      varchar(100) not null,
   ESTADO_TCR           char(1) not null,
   USUARIO_CREA_TCR     int(11) not null,
   FECHA_CREA_TCR       datetime not null,
   USUARIO_MOD_TCR      int(11) not null,
   FECHA_MOD_TCR        datetime not null,
   primary key (CODIGO_TCR)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: gps_usuarios                                          */
/*==============================================================*/
create table gps_usuarios
(
   CODIGO_UCC           int(11) unsigned not null,
   CODIGO_USR           int(11) not null,
   LATITUD_UCC          float not null,
   LONGITUD_UCC         float not null,
   PRECISION_UCC        float not null,
   ESTADO_UCC           char(1) not null,
   USUARIO_CREA_UCC     int(11) not null,
   FECHA_CREA_UCC       datetime not null,
   USUARIO_MOD_UCC      int(11) not null,
   FECHA_MOD_UCC        datetime not null,
   primary key (CODIGO_UCC)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: grupo_preguntas_gfc                                   */
/*==============================================================*/
create table grupo_preguntas_gfc
(
   CODIGO_GRU_PRE       int(10) unsigned not null,
   GRUPO_PREGUNTAS      varchar(100) default NULL,
   ESTADO               int(1) default NULL,
   primary key (CODIGO_GRU_PRE)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: infraestructura                                       */
/*==============================================================*/
create table infraestructura
(
   CODIGO_INFRA         int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   TIPO_INFRA           text,
   DISPONE_INFRA        text,
   ITEM_INFRA           text,
   ESTADO_INFRA         char(1) not null,
   USUARIO_CREA_INFRA   int(10) default NULL,
   FECHA_CREA_INFRA     timestamp default NULL,
   USUARIO_MOD_INFRA    int(10) default NULL,
   FECHA_MOD_INFRA      timestamp default NULL,
   primary key (CODIGO_INFRA)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: infraestructura_riego                                 */
/*==============================================================*/
create table infraestructura_riego
(
   CODIGO_INFRAR        int(11) unsigned not null,
   CODIGO_INI           varchar(100) not null,
   DISPONE_INFRAR       varchar(100) not null,
   PRINCIPAL_FUENTE_AGUA_INFRAR varchar(100) not null,
   SISTEMA_RIEGO_INFRAR varchar(100) not null,
   METODO_RIEGO_INFRAR  varchar(100) not null,
   SUPERFICIE_CUBIERTA_RIEGO_INFRAR varchar(100) not null,
   ESTADO_INFRAR        char(1) not null,
   USUARIO_CREA_INFRAR  int(11) not null,
   FECHA_CREA_INFRAR    datetime not null,
   USUARIO_MOD_INFRAR   int(11) not null,
   FECHA_MOD_INFRAR     datetime not null,
   primary key (CODIGO_INFRAR)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: jornada                                               */
/*==============================================================*/
create table jornada
(
   CODIGO_JOR           int(11) not null,
   JORNADA              varchar(50) default NULL,
   primary key (CODIGO_JOR)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: listas_opciones                                       */
/*==============================================================*/
create table listas_opciones
(
   CODIGO_LIST          int(11) not null,
   CODIGO_LIST_PADRE    int(11) default NULL,
   LISTA                varchar(50) default NULL,
   ESTADO               int(1) default NULL,
   TIPO_LISTA           varchar(50) default NULL,
   ORDEN                int(11) default NULL,
   primary key (CODIGO_LIST)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: log_auditoria                                         */
/*==============================================================*/
create table log_auditoria
(
   CODIGO_AUD           int(10) unsigned not null,
   TIEMPO_AUD           timestamp default NULL,
   OPERACION_AUD        varchar(50) default NULL,
   TABLA_AUD            varchar(100) not null,
   SQL_AUD              text,
   IP_AUD               varchar(50) default NULL,
   CODIGO_USR           int(10) default NULL,
   primary key (CODIGO_AUD)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: log_procesos                                          */
/*==============================================================*/
create table log_procesos
(
   CODIGO_PX            int(11) unsigned not null,
   SESSION_PX           varchar(100) not null,
   USUARIO_PX           int(11) not null,
   CANAL_PX             varchar(50) not null,
   FECHA_INICIO_PX      datetime not null,
   FECHA_FIN_PX         datetime not null,
   ESTADO_PX            varchar(1) not null,
   primary key (CODIGO_PX)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: log_transaccion                                       */
/*==============================================================*/
create table log_transaccion
(
   CODIGO_MLT           int(10) unsigned not null,
   CODIGO_TABLET        int(11) not null,
   CODIGO_INI           text,
   CODIGO_MOVIL_MLT     text,
   TABLA_MLT            text,
   OPERACION_MLT        text,
   DATOS_MLT            text,
   FECHA_RECEPCION_MLT  date default NULL,
   HORA_RECEPCION_MLT   time default NULL,
   CODIGO_SERVIDOR      text,
   primary key (CODIGO_MLT)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: mano_obra                                             */
/*==============================================================*/
create table mano_obra
(
   CODIGO_BRA           int(11) unsigned not null,
   CODIGO_INI           varchar(100) not null,
   GENERO_BRA           varchar(100) not null,
   PROD_FAMILIAR_REMUNERADOS_BRA varchar(100) not null,
   PROD_FAMILIARES_NO_REMUNERADOS_BRA int(11) not null,
   NO_FAMILIARES_REMUNERADOS_BRA varchar(100) not null,
   NO_FAMILIARES_NO_REMUNERADOS_BRA int(11) not null,
   ESTADO_BRA           char(1) not null,
   USUARIO_CREA_BRA     int(11) not null,
   FECHA_CREA_BRA       datetime not null,
   USUARIO_MOD_BRA      int(11) not null,
   FECHA_MOD_BRA        datetime not null,
   primary key (CODIGO_BRA)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: mano_obra_ingresos                                    */
/*==============================================================*/
create table mano_obra_ingresos
(
   CODIGO_OBING         int(11) unsigned not null,
   CODIGO_INI           varchar(100) not null,
   ORIGEN_OBING         varchar(100) not null,
   ESTADO_OBING         char(1) not null,
   USUARIO_CREA_OBING   int(11) not null,
   FECHA_CREA_OBING     datetime not null,
   USUARIO_MOD_OBING    int(11) not null,
   FECHA_MOD_OBING      datetime not null,
   primary key (CODIGO_OBING)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: mano_obra_jornaleros                                  */
/*==============================================================*/
create table mano_obra_jornaleros
(
   CODIGO_JOR           int(11) unsigned not null,
   CODIGO_INI           varchar(100) not null,
   MANO_OBRA_TEMPORAL_JOR varchar(200) not null,
   MANO_OBRA_JORNALERO_MES_ANTERIOR_JOR varchar(200) not null,
   NUM_JORNA_EMPLEADOS_JOR int(11) not null,
   MINGAS_CULTIVOS_PERMAN_JOR varchar(200) not null,
   NUM_JORNALEROS_PERMANENTES_JOR int(11) not null,
   MINGAS_CULTIVOS_TRAN_JOR varchar(200) not null,
   NUM_JORNALEROS_TRAN_JOR int(11) not null,
   ESTADO_JOR           char(1) not null,
   USUARIO_CREA_JOR     int(11) not null,
   FECHA_CREA_JOR       datetime not null,
   USUARIO_MOD_JOR      int(11) not null,
   FECHA_MOD_JOR        datetime not null,
   primary key (CODIGO_JOR)
)
ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: maquinaria                                            */
/*==============================================================*/
create table maquinaria
(
   CODIGO_MAQ           int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   TIPO_MAQ             text,
   ITEM_MAQ             text,
   ESTADO_MAQ           char(1) not null,
   USUARIO_CREA_MAQ     int(10) default NULL,
   FECHA_CREA_MAQ       timestamp default NULL,
   USUARIO_MOD_MAQ      int(10) default NULL,
   FECHA_MOD_MAQ        timestamp default NULL,
   primary key (CODIGO_MAQ)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: medidas_sanitarias                                    */
/*==============================================================*/
create table medidas_sanitarias
(
   CODIGO_SANI          int(10) unsigned not null,
   CODIGO_INI           int(10) default NULL,
   MEDIDA_SANI          int(10) default NULL,
   REGISTRO_SANI        text,
   ESTADO_SANI          char(1) not null,
   USUARIO_CREA_SANI    int(10) default NULL,
   FECHA_CREA_SANI      timestamp default NULL,
   USUARIO_MOD_SANI     int(10) default NULL,
   FECHA_MOD_SANI       timestamp default NULL,
   primary key (CODIGO_SANI)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: menu                                                  */
/*==============================================================*/
create table menu
(
   CODIGO_MEN           int(11) unsigned not null,
   ORDEN_MEN            int(11) not null,
   CATEGORIA_MEN        varchar(100) not null,
   DESCRIPCION_MEN      varchar(100) not null,
   PADRE_MEN            varchar(100) not null,
   LINK_MEN             varchar(200) not null,
   ESTADO               char(1) not null,
   primary key (CODIGO_MEN)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: menu_perfil                                           */
/*==============================================================*/
create table menu_perfil
(
   CODIGO_MEP           int(11) unsigned not null,
   CODIGO_MEN           int(11) not null,
   CODIGO_PER           int(11) not null,
   ESTADO_MEP           varchar(1) not null,
   primary key (CODIGO_MEP)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: nacionalidad                                          */
/*==============================================================*/
create table nacionalidad
(
   CODIGO_NAC           int(11) not null,
   NACIONALIDAD         varchar(100) default NULL,
   INICIAL_NACIONALIDAD varchar(3) default NULL,
   primary key (CODIGO_NAC)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: organizacion_hecho                                    */
/*==============================================================*/
create table organizacion_hecho
(
   CODIGO_ORG_HEC       int(11) not null,
   CODIGO_PROD          int(11) default NULL,
   RAZON_SOCIAL         varchar(250) default NULL,
   NUMERO_SOCIOS        int(11) default NULL,
   NOMBRE_REPRESENTANTE varchar(120) default NULL,
   IDENTIFICACION_REPRESENTANTE varchar(10) default NULL,
   TELEFONO_CONTACTO    varchar(15) default NULL,
   CORREO               varchar(100) default NULL,
   primary key (CODIGO_ORG_HEC)
)
ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*==============================================================*/
/* Table: parametros                                            */
/*==============================================================*/
create table parametros
(
   CODIGO_PARA          int(10) not null,
   TIPO_DATO_PARA       varchar(200) default NULL,
   CAMPO_PARA           varchar(200) default NULL,
   VALOR_PARA           varchar(100) default NULL,
   FECHA_PARA           timestamp default NULL,
   ESTADO_PARA          varchar(2) default NULL,
   USUARIO_CREA_PARA    int(10) default NULL,
   FECHA_CREA_PARA      timestamp default NULL,
   USUARIO_MOD_PARA     int(10) default NULL,
   FECHA_MOD_PARA       timestamp default NULL,
   primary key (CODIGO_PARA)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: parametros_lista                                      */
/*==============================================================*/
create table parametros_lista
(
   CODIGO_PAR           int(11) not null,
   CODIGO_LIST          int(11) default NULL,
   PARAMETRO            varchar(250) default NULL,
   PARAMETRO_INT        int(11) default NULL,
   PARAMETRO_MIN        float default NULL,
   PARAMETRO_MAX        float default NULL,
   ESTADO               int(1) default NULL,
   ORDEN                int(11) default NULL,
   primary key (CODIGO_PAR)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: perfil                                                */
/*==============================================================*/
create table perfil
(
   CODIGO_PER           int(10) unsigned not null,
   NOMBRE_PER           varchar(50) default NULL,
   OBSERVACIONES_PER    text,
   ESTADO_PER           char(10) default NULL,
   primary key (CODIGO_PER)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: preguntas_gfc                                         */
/*==============================================================*/
create table preguntas_gfc
(
   CODIGO_PRE           int(10) unsigned not null,
   CODIGO_GRU_PRE       int(11) default NULL,
   PREGUNTA             varchar(250) default NULL,
   ESTADO               int(1) default NULL,
   primary key (CODIGO_PRE)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: procesos                                              */
/*==============================================================*/
create table procesos
(
   CODIGO_REG_AFC       int(11) not null,
   CODIGO_PROD          int(11) default NULL,
   PROCESO              varchar(50) default NULL,
   RESULTADO            varchar(50) default NULL,
   OBSERVACION          varchar(250) default NULL,
   ESTADO               int(11) default NULL,
   FECHA_INI_REGISTRO   datetime default NULL,
   USUARIO_INI_REGISTRO int(11) default NULL,
   FECHA_FIN_REGISTRO   datetime default NULL,
   USUARIO_FIN_REGISTRO int(11) default NULL,
   FECHA_INI_VERIFICACION datetime default NULL,
   USUARIO_INI_VERIFICACION int(11) default NULL,
   FECHA_FIN_VERIFICACION datetime default NULL,
   USUARIO_FIN_VERIFICACION int(11) default NULL,
   primary key (CODIGO_REG_AFC)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: produccion_forestal                                   */
/*==============================================================*/
create table produccion_forestal
(
   CODIGO_FORES         int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   ESPECIE_FORES        varchar(50) default NULL,
   EDAD_PRODUC_FORES_1_3 int(11) default NULL,
   EDAD_PRODUC_FORES_3_5 int(11) default NULL,
   EDAD_PRODUC_FORES_5_10 int(11) default NULL,
   EDAD_PRODUC_FORES_10_15 int(11) not null,
   EDAD_PRODUC_FORES_MAS_15 int(11) not null,
   NUM_ARBOLES_FORES    int(11) not null,
   SUPERFICIE_FORES     float default NULL,
   ESTADO_FORES         char(1) not null,
   USUARIO_CREA_FORES   int(10) default NULL,
   FECHA_CREA_FORES     timestamp default NULL,
   USUARIO_MOD_FORES    int(10) default NULL,
   FECHA_MOD_FORES      timestamp default NULL,
   primary key (CODIGO_FORES)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: productor                                             */
/*==============================================================*/
create table productor
(
   CODIGO_PROD          int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   TIPO_PERSONA_PROD    varchar(50) not null,
   CEDULA_PROD          varchar(13) default NULL,
   NOMBRES_COMPLETOS_PROD text,
   NOMBRES_PROD         text,
   APELLIDOS_PROD       text,
   NO_REG_CEDULA_PROD   text,
   LUGAR_DOMICILIO_PROD text,
   LUGAR_PROV_PROD      char(2) not null,
   LUGAR_CAN_PROD       char(2) not null,
   LUGAR_PARR_PROD      char(2) not null,
   DISPONE_FIJO_PROD    text,
   NUMERO_FIJO_PROD     varchar(10) default NULL,
   DISPONE_CEL_PROD     text,
   NUMERO_CEL_PROD      varchar(10) default NULL,
   DISPONE_MAIL_PROD    text,
   MAIL_PROD            varchar(100) default NULL,
   PERTENECE_ASO_PROD   text,
   ESTADO_PROD          char(1) not null,
   USUARIO_CREA_PROD    int(10) default NULL,
   FECHA_CREA_PROD      timestamp default NULL,
   USUARIO_MOD_PROD     int(10) default NULL,
   FECHA_MOD_PROD       timestamp default NULL,
   AUTOIDENTIFICACION   int(1) default NULL,
   CODIGO_PUE_IND       int(11) default 0,
   PERTENECE_AFC        int(1) default NULL,
   FECHA_NACIMIENTO     date default NULL,
   CODIGO_GEN           int(11) default NULL,
   CODIGO_NAC           int(11) default NULL,
   GFC_TOMA_DECISIONES  int(1) default NULL,
   JORNADA              float default 0,
   CODIGO_AUT_IDEN      int(11) default NULL,
   TERMINOS_CONDICIONES int(1) default 0,
   OBSERVACIONES        text,
   primary key (CODIGO_PROD)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: productor_organizacion                                */
/*==============================================================*/
create table productor_organizacion
(
   CODIGO_PROD          int(10) unsigned not null,
   CODIGO               int(10) unsigned not null,
   primary key (CODIGO, CODIGO_PROD)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: pueblo_indigena                                       */
/*==============================================================*/
create table pueblo_indigena
(
   CODIGO_PUE_IND       int(11) not null,
   PUEBLOINDIGENA       varchar(100) default NULL,
   primary key (CODIGO_PUE_IND)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: relacion                                              */
/*==============================================================*/
create table relacion
(
   CODIGO_REL           int(11) not null,
   RELACION             varchar(50) default NULL,
   primary key (CODIGO_REL)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: respuestas_preguntas_gfc                              */
/*==============================================================*/
create table respuestas_preguntas_gfc
(
   CODIGO_RES_PRE       int(10) unsigned not null,
   CODIGO_PRE           int(11) default NULL,
   CODIGO_PROD          int(10) unsigned default NULL,
   RESPUESTA_VAR        varchar(250) default NULL,
   RESPUESTA_INT        int(11) default NULL,
   RESPUESTA_MIN        float default NULL,
   RESPUESTA_MAX        float default NULL,
   RESPUESTA_FECHA_MIN  timestamp default NULL,
   RESPUESTA_FECHA_MAX  timestamp default NULL,
   RESPUESTA_BIT        int(1) default NULL,
   primary key (CODIGO_RES_PRE)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: terrenos                                              */
/*==============================================================*/
create table terrenos
(
   CODIGO_TER           int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   COD_REG_TER          varchar(10) default NULL,
   NOMBRE_TER           text,
   SUPERFICIE_TER       float default NULL,
   UNIDAD_TER           text,
   UBICACION_TER        varchar(100) not null,
   PROVINCIA_TER        int(10) default NULL,
   CANTON_TER           int(10) default NULL,
   PARROQUIA_TER        int(10) default NULL,
   SECTOR_TER           varchar(30) not null,
   TENENCIA_TER         text,
   ACCESO_PROPIEDAD_TER varchar(50) not null,
   SEDE_TER             text,
   UBICA_SECTOR_CENSAL_TER varchar(2) not null,
   ACT_AGRICOLA_TER     varchar(2) default NULL,
   ACT_VACUNO_TER       varchar(2) not null,
   ACT_PORCICOLA_TER    varchar(2) not null,
   ACT_AVICOLA_TER      varchar(2) not null,
   ACT_PISCICOLA_TER    varchar(2) not null,
   OTROS_ANIMALES_TER   varchar(2) not null,
   ACT_FORESTAL_TER     varchar(2) default NULL,
   ACT_NINGUNA_TER      varchar(2) default NULL,
   MEDIDA_CONVERSION_TER varchar(100) not null,
   ESTADO_TER           varchar(1) not null,
   USUARIO_CREA_TER     int(10) default NULL,
   FECHA_CREA_TER       timestamp default NULL,
   USUARIO_MOD_TER      int(10) default NULL,
   FECHA_MOD_TER        timestamp default NULL,
   CODIGO_TIPO_TER      int(11) default NULL,
   CALLE_PRINCIPAL      varchar(100) default NULL,
   CALLE_SECUNDARIA     varchar(100) default NULL,
   NUMERO_PREDIAL       varchar(50) default NULL,
   REFERENCIA           varchar(250) default NULL,
   UNIDAD_DISTANCIA     varchar(10) default NULL,
   TIPO_TERRENO         varchar(50) default NULL,
   NUMERO_LOTE          varchar(50) default NULL,
   LOCALIDAD            varchar(250) default NULL,
   DISTANCIA_VIVIENDA   float default NULL,
   primary key (CODIGO_TER)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: tmp_catalogo_cultivo                                  */
/*==============================================================*/
create table tmp_catalogo_cultivo
(
   cul_id               int(11) not null,
   cul_nombre           varchar(256) not null,
   cul_estado           int(11) not null,
   cul_eliminado        tinyint(4) not null default 0,
   primary key (cul_id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: uso_suelo                                             */
/*==============================================================*/
create table uso_suelo
(
   CODIGO_SUE           int(10) unsigned not null,
   CODIGO_INI           varchar(100) default NULL,
   TIPO_SUE             text,
   SUPERFICIE_SUE       float default NULL,
   ESTADO_SUE           char(1) not null,
   USUARIO_CREA_SUE     int(10) default NULL,
   FECHA_CREA_SUE       timestamp default NULL,
   USUARIO_MOD_SUE      int(10) default NULL,
   FECHA_MOD_SUE        timestamp default NULL,
   primary key (CODIGO_SUE)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: usuarios                                              */
/*==============================================================*/
create table usuarios
(
   CODIGO_USR           int(10) unsigned not null,
   CI_USR               varchar(13) default NULL,
   NOMBRE_USR           varchar(200) default NULL,
   APELLIDO_USR         varchar(200) default NULL,
   LOGIN_USR            varchar(100) default NULL,
   PASSWORD_USR         varchar(100) default NULL,
   DIRECCION_USR        varchar(200) default NULL,
   MAIL_USR             varchar(250) default NULL,
   TELEFONO_USR         varchar(250) default NULL,
   CELULAR_USR          varchar(250) default NULL,
   ESTADO_USR           char(1) default NULL,
   CODIGO_PER           int(10) default NULL,
   primary key (CODIGO_USR)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: usuarios_bloque                                       */
/*==============================================================*/
create table usuarios_bloque
(
   CODIGO_USB           int(11) unsigned not null,
   CODIGO_PROV          int(11) not null,
   CODIGO_BLOQUE        varchar(50) not null,
   CODIGO_USR           int(11) not null,
   ESTADO_USB           varchar(2) not null,
   primary key (CODIGO_USB)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: usuarios_provincial                                   */
/*==============================================================*/
create table usuarios_provincial
(
   CODIGO_USP           int(11) unsigned not null,
   CODIGO_PROV          int(11) not null,
   CODIGO_USR           int(11) not null,
   ESTADO_USP           varchar(2) not null,
   primary key (CODIGO_USP)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*==============================================================*/
/* Table: usuarios_sector                                       */
/*==============================================================*/
create table usuarios_sector
(
   CODIGO_USS           int(11) unsigned not null,
   CODIGO_USR           int(11) not null,
   CODIGO_ENT_USS       varchar(50) not null,
   FASE_ENCUESTADOR     varchar(100) not null,
   FASE_OBS_ENCUESTADOR text not null,
   FASE_COORD_BRIGADA   varchar(100) not null,
   FASE_OBS_COORD_BRIGADA text not null,
   ESTADO_USS           varchar(1) not null,
   USUARIO_CREA_USS     int(11) not null,
   FECHA_CREA_USS       datetime not null,
   USUARIO_MOD_USS      int(11) not null,
   FECHA_MOD_USS        datetime not null,
   primary key (CODIGO_USS)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

alter table afc_agricola add constraint FK_DAT_INI_AFC_AGRICOLA foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_agricola_m2 add constraint FK_DAT_INI_AFC_AGRICOLA_M2 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_amenazasm12 add constraint FK_DAT_INI_AFC_AMENAZASM12 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_apicultura add constraint FK_DAT_INI_AFC_APICULTURA foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_apicultura_m7 add constraint FK_DAT_INI_AFC_APICULTURA_M7 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_apicultura_mod7 add constraint FK_DAT_INI_AFC_APICULTURA_MOD7 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_credito_asistenciatec_m9 add constraint FK_DAT_INI_AFC_CRE_ASIS_TEC_M9 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_equipamientom11 add constraint FK_DAT_INI_AFC_EQUIPA_M11 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_gfc_mod1 add constraint FK_DAT_INI_AFC_GFC_MOD1 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_gfc_mod1 add constraint FK_PROD_AFC_GFC_MOD1 foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table afc_gfc_mod1_2 add constraint FK_DAT_INI_AFC_GFC_MOD1_2 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_gfc_mod1_2 add constraint FK_PROD_AFC_MOD1_2 foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table afc_infraestructura_m10 add constraint FK_DAT_INI_AFC_INFRA_M10 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_ingresos_m13 add constraint FK_DAT_INI_AFC_INGRESOS_M13 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_pecuario add constraint FK_DAT_INI_AFC_PERCUARIO foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_pecuario_m3 add constraint FK_DAT_INI_AFC_PECUARIO_M3 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_producto_elaborado add constraint FK_DAT_INI_AFC_PROD_ELABORADO foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_producto_elaborado_m5 add constraint FK_DAT_INI_AFC_PROD_ELEBORA_M5 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_recoleccion add constraint FK_DAT_INI_AFC_RECOLEC foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_recoleccion_m6 add constraint FK_DAT_INI_AFC_RECOLEC_M6 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_tipo_produccion_mod4 add constraint FK_DAT_INI_AFC_TIPO_PROD_MOD4 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_trabajo_fam_con_mod8 add constraint FK_DAT_INI_AFC_TRAB_FAM_CON_MOD8 foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table afc_trabajo_fam_con_mod8 add constraint FK_PROD_AFC_TRA_FAM_CON_MOD8 foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table asistencia_tecnica add constraint FK_DAT_INI_ASIST_TECNICA foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table base_reg_civil add constraint FK_PROD_BASE_REG_CIV foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table credito add constraint FK_DAT_INI_CREDITO foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table cultivos add constraint FK_DAT_INI_CULTIVOS foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table datos_informante add constraint FK_DAT_INI_DAT_INFORMANTE foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table datos_productor add constraint FK_PROD_DATOS_PROD foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table destino_produccion add constraint FK_DAT_INI_DEST_PRODUCCION foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_avicola_existencias_plantel add constraint FK_DAT_INI_ESP_AVI_EXIST_PLANTEL foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_avicola_galpones add constraint FK_DAT_INI_ESP_AVI_GALPON foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_avicola_plantel add constraint FK_DAT_INI_ESP_AVI_PLAN foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_avicola_plantel_ciclos add constraint FK_DAT_ESP_AVI_PLA_CIC foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_avicola_plantel_encubadoras add constraint FK_DAT_INI_ESP_AVI_PLA_ENC foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_avicola_traspatio add constraint FK_DAT_INI_ESP_AVI_TRASPATIO foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_bovino add constraint FK_DAT_INI_ESP_BOVINO foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_bovino_leche add constraint FK_DAT_INI_ESP_BOV_LECHE foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_bovino_ventas add constraint FK_DAT_INI_ESP_BOV_VENTAS foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_otros add constraint FK_DAT_INI_ESP_OTROS foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_porcino add constraint FK_DAT_INI_ESP_PORCINO foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_porcino_enfermedades add constraint FK_DAT_INI_ESP_POR_ENF foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_porcino_galpones add constraint FK_DAT_INI_ESP_POR_GAL foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table especie_porcino_reproduccion add constraint FK_DAT_INI_ESP_POR_REP foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table formulario_verificar add constraint FK_DAT_INI_FOR_VERIFICAR foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table formulario_verificar add constraint FK_PROD_FOR_VERIFICAR foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table gps_terrenos add constraint FK_DAT_INI_GPS_TERRENOS foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table gps_usuarios add constraint FK_USUARIO_GPS_USUARIO foreign key (CODIGO_USR)
      references usuarios (CODIGO_USR) on delete restrict on update restrict;

alter table infraestructura add constraint FK_DAT_INI_INFRAESTRUCTURA foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table infraestructura_riego add constraint FK_DAT_INI_INFRAESTRUCTURA_RIEGO foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table log_auditoria add constraint FK_USUARIO_LOG_AUDITORIA foreign key (CODIGO_USR)
      references usuarios (CODIGO_USR) on delete restrict on update restrict;

alter table log_transaccion add constraint FK_DAT_INI_LOG_TRAN foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table mano_obra add constraint FK_DAT_INI_MAN_OBR foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table mano_obra_ingresos add constraint FK_DAT_INI_MAN_OBR_INGRESO foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table mano_obra_jornaleros add constraint FK_DAT_INI_MAN_OBR_JORNAL foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table maquinaria add constraint FK_DAT_INI_MAQUINARIA foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table medidas_sanitarias add constraint FK_DAT_INI_MED_SANITARIA foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table organizacion_hecho add constraint FK_PROD_ORG_HECHO foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table parametros_lista add constraint FK_CODIGO_PAR_LIST foreign key (CODIGO_LIST)
      references listas_opciones (CODIGO_LIST);

alter table procesos add constraint FK_PROD_PROCESO foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table produccion_forestal add constraint FK_DAT_INI_PROD_FORESTAL foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table productor add constraint FK_DAT_INI_PRODUCTOR foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table productor_organizacion add constraint FK_PROD_PROD_ORGANIZA foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table respuestas_preguntas_gfc add constraint FK_PROD_RES_PRE_GFC foreign key (CODIGO_PROD)
      references productor (CODIGO_PROD) on delete restrict on update restrict;

alter table terrenos add constraint FK_DAT_INI_TERRENOS foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table uso_suelo add constraint FK_DAT_INI_USO_SUELO foreign key (CODIGO_INI)
      references datos_inicial (CODIGO_INI) on delete restrict on update restrict;

alter table usuarios_bloque add constraint FK_USUARIO_USR_BLOQUE foreign key (CODIGO_USR)
      references usuarios (CODIGO_USR) on delete restrict on update restrict;

alter table usuarios_provincial add constraint FK_USUARIO_USR_PROVINCIAL foreign key (CODIGO_USR)
      references usuarios (CODIGO_USR) on delete restrict on update restrict;

alter table usuarios_sector add constraint FK_USUARIO_USR_SECTOR foreign key (CODIGO_USR)
      references usuarios (CODIGO_USR) on delete restrict on update restrict;

