/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     16/10/2018 14:14:40                          */
/*==============================================================*/

/*
drop table public.dpa;
drop table public.cialco_deth;
drop table public.cialco_detv;
drop table public.cialco;
drop table public.organizacion_deth;
drop table public.organizacion_detv;
drop table public.organizacion;
drop table public.establecimiento_deth;
drop table public.establecimiento_detv;
drop table public.establecimiento;
drop table public.formulario_deth;
drop table public.formulario_detv;
drop table public.formulario;
drop table public.usuario;
*/

/*==============================================================*/
/* Table: dpa                                                   */
/*==============================================================*/
create table public.dpa (
   id_dpa               VARCHAR (6)          not null,
   nivel                INT2                 not null,
   texto                VARCHAR (100)        null,
   cod_dpa              VARCHAR (6)          null,
   constraint PK_DPA primary key (id_dpa)
);

comment on table dpa is
'Permite almacenar los datos de las ubicaciones geográficas del país.';

comment on column dpa.id_dpa is
'Identificador de ubicación geográfica. Ancestro que permite identificación recursiva.';

comment on column dpa.nivel is
'Nivel de ubicación geográfica: nivel 1 - Provincia, Nivel 2 - Cantón, Nivel 3 Parroquia';

comment on column dpa.texto is
'Descripción de la ubicación geográfica';

comment on column dpa.cod_dpa is
'Código descendiente de la ubicación geográfica';

/*==============================================================*/
/* Index: ID_DPA_UI_IDX                                         */
/*==============================================================*/
create unique index ID_DPA_UI_IDX on dpa (
id_dpa
);



/*==============================================================*/
/* Table: cialco                                                */
/*==============================================================*/
create table public.cialco (
   id_cialco            SERIAL               not null,
   cod_usuario          INT8                 null,
   tipo                 VARCHAR (1)          null,
   numero               VARCHAR (50)         null,
   fecha                DATE                 null,
   referencia           VARCHAR (200)        null,
   estado_p             VARCHAR (1)          null,
   estado_t             VARCHAR (1)          null,
   clave                VARCHAR(30)          null,
   long_usuario         INT8                 null,
   long_identificador   INT8                 null,
   constraint PK_CIALCO primary key (id_cialco)
);

comment on table cialco is
'Contiene información de Circuitos Alternativos de Comercialización (CIALCO) que apoyan a productores del Sello de AFC y otros.';

comment on column cialco.id_cialco is
'Identificador de CIALCO. Se autoincrementa cuando se crea un nuevo CIALCO.';

comment on column cialco.cod_usuario is
'Identificador de usuario. Secuencial numérico autogenerado.';

comment on column cialco.tipo is
'Tipo de formulario: Ingreso (1) o Validación (2).';

comment on column cialco.numero is
'Contiene el valor que identifica a la variable.';

comment on column cialco.fecha is
'Fecha en que se produjo la inserción o la actualización.';

comment on column cialco.referencia is
'Valor que almacena la variable.';

comment on column cialco.estado_p is
'Estado de la variable pasiva.';

comment on column cialco.estado_t is
'Estado de la variable de tiempo.';

comment on column cialco.clave is
'Identificador de usuario combinado con fecha de registro.';

/*==============================================================*/
/* Index: ID_CIALCO_UI_IDX                                      */
/*==============================================================*/
create unique index ID_CIALCO_UI_IDX on cialco (
id_cialco
);

/*==============================================================*/
/* Table: cialco_deth                                           */
/*==============================================================*/
create table public.cialco_deth (
   id_cdeth             SERIAL               not null,
   cod_cial             INT8                 null,
   cod_var              VARCHAR (20)         null,
   orden                INT2                 null,
   val01                TEXT                 null,
   val02                TEXT                 null,
   val03                TEXT                 null,
   val04                TEXT                 null,
   val05                TEXT                 null,
   val06                TEXT                 null,
   val07                TEXT                 null,
   val08                TEXT                 null,
   val09                TEXT                 null,
   val10                TEXT                 null,
   val11                TEXT                 null,
   val12                TEXT                 null,
   val13                TEXT                 null,
   val14                TEXT                 null,
   val15                TEXT                 null,
   val16                TEXT                 null,
   val17                TEXT                 null,
   val18                TEXT                 null,
   val19                TEXT                 null,
   clave                VARCHAR(30)          null,
   constraint PK_CIALCO_DETH primary key (id_cdeth)
);

comment on table cialco_deth is
'CIALCO en formato de detalle horizontal.';

comment on column cialco_deth.id_cdeth is
'Identificador de CIALCO en formato horizontal. Se autoincrementa cuando se crea un nuevo detalle de CIALCO.';

comment on column cialco_deth.cod_cial is
'Identificador de detalle de cialco, se hereda del cialco.';

comment on column cialco_deth.cod_var is
'Identificador de la variable o módulo.';

comment on column cialco_deth.orden is
'Secuencial que permite ordenar las variables.';

comment on column cialco_deth.val01 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val02 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val03 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val04 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val05 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val06 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val07 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val08 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val09 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val10 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val11 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val12 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val13 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val14 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val15 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val16 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val17 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val18 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.val19 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_deth.clave is
'Identificador de usuario combinado con fecha de registro.';

/*==============================================================*/
/* Index: ID_CDETH_UI_IDX                                       */
/*==============================================================*/
create unique index ID_CDETH_UI_IDX on cialco_deth (
id_cdeth
);

/*==============================================================*/
/* Table: cialco_detv                                           */
/*==============================================================*/
create table public.cialco_detv (
   id_cdetv             SERIAL               not null,
   cod_cial             INT8                 null,
   cod_mod              VARCHAR (10)         null,
   orden                INT2                 null,
   cod_preg             VARCHAR (20)         null,
   valor                TEXT                 null,
   clave                VARCHAR(30)          null,
   constraint PK_CIALCO_DETV primary key (id_cdetv)
);

comment on table cialco_detv is
'CIALCO en formato de detalle vertical.';

comment on column cialco_detv.id_cdetv is
'Identificador de detalle de cialco en formato vertical. Se autoincrementa cuando se crea un nuevo detalle.';

comment on column cialco_detv.cod_cial is
'Identificador de CIALCO. Se autoincrementa cuando se crea un nuevo CIALCO.';

comment on column cialco_detv.cod_mod is
'Identificador de la variable o módulo.';

comment on column cialco_detv.orden is
'Secuencial que permite ordenar las variables.';

comment on column cialco_detv.cod_preg is
'Identificador de pregunta en la organización.';

comment on column cialco_detv.valor is
'Valor que se asigna a la variable capturada en la organización.';

comment on column cialco_detv.clave is
'Identificador de usuario combinado con fecha de registro.';

/*==============================================================*/
/* Index: ID_CDETV_UI_IDX                                       */
/*==============================================================*/
create unique index ID_CDETV_UI_IDX on cialco_detv (
id_cdetv
);


/*==============================================================*/
/* Table: establecimiento                                       */
/*==============================================================*/
create table public.establecimiento (
   id_establecimiento   SERIAL not null,
   cod_usuario          INT8                 null,
   tipo                 VARCHAR (1)          null,
   numero               VARCHAR (50)         null,
   fecha                DATE                 null,
   referencia           VARCHAR (200)        null,
   estado_p             VARCHAR (1)          null,
   estado_t             VARCHAR (1)          null,
   clave                VARCHAR(30)          null,
   long_usuario         INT8                 null,
   long_identificador   INT8                 null,
   constraint PK_ESTABLECIMIENTO primary key (id_establecimiento)
);

comment on table establecimiento is
'Contiene información de establecimientos que apoyan a productores del Sello de AFC.';

comment on column establecimiento.id_establecimiento is
'Identificador de establecimiento. Se autoincrementa cuando se crea un nuevo establecimiento.';

comment on column establecimiento.cod_usuario is
'Identificador de usuario. Secuencial numérico autogenerado que se hereda de la tabla de usuario.';

comment on column establecimiento.tipo is
'Tipo de formulario: Ingreso (1) o Validación (2).';

comment on column establecimiento.numero is
'Contiene el valor que identifica a la variable.';

comment on column establecimiento.fecha is
'Fecha en que se produjo la inserción o la actualización.';

comment on column establecimiento.referencia is
'Valor que almacena la variable.';

comment on column establecimiento.estado_p is
'Estado de la variable pasiva.';

comment on column establecimiento.estado_t is
'Estado de la variable de tiempo.';

comment on column establecimiento.clave is
'Identificador de usuario combinado con fecha de registro.';

comment on column establecimiento.long_usuario is
'Contiene el tamano de los caracteres que ocupa el campo usuario.';

comment on column establecimiento.long_identificador is
'Contiene el tamano de los caracteres que ocupa el campo identificador de formulario.';

/*==============================================================*/
/* Index: ID_ESTABLECIMIENTO_UI_IDX                             */
/*==============================================================*/
create unique index ID_ESTABLECIMIENTO_UI_IDX on establecimiento (
id_establecimiento
);

/*==============================================================*/
/* Table: establecimiento_deth                                  */
/*==============================================================*/
create table public.establecimiento_deth (
   id_edeth             SERIAL not null,
   cod_esta             INT8                 null,
   cod_var              VARCHAR (20)         null,
   orden                INT2                 null,
   val01                TEXT                 null,
   val02                TEXT                 null,
   val03                TEXT                 null,
   val04                TEXT                 null,
   val05                TEXT                 null,
   val06                TEXT                 null,
   val07                TEXT                 null,
   val08                TEXT                 null,
   val09                TEXT                 null,
   val10                TEXT                 null,
   val11                TEXT                 null,
   val12                TEXT                 null,
   val13                TEXT                 null,
   val14                TEXT                 null,
   val15                TEXT                 null,
   val16                TEXT                 null,
   clave                VARCHAR(30)          null,
   constraint PK_ESTABLECIMIENTO_DETH primary key (id_edeth)
);

comment on table establecimiento_deth is
'Establecimiento en formato de detalle horizontal.';

comment on column establecimiento_deth.id_edeth is
'Identificador de organización. Se autoincrementa cuando se crea una nueva organización.';

comment on column establecimiento_deth.cod_esta is
'Identificador de detalle de establecimiento, se hereda del establecimiento.';

comment on column establecimiento_deth.cod_var is
'Identificador de la variable o módulo.';

comment on column establecimiento_deth.orden is
'Secuencial que permite ordenar las variables.';

comment on column establecimiento_deth.val01 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val02 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val03 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val04 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val05 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val06 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val07 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val08 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val09 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val10 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val11 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val12 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val13 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val14 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.val15 is
'Valor que se asigna a la variable capturada en el Establecimiento.';

comment on column establecimiento_deth.clave is
'Identificador de usuario combinado con fecha de registro.';

/*==============================================================*/
/* Index: ID_EDETH_UI_IDX                                       */
/*==============================================================*/
create unique index ID_EDETH_UI_IDX on establecimiento_deth (
id_edeth
);

/*==============================================================*/
/* Table: establecimiento_detv                                  */
/*==============================================================*/
create table public.establecimiento_detv (
   id_edetv             SERIAL not null,
   cod_esta             INT8                 null,
   cod_mod              VARCHAR (10)         null,
   orden                INT2                 null,
   cod_preg             VARCHAR (20)         null,
   valor                TEXT                 null,
   clave                VARCHAR(30)          null,
   constraint PK_ESTABLECIMIENTO_DETV primary key (id_edetv)
);

comment on table establecimiento_detv is
'Establecimiento en formato de detalle vertical.';

comment on column establecimiento_detv.id_edetv is
'Identificador de detalle de establecimiento en formato vertical. Se autoincrementa cuando se crea un nuevo detalle.';

comment on column establecimiento_detv.cod_esta is
'Identificador de detalle de establecimiento, se hereda del establecimiento.';

comment on column establecimiento_detv.cod_mod is
'Identificador de la variable o módulo.';

comment on column establecimiento_detv.orden is
'Secuencial que permite ordenar las variables.';

comment on column establecimiento_detv.cod_preg is
'Identificador de pregunta en el establecimiento.';

comment on column establecimiento_detv.valor is
'Valor que se asigna a la variable capturada en el establecimiento.';

comment on column establecimiento_detv.clave is
'Identificador de usuario combinado con fecha de registro.';

/*==============================================================*/
/* Index: ID_EDETV_UI_IDX                                       */
/*==============================================================*/
create unique index ID_EDETV_UI_IDX on establecimiento_detv (
id_edetv
);

/*==============================================================*/
/* Table: formulario                                            */
/*==============================================================*/
create table public.formulario (
   id_formulario        SERIAL               not null,
   cod_usuario          INT8                 null,
   tipo                 VARCHAR (1)          null,
   numero               VARCHAR (50)         null,
   fecha                DATE                 null,
   referencia           VARCHAR (200)        null,
   estado_p             VARCHAR (1)          null,
   estado_t             VARCHAR (1)          null,
   clave                VARCHAR(30)          null,
   long_usuario         INT8                 null,
   long_identificador   INT8                 null,
   constraint PK_FORMULARIO primary key (id_formulario)
);

comment on table formulario is
'Contiene información de formularios para registro de productores en el Sello de AFC.';

comment on column formulario.id_formulario is
'Identificador de formulario. Se autoincrementa cuando se crea un nuevo formulario.';

comment on column formulario.cod_usuario is
'Identificador de usuario. Secuencial numérico autogenerado que se hereda de la tabla de usuario.';

comment on column formulario.tipo is
'Tipo de formulario: Ingreso (1) o Validación (2).';

comment on column formulario.numero is
'Contiene el valor que identifica a la variable.';

comment on column formulario.fecha is
'Fecha en que se produjo la inserción o la actualización.';

comment on column formulario.referencia is
'Valor que almacena la variable.';

comment on column formulario.estado_p is
'Estado de la variable pasiva.';

comment on column formulario.estado_t is
'Estado de la variable de tiempo.';

comment on column formulario.clave is
'Identificador de usuario combinado con fecha de registro.';

comment on column formulario.long_usuario is
'Contiene el tamano de los caracteres que ocupa el campo usuario.';

comment on column formulario.long_identificador is
'Contiene el tamano de los caracteres que ocupa el campo identificador de formulario.';

/*==============================================================*/
/* Index: ID_FORMULARIO_UI_IDX                                  */
/*==============================================================*/
create unique index ID_FORMULARIO_UI_IDX on formulario (
id_formulario
);

/*==============================================================*/
/* Table: formulario_deth                                       */
/*==============================================================*/
create table public.formulario_deth (
   id_fdeth             SERIAL               not null,
   cod_form             INT8                 null,
   cod_var              VARCHAR (20)         null,
   orden                INT2                 null,
   val01                TEXT                 null,
   val02                TEXT                 null,
   val03                TEXT                 null,
   val04                TEXT                 null,
   val05                TEXT                 null,
   val06                TEXT                 null,
   val07                TEXT                 null,
   val08                TEXT                 null,
   val09                TEXT                 null,
   val10                TEXT                 null,
   val11                TEXT                 null,
   val12                TEXT                 null,
   val13                TEXT                 null,
   val14                TEXT                 null,
   val15                TEXT                 null,
   val16                TEXT                 null,
   clave                VARCHAR(30)          null,
   constraint PK_FORMULARIO_DETH primary key (id_fdeth)
);

comment on table formulario_deth is
'Formulario en formato de detalle horizontal.';

comment on column formulario_deth.id_fdeth is
'Identificador de formulario. Se autoincrementa cuando se crea un nuevo formulario.';

comment on column formulario_deth.cod_form is
'Identificador de detalle de formulario, se hereda del formulario.';

comment on column formulario_deth.cod_var is
'Identificador de la variable o módulo.';

comment on column formulario_deth.orden is
'Secuencial que permite ordenar las variables.';

comment on column formulario_deth.val01 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val02 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val03 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val04 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val05 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val06 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val07 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val08 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val09 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val10 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val11 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val12 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val13 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val14 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val15 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.val16 is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_deth.clave is
'Identificador de usuario combinado con fecha de registro.';

/*==============================================================*/
/* Index: ID_FDETH_UI_IDX                                       */
/*==============================================================*/
create unique index ID_FDETH_UI_IDX on formulario_deth (
id_fdeth
);

/*==============================================================*/
/* Table: formulario_detv                                       */
/*==============================================================*/
create table public.formulario_detv (
   id_fdetv             SERIAL               not null,
   cod_form             INT8                 null,
   cod_mod              VARCHAR (10)         null,
   orden                INT2                 null,
   cod_preg             VARCHAR (20)         null,
   valor                TEXT                 null,
   clave                VARCHAR(30)          null,
   constraint PK_FORMULARIO_DETV primary key (id_fdetv)
);

comment on table formulario_detv is
'Formulario en formato de detalle vertical.';

comment on column formulario_detv.id_fdetv is
'Identificador de detalle de formulario en formato vertical. Se autoincrementa cuando se crea un nuevo detalle.';

comment on column formulario_detv.cod_form is
'Identificador de detalle de formulario, se hereda del formulario.';

comment on column formulario_detv.cod_mod is
'Identificador de la variable o módulo.';

comment on column formulario_detv.orden is
'Secuencial que permite ordenar las variables.';

comment on column formulario_detv.cod_preg is
'Identificador de pregunta en el formulario.';

comment on column formulario_detv.valor is
'Valor que se asigna a la variable capturada en el formulario.';

comment on column formulario_detv.clave is
'Identificador de usuario combinado con fecha de registro.';

/*==============================================================*/
/* Index: ID_FDETV_UI_IDX                                       */
/*==============================================================*/
create unique index ID_FDETV_UI_IDX on formulario_detv (
id_fdetv
);

/*==============================================================*/
/* Table: organizacion                                          */
/*==============================================================*/
create table public.organizacion (
   id_organizacion      SERIAL               not null,
   cod_usuario          INT8                 null,
   tipo                 VARCHAR (1)          null,
   numero               VARCHAR (50)         null,
   fecha                DATE                 null,
   referencia           VARCHAR (200)        null,
   estado_p             VARCHAR (1)          null,
   estado_t             VARCHAR (1)          null,
   clave                VARCHAR(30)          null,
   long_usuario         INT8                 null,
   long_identificador   INT8                 null,
   constraint PK_ORGANIZACION primary key (id_organizacion)
);

comment on table organizacion is
'Contiene información de organizaciones que apoyan a productores del Sello de AFC.';

comment on column organizacion.id_organizacion is
'Identificador de organización. Se autoincrementa cuando se crea una nueva organización.';

comment on column organizacion.cod_usuario is
'Identificador de usuario. Secuencial numérico autogenerado que se hereda de la tabla de usuario.';

comment on column organizacion.tipo is
'Tipo de formulario: Ingreso (1) o Validación (2).';

comment on column organizacion.numero is
'Contiene el valor que identifica a la variable.';

comment on column organizacion.fecha is
'Fecha en que se produjo la inserción o la actualización.';

comment on column organizacion.referencia is
'Valor que almacena la variable.';

comment on column organizacion.estado_p is
'Estado de la variable pasiva.';

comment on column organizacion.estado_t is
'Estado de la variable de tiempo.';

comment on column organizacion.clave is
'Identificador de usuario combinado con fecha de registro.';

comment on column organizacion.long_usuario is
'Contiene el tamano de los caracteres que ocupa el campo usuario.';

comment on column organizacion.long_identificador is
'Contiene el tamano de los caracteres que ocupa el campo identificador de formulario.';

/*==============================================================*/
/* Index: ID_ORGANIZACION_UI_IDX                                */
/*==============================================================*/
create unique index ID_ORGANIZACION_UI_IDX on organizacion (
id_organizacion
);

/*==============================================================*/
/* Table: organizacion_deth                                     */
/*==============================================================*/
create table public.organizacion_deth (
   id_odeth             SERIAL               not null,
   cod_orga             INT8                 null,
   cod_var              VARCHAR (20)         null,
   orden                INT2                 null,
   val01                TEXT                 null,
   val02                TEXT                 null,
   val03                TEXT                 null,
   val04                TEXT                 null,
   val05                TEXT                 null,
   val06                TEXT                 null,
   val07                TEXT                 null,
   val08                TEXT                 null,
   val09                TEXT                 null,
   val10                TEXT                 null,
   val11                TEXT                 null,
   val12                TEXT                 null,
   val13                TEXT                 null,
   val14                TEXT                 null,
   val15                TEXT                 null,
   val16                TEXT                 null,
   clave                VARCHAR(30)          null,
   constraint PK_ORGANIZACION_DETH primary key (id_odeth)
);

comment on table organizacion_deth is
'Organización en formato de detalle horizontal.';

comment on column organizacion_deth.id_odeth is
'Identificador de organización en forma horizontal. Se autoincrementa cuando se crea un nuevo detalle de organización.';

comment on column organizacion_deth.cod_orga is
'Identificador de detalle de organización, se hereda del organización.';

comment on column organizacion_deth.cod_var is
'Identificador de la variable o módulo.';

comment on column organizacion_deth.orden is
'Secuencial que permite ordenar las variables.';

comment on column organizacion_deth.val01 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val02 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val03 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val04 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val05 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val06 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val07 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val08 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val09 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val10 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val11 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val12 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val13 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val14 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val15 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.val16 is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_deth.clave is
'Identificador de usuario combinado con fecha de registro.';

/*==============================================================*/
/* Index: ID_ODETH_UI_IDX                                       */
/*==============================================================*/
create unique index ID_ODETH_UI_IDX on organizacion_deth (
id_odeth
);

/*==============================================================*/
/* Table: organizacion_detv                                     */
/*==============================================================*/
create table public.organizacion_detv (
   id_odetv             SERIAL               not null,
   cod_orga             INT8                 null,
   cod_mod              VARCHAR (10)         null,
   orden                INT2                 null,
   cod_preg             VARCHAR (20)         null,
   valor                TEXT                 null,
   clave                VARCHAR(30)          null,
   constraint PK_ORGANIZACION_DETV primary key (id_odetv)
);

comment on table organizacion_detv is
'Organización en formato de detalle vertical.';

comment on column organizacion_detv.id_odetv is
'Identificador de detalle de organización en formato vertical. Se autoincrementa cuando se crea un nuevo detalle.';

comment on column organizacion_detv.cod_orga is
'Identificador de detalle de organización, se hereda del organización.';

comment on column organizacion_detv.cod_mod is
'Identificador de la variable o módulo.';

comment on column organizacion_detv.orden is
'Secuencial que permite ordenar las variables.';

comment on column organizacion_detv.cod_preg is
'Identificador de pregunta en la organización.';

comment on column organizacion_detv.valor is
'Valor que se asigna a la variable capturada en la organización.';

comment on column organizacion_detv.clave is
'Identificador de usuario combinado con fecha de registro.';

/*==============================================================*/
/* Index: ID_ODETV_UI_IDX                                       */
/*==============================================================*/
create unique index ID_ODETV_UI_IDX on organizacion_detv (
id_odetv
);

/*==============================================================*/
/* Table: usuario                                               */
/*==============================================================*/
create table public.usuario (
   id_usuario           INT8                 not null,
   usuario              VARCHAR (16)         not null,
   clave                VARCHAR (100)        not null,
   tipo                 VARCHAR(20)          not null,
   nombres              VARCHAR (100)        null,
   apellidos            VARCHAR (100)        null,
   constraint PK_USUARIO primary key (id_usuario)
);

comment on table usuario is
'Contiene datos de los usuarios que están autorizados a hacer ingreso y actualización de formularios, organizaciones y establecimientos';

comment on column usuario.id_usuario is
'Identificador de usuario. Secuencial numérico autogenerado.';

comment on column usuario.usuario is
'Identificación de usuario, se debe registrar el número de cédula de identidad del administrador o técnico de territorio.';

comment on column usuario.clave is
'Clave del usuario. Alfanumérico, que permite registrar una credencial única por usuario.';

comment on column usuario.tipo is
'Tipo de usuario: Administrador, Administrador de AFC, Técnico de territorio.';

comment on column usuario.nombres is
'Nombres que permiten identificar al usuario.';

comment on column usuario.apellidos is
'Apellidos que permiten identificar al usuario.';

/*==============================================================*/
/* Index: ID_USUARIO_UI_IDX                                     */
/*==============================================================*/
create unique index ID_USUARIO_UI_IDX on usuario (
id_usuario
);

alter table public.dpa
   add constraint DPA_ANCESTRO_DPA_FK foreign key (cod_dpa)
      references dpa (id_dpa)
      on delete restrict on update restrict;

alter table establecimiento
   add constraint USR_ESTABLECIMIENTO_FK foreign key (cod_usuario)
      references usuario (id_usuario)
      on delete restrict on update restrict;

alter table establecimiento_deth
   add constraint EST_ESTABLECIMIENTO_DETH_FK foreign key (cod_esta)
      references establecimiento (id_establecimiento)
      on delete restrict on update restrict;

alter table establecimiento_detv
   add constraint EST_ESTABLECIMIENTO_DETV_FK foreign key (cod_esta)
      references establecimiento (id_establecimiento)
      on delete restrict on update restrict;

alter table formulario
   add constraint USR_FORMULARIO_FK foreign key (cod_usuario)
      references usuario (id_usuario)
      on delete restrict on update restrict;

alter table formulario_deth
   add constraint FOR_FORMULARIO_DETH_FK foreign key (cod_form)
      references formulario (id_formulario)
      on delete restrict on update restrict;

alter table formulario_detv
   add constraint FOR_FORMULARIO_DETV_FK foreign key (cod_form)
      references formulario (id_formulario)
      on delete restrict on update restrict;

alter table organizacion
   add constraint USR_ORGANIZACION_FK foreign key (cod_usuario)
      references usuario (id_usuario)
      on delete restrict on update restrict;

alter table organizacion_deth
   add constraint ORG_ORGANIZACION_DETH_FK foreign key (cod_orga)
      references organizacion (id_organizacion)
      on delete restrict on update restrict;

alter table organizacion_detv
   add constraint ORG_ORGANIZACION_DETV_FK foreign key (cod_orga)
      references organizacion (id_organizacion)
      on delete restrict on update restrict;
