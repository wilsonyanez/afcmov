/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     19/12/2018 19:11:09                          */
/*==============================================================*/


drop table ACCION_FORTALECIMIENTO;

drop table APOYO_INSTITUCIONAL;

drop table CATASTRO_DIRECCION;

drop table CIALCO;

drop table CIALCO_CATASTRO_DIRECCION;

drop table CIALCO_FRECUENCIA;

drop table CIALCO_INTERINSTITUCIONAL;

drop table CIALCO_MONTO_VENTA;

drop table CIALCO_OFERTA_AGROPECUARIA;

drop table CIALCO_PRODUCTO;

drop table CIALCO_REPRESENTANTE_LEGAL;

drop table COORDENADA_GEOGRAFICA;

drop table FRECUENCIA;

drop table MODALIDAD;

drop table OFERTA_AGROPECUARIA;

drop table ORGANIZACION;

drop table ORGANIZACION_REPRESENTANTE;

drop table PERMANENCIA;

drop table PRODUCTO;

drop table PRODUCTOR;

drop table REPRESENTANTE_LEGAL;

drop table TIPO_FRECUENCIA;

drop table UBICACION_GEOGRAFICA;

/*==============================================================*/
/* Table: ACCION_FORTALECIMIENTO                                */
/*==============================================================*/
create table ACCION_FORTALECIMIENTO (
   AFR_ACCION_FORTALECIMIENTO_ID SERIAL not null,
   AFR_DESCRIPCION      TEXT                 not null,
   AFR_ORDEN            INT2                 null,
   AFR_FECHA_INICIO     DATE                 not null,
   AFR_FECHA_FIN        DATE                 null,
   AFR_ESTADO           BOOL                 not null,
   AFR_USUARIO_INSERTA  VARCHAR(100)         not null,
   AFR_FECHA_INSERTA    DATE                 not null,
   AFR_USUARIO_ACTUALIZA VARCHAR(100)         null,
   AFR_FECHA_ACTUALIZA  DATE                 null,
   AFR_USUARIO_ELIMINA  VARCHAR(100)         null,
   AFR_FECHA_ELIMINA    DATE                 null,
   constraint MOD_MODALIDAD_ID_PK primary key (AFR_ACCION_FORTALECIMIENTO_ID)
);

comment on table ACCION_FORTALECIMIENTO is
'Catálogo de acción de fortalecimiento del Circuito Alternativo de Comercialización según el MAG.';

comment on column ACCION_FORTALECIMIENTO.AFR_ACCION_FORTALECIMIENTO_ID is
'Identificador de la acción de fortalecimiento.';

comment on column ACCION_FORTALECIMIENTO.AFR_DESCRIPCION is
'Descripción del fortalecimiento: 1.1. Fortalecimiento de Capacidades, 1.2. Asistencia técnica, 1.3. Gestión del uso del espacio, 1.4. Agroturismo, 1.5. Gestión de Ordenazas, convenios y acuerdos, 1.6. Estrategias de Promoción y Difusión, 1.7. Gestión de recursos.';

comment on column ACCION_FORTALECIMIENTO.AFR_ORDEN is
'Registra el orden que se puede mostrar los registros del catálogo.';

comment on column ACCION_FORTALECIMIENTO.AFR_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column ACCION_FORTALECIMIENTO.AFR_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column ACCION_FORTALECIMIENTO.AFR_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column ACCION_FORTALECIMIENTO.AFR_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column ACCION_FORTALECIMIENTO.AFR_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column ACCION_FORTALECIMIENTO.AFR_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column ACCION_FORTALECIMIENTO.AFR_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column ACCION_FORTALECIMIENTO.AFR_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column ACCION_FORTALECIMIENTO.AFR_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: APOYO_INSTITUCIONAL                                   */
/*==============================================================*/
create table APOYO_INSTITUCIONAL (
   AIN_APOYO_INSTITUCIONAL_ID SERIAL not null,
   AIN_PROVINCIAL       BOOL                 null,
   AIN_CANTONAL         BOOL                 null,
   AIN_PARROQUIAL       BOOL                 null,
   AIN_OTRO             BOOL                 null,
   AIN_DESCRIPCION      TEXT                 not null,
   AIN_ORDEN            INT2                 null,
   AIN_FECHA_INICIO     DATE                 not null,
   AIN_FECHA_FIN        DATE                 null,
   AIN_ESTADO           BOOL                 not null,
   AIN_USUARIO_INSERTA  VARCHAR(100)         not null,
   AIN_FECHA_INSERTA    DATE                 not null,
   AIN_USUARIO_ACTUALIZA VARCHAR(100)         null,
   AIN_FECHA_ACTUALIZA  DATE                 null,
   AIN_USUARIO_ELIMINA  VARCHAR(100)         null,
   AINR_FECHA_ELIMINA   DATE                 null,
   constraint MOD_MODALIDAD_ID_PK primary key (AIN_APOYO_INSTITUCIONAL_ID)
);

comment on table APOYO_INSTITUCIONAL is
'Catálogo de instituciones que apoyan el fortalecimiento del Circuito Alternativo de Comercialización según el MAG.';

comment on column APOYO_INSTITUCIONAL.AIN_APOYO_INSTITUCIONAL_ID is
'Identificador de apoyo institucional al fortalecimiento del CIALCO.';

comment on column APOYO_INSTITUCIONAL.AIN_DESCRIPCION is
'Descripción del fortalecimiento: Gad Provincial, Gad Cantonal, Gad Parroquial, ONG, Cooperación Internacional, Institutos o Universidades, Colectivos, Empresa privadas, Otro.';

comment on column APOYO_INSTITUCIONAL.AIN_ORDEN is
'Registra el orden que se puede mostrar los registros del catálogo.';

comment on column APOYO_INSTITUCIONAL.AIN_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column APOYO_INSTITUCIONAL.AIN_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column APOYO_INSTITUCIONAL.AIN_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column APOYO_INSTITUCIONAL.AIN_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column APOYO_INSTITUCIONAL.AIN_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column APOYO_INSTITUCIONAL.AIN_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column APOYO_INSTITUCIONAL.AIN_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column APOYO_INSTITUCIONAL.AIN_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column APOYO_INSTITUCIONAL.AINR_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: CATASTRO_DIRECCION                                    */
/*==============================================================*/
create table CATASTRO_DIRECCION (
   CDI_CATASTRO_DIRECCION_ID SERIAL not null,
   CDI_COORDENADA_UBICACION_ID INT8                 null,
   CDI_SECTOR           TEXT                 null,
   CDI_CALLE_PRINCIPAL  TEXT                 not null,
   CDI_NUMERO           VARCHAR(10)          null,
   CDI_CALLE_SECUNDARIA TEXT                 null,
   CDI_REFERENCIA       TEXT                 null,
   CDI_ESTADO           BOOL                 not null,
   CDI_USUARIO_INSERTA  VARCHAR(100)         not null,
   CDI_FECHA_INSERTA    DATE                 not null,
   CDI_USUARIO_ACTUALIZA VARCHAR(100)         null,
   CDI_FECHA_ACTUALIZA  DATE                 null,
   CDI_USUARIO_ELIMINA  VARCHAR(100)         null,
   CDI_FECHA_ELIMINA    DATE                 null,
   constraint CDI_CATASTRO_DIRECCION_ID_PK primary key (CDI_CATASTRO_DIRECCION_ID)
);

comment on table CATASTRO_DIRECCION is
'Lugar de residencia del CIALCO.';

comment on column CATASTRO_DIRECCION.CDI_CATASTRO_DIRECCION_ID is
'Identificador de la ubicación geográfica del circuito de comercialización.';

comment on column CATASTRO_DIRECCION.CDI_COORDENADA_UBICACION_ID is
'Identificador de la ubicación geográfica del circuito de comercialización.';

comment on column CATASTRO_DIRECCION.CDI_SECTOR is
'Sector que permite ubicar al circuito de comercialización.';

comment on column CATASTRO_DIRECCION.CDI_CALLE_PRINCIPAL is
'Calle principal donde se ubica el circuito de comercialización.';

comment on column CATASTRO_DIRECCION.CDI_NUMERO is
'Número asociado a la dirección donde se ubica el circuito de comercialización.';

comment on column CATASTRO_DIRECCION.CDI_CALLE_SECUNDARIA is
'Calle secundaria o transversal donde se ubica el circuito de comercialización.';

comment on column CATASTRO_DIRECCION.CDI_REFERENCIA is
'Lugar o ubicación conocida que es cercano y permite ubicar la dirección del circuito de comercialización.';

comment on column CATASTRO_DIRECCION.CDI_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column CATASTRO_DIRECCION.CDI_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column CATASTRO_DIRECCION.CDI_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column CATASTRO_DIRECCION.CDI_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column CATASTRO_DIRECCION.CDI_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column CATASTRO_DIRECCION.CDI_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: CIALCO                                                */
/*==============================================================*/
create table CIALCO (
   CIA_CIALCO_ID        SERIAL not null,
   CIA_UBICACION_GEOGRAFICA_ID INT4                 null,
   CIA_MODALIDAD_ID     INT2                 null,
   CIA_PERMANENCIA_ID   INT2                 null,
   CIA_NOMBRE           TEXT                 not null,
   CIA_CONTACTO         VARCHAR(10)          null,
   CIA_CORREO_ELECTRONICO TEXT                 null,
   CIA_SITIO_WEB        TEXT                 null,
   CIA_FECHA_INICIO     DATE                 not null,
   CIA_FECHA_FIN        DATE                 null,
   CIA_ESTADO           BOOL                 not null,
   CIA_USUARIO_INSERTA  VARCHAR(200)         not null,
   CIA_FECHA_INSERTA    DATE                 not null,
   CIA_USUARIO_ACTUALIZA VARCHAR(200)         null,
   CIA_FECHA_ACTUALIZA  DATE                 null,
   CIA_USUARIO_ELIMINA  VARCHAR(200)         null,
   CIA_FECHA_ELIMINA    DATE                 null,
   constraint CIA_CIALCO_ID_PK primary key (CIA_CIALCO_ID)
);

comment on table CIALCO is
'Identidad al circuito de comercialización CIALCO.';

comment on column CIALCO.CIA_CIALCO_ID is
'Identificación del registro.';

comment on column CIALCO.CIA_UBICACION_GEOGRAFICA_ID is
'Identificador de división polìtica administrativa.';

comment on column CIALCO.CIA_MODALIDAD_ID is
'Identificador de modalidad';

comment on column CIALCO.CIA_PERMANENCIA_ID is
'Identificador de la permanencia en el circuito:';

comment on column CIALCO.CIA_NOMBRE is
'Nombre del circuito de comercialización';

comment on column CIALCO.CIA_CONTACTO is
'Información de contacto del cialco puede ser teléfono convencional o celular.';

comment on column CIALCO.CIA_CORREO_ELECTRONICO is
'Medio de contacto del cialco.';

comment on column CIALCO.CIA_SITIO_WEB is
'Dirección electrónica del cialco.';

comment on column CIALCO.CIA_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column CIALCO.CIA_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column CIALCO.CIA_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column CIALCO.CIA_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column CIALCO.CIA_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column CIALCO.CIA_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column CIALCO.CIA_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column CIALCO.CIA_USUARIO_ELIMINA is
'Identificación del usuario que realizar la eliminación del registro.';

comment on column CIALCO.CIA_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: CIALCO_CATASTRO_DIRECCION                             */
/*==============================================================*/
create table CIALCO_CATASTRO_DIRECCION (
   CCD_CIALCO_CATASTRO_ID SERIAL not null,
   CCD_CIALCO_ID        INT8                 null,
   CCD_CATASTRO_DIRECCION_ID INT8                 null,
   CCD_NRO_ESTIMADO_CONSUMIDORE INT8                 null,
   CCD_FECHA_INICIO     DATE                 not null,
   CCD_FECHA_FIN        DATE                 null,
   CCD_ESTADO           BOOL                 not null,
   CCD_USUARIO_INSERTA  VARCHAR(100)         not null,
   CCD_FECHA_INSERTA    DATE                 not null,
   CCD_USUARIO_ACTUALIZA VARCHAR(100)         null,
   CCD_FECHA_ACTUALIZA  DATE                 null,
   CCD_USUARIO_ELIMINA  VARCHAR(100)         null,
   CCD_FECHA_ELIMINA    DATE                 null,
   constraint CCD_CIALCO_CATASTRO_ID_PK primary key (CCD_CIALCO_CATASTRO_ID)
);

comment on table CIALCO_CATASTRO_DIRECCION is
'Lugar de residencia del CIALCO.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_CIALCO_CATASTRO_ID is
'Identificador de la ubicación geográfica del circuito de comercialización.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_CIALCO_ID is
'Identificación del registro.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_CATASTRO_DIRECCION_ID is
'Identificador de la ubicación geográfica del circuito de comercialización.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_FECHA_FIN is
'Fecha fin de la vigencia del registro.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column CIALCO_CATASTRO_DIRECCION.CCD_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: CIALCO_FRECUENCIA                                     */
/*==============================================================*/
create table CIALCO_FRECUENCIA (
   CFR_CIALCO_FRECUENCIA_ID SERIAL not null,
   CFR_CIALCO_ID        INT8                 null,
   CFR_FRECUENCIA_ID    INT2                 null,
   CFR_FECHA_INICIO     DATE                 not null,
   CFR_FECHA_FIN        DATE                 null,
   CFR_ESTADO           BOOL                 not null,
   CFR_USUARIO_INSERTA  VARCHAR(100)         not null,
   CFR_FECHA_INSERTA    DATE                 not null,
   CFR_USUARIO_ACTUALIZA VARCHAR(100)         null,
   CFR_FECHA_ACTUALIZA  DATE                 null,
   CFR_USUARIO_ELIMINA  VARCHAR(100)         null,
   CFR_FECHA_ELIMINA    DATE                 null,
   constraint CFR_CIALCO_FRECUENCIA_ID_PK primary key (CFR_CIALCO_FRECUENCIA_ID)
);

comment on table CIALCO_FRECUENCIA is
'Frecuencia asociado al Circuito Alternativo de Comercialización.';

comment on column CIALCO_FRECUENCIA.CFR_CIALCO_FRECUENCIA_ID is
'Identificador de frecuencia';

comment on column CIALCO_FRECUENCIA.CFR_CIALCO_ID is
'Identificación del registro.';

comment on column CIALCO_FRECUENCIA.CFR_FRECUENCIA_ID is
'Identificador de frecuencia';

comment on column CIALCO_FRECUENCIA.CFR_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column CIALCO_FRECUENCIA.CFR_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column CIALCO_FRECUENCIA.CFR_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column CIALCO_FRECUENCIA.CFR_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column CIALCO_FRECUENCIA.CFR_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column CIALCO_FRECUENCIA.CFR_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column CIALCO_FRECUENCIA.CFR_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column CIALCO_FRECUENCIA.CFR_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column CIALCO_FRECUENCIA.CFR_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: CIALCO_INTERINSTITUCIONAL                             */
/*==============================================================*/
create table CIALCO_INTERINSTITUCIONAL (
   INT_CIALCO_INTERINS_ID SERIAL not null,
   INT_ACCION_FORTALECIMIENTO_ID INT2                 not null,
   INT_APOYO_INSTITUCIONAL_ID INT2                 null,
   INT_CIALCO_ID        INT8                 null,
   INT_GAD_PROVINCIAL_ID INT4                 null,
   INT_GAD_CANTONAL_ID  INT4                 null,
   INT_GAD_PARROQUIAL_ID INT4                 null,
   INT_DESCRIPCION      TEXT                 not null,
   INT_FECHA_INICIO     DATE                 not null,
   INT_FECHA_FIN        DATE                 null,
   INT_ESTADO           BOOL                 not null,
   INT_USUARIO_INSERTA  VARCHAR(100)         not null,
   INT_FECHA_INSERTA    DATE                 not null,
   INT_USUARIO_ACTUALIZA VARCHAR(100)         null,
   INT_FECHA_ACTUALIZA  DATE                 null,
   INT_USUARIO_ELIMINA  VARCHAR(100)         null,
   INT_FECHA_ELIMINA    DATE                 null,
   constraint MOD_MODALIDAD_ID_PK primary key (INT_CIALCO_INTERINS_ID)
);

comment on table CIALCO_INTERINSTITUCIONAL is
'Acciones interinterinstitucionales de fortalecimiento del Circuito Alternativo de Comercialización.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_CIALCO_INTERINS_ID is
'Identificador de la acción de fortalecimiento.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_ACCION_FORTALECIMIENTO_ID is
'Identificador de la acción de fortalecimiento.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_APOYO_INSTITUCIONAL_ID is
'Identificador de apoyo institucional al fortalecimiento del CIALCO.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_CIALCO_ID is
'Identificación del registro.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_GAD_PROVINCIAL_ID is
'Identificador de división polìtica administrativa para registrar apoyo provincial';

comment on column CIALCO_INTERINSTITUCIONAL.INT_GAD_CANTONAL_ID is
'Identificador de división polìtica administrativa para registrar apoyo cantonal.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_GAD_PARROQUIAL_ID is
'Identificador de división polìtica administrativa para registrar apoyo parroquial.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_DESCRIPCION is
'Descripción del apoyo.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column CIALCO_INTERINSTITUCIONAL.INT_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column CIALCO_INTERINSTITUCIONAL.INT_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: CIALCO_MONTO_VENTA                                    */
/*==============================================================*/
create table CIALCO_MONTO_VENTA (
   CMV_CIALCO_MONTO_VENTA_ID SERIAL not null,
   CMV_CIALCO_ID        INT8                 null,
   CMV_EJERCICIO        INT4                 null,
   CMV_PERIODO          INT2                 null,
   CMV_MONTO            NUMERIC(9,2)         null,
   CMV_ESTADO           BOOL                 not null,
   CMV_USUARIO_INSERTA  VARCHAR(100)         not null,
   CMV_FECHA_INSERTA    DATE                 not null,
   CMV_USUARIO_ACTUALIZA VARCHAR(100)         null,
   CMV_FECHA_ACTUALIZA  DATE                 null,
   CMV_USUARIO_ELIMINA  VARCHAR(100)         null,
   CMV_FECHA_ELIMINA    DATE                 null,
   constraint MOD_MODALIDAD_ID_PK primary key (CMV_CIALCO_MONTO_VENTA_ID)
);

comment on table CIALCO_MONTO_VENTA is
'Registro de montos de venta por periodo del Circuito Alternativo de Comercialización.';

comment on column CIALCO_MONTO_VENTA.CMV_CIALCO_MONTO_VENTA_ID is
'Identificador de la acción de fortalecimiento.';

comment on column CIALCO_MONTO_VENTA.CMV_CIALCO_ID is
'Identificación del registro CIALCO.';

comment on column CIALCO_MONTO_VENTA.CMV_EJERCICIO is
'Identificador para registrar apoyo de ONG.';

comment on column CIALCO_MONTO_VENTA.CMV_PERIODO is
'Identificador para registrar apoyo de COOPERACIÓN INTERNACIONAL.';

comment on column CIALCO_MONTO_VENTA.CMV_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column CIALCO_MONTO_VENTA.CMV_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column CIALCO_MONTO_VENTA.CMV_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column CIALCO_MONTO_VENTA.CMV_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column CIALCO_MONTO_VENTA.CMV_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column CIALCO_MONTO_VENTA.CMV_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column CIALCO_MONTO_VENTA.CMV_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: CIALCO_OFERTA_AGROPECUARIA                            */
/*==============================================================*/
create table CIALCO_OFERTA_AGROPECUARIA (
   COA_CIALCO_OFERTA_AGRO_ID SERIAL not null,
   COA_CIALCO_ID        INT8                 null,
   COA_OFERTA_AGROPECUARIA_ID INT2                 null,
   COA_DESCRIPCION_OTRO TEXT                 null,
   COA_FECHA_INICIO     DATE                 not null,
   COA_FECHA_FIN        DATE                 null,
   COA_ESTADO           BOOL                 not null,
   COA_USUARIO_INSERTA  VARCHAR(100)         not null,
   COA_FECHA_INSERTA    DATE                 not null,
   COA_USUARIO_ACTUALIZA VARCHAR(100)         null,
   COA_FECHA_ACTUALIZA  DATE                 null,
   COA_USUARIO_ELIMINA  VARCHAR(100)         null,
   COA_FECHA_ELIMINA    DATE                 null,
   constraint CCD_CIALCO_CATASTRO_ID_PK primary key (COA_CIALCO_OFERTA_AGRO_ID)
);

comment on table CIALCO_OFERTA_AGROPECUARIA is
'Se registra la oferta agropecuaria que dispone un CIALCO.';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_CIALCO_OFERTA_AGRO_ID is
'Identificador de la ubicación geográfica del circuito de comercialización.';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_CIALCO_ID is
'Identificación del registro.';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_OFERTA_AGROPECUARIA_ID is
'Identificador de la oferta agropecuaria en el circuito:';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_FECHA_FIN is
'Fecha fin de la vigencia del registro.';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column CIALCO_OFERTA_AGROPECUARIA.COA_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: CIALCO_PRODUCTO                                       */
/*==============================================================*/
create table CIALCO_PRODUCTO (
   CPR_CIALCO_PRODUCTO_ID SERIAL not null,
   CPR_PRODUCTO_ID      INT4                 not null,
   CPR_CIALCO_ID        INT8                 not null,
   CPR_EJERCICIO        INT4                 not null,
   CPR_PERIODO          INT2                 not null,
   CPR_PRECIO           NUMERIC(9,2)         not null,
   CPR_UNIDAD           INT2                 not null,
   CPR_ESTADO           BOOL                 not null,
   CPR_USUARIO_INSERTA  VARCHAR(100)         not null,
   CPR_FECHA_INSERTA    DATE                 not null,
   CPR_USUARIO_ACTUALIZA VARCHAR(100)         null,
   CPR_FECHA_ACTUALIZA  DATE                 null,
   CPR_USUARIO_ELIMINA  VARCHAR(100)         null,
   CPR_FECHA_ELIMINA    DATE                 null,
   constraint MOD_MODALIDAD_ID_PK primary key (CPR_CIALCO_PRODUCTO_ID)
);

comment on table CIALCO_PRODUCTO is
'Registro de productos vendidos en el Circuito Alternativo de Comercialización.';

comment on column CIALCO_PRODUCTO.CPR_CIALCO_PRODUCTO_ID is
'Identificador de la acción de fortalecimiento.';

comment on column CIALCO_PRODUCTO.CPR_PRODUCTO_ID is
'Identificador de producto comercializado en un CIALCO.';

comment on column CIALCO_PRODUCTO.CPR_CIALCO_ID is
'Identificación del registro.';

comment on column CIALCO_PRODUCTO.CPR_EJERCICIO is
'Identificador para registrar apoyo de ONG.';

comment on column CIALCO_PRODUCTO.CPR_PERIODO is
'Identificador para registrar apoyo de COOPERACIÓN INTERNACIONAL.';

comment on column CIALCO_PRODUCTO.CPR_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column CIALCO_PRODUCTO.CPR_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column CIALCO_PRODUCTO.CPR_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column CIALCO_PRODUCTO.CPR_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column CIALCO_PRODUCTO.CPR_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column CIALCO_PRODUCTO.CPR_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column CIALCO_PRODUCTO.CPR_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: CIALCO_REPRESENTANTE_LEGAL                            */
/*==============================================================*/
create table CIALCO_REPRESENTANTE_LEGAL (
   CRE_CIALCO_REPRESENTANTE_ID SERIAL not null,
   CRE_CIALCO_ID        INT8                 null,
   CRE_REPRESENTANTE_ID INT8                 null,
   CRE_CONTACTO         VARCHAR(10)          null,
   CRE_CORREO_ELECTRONICO TEXT                 null,
   CRE_FECHA_INICIO     DATE                 not null,
   CRE_FECHA_FIN        DATE                 null,
   CRE_ESTADO           BOOL                 not null,
   CRE_USUARIO_INSERTA  VARCHAR(100)         not null,
   CRE_FECHA_INSERTA    DATE                 not null,
   CRE_USUARIO_ACTUALIZA VARCHAR(100)         null,
   CRE_FECHA_ACTUALIZA  DATE                 null,
   CRE_USUARIO_ELIMINA  VARCHAR(100)         null,
   CRE_FECHA_ELIMINA    DATE                 null,
   constraint CRE_CIALCO_REPRESENTANTE_ID primary key (CRE_CIALCO_REPRESENTANTE_ID)
);

comment on table CIALCO_REPRESENTANTE_LEGAL is
'Cada cialco en un periodo puede tener un representente legal';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_CIALCO_REPRESENTANTE_ID is
'Identificación del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_CIALCO_ID is
'Identificación del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_REPRESENTANTE_ID is
'Identificación del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_CONTACTO is
'Información de contacto del representante legal, puede ser teléfono convencional o celular.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_CORREO_ELECTRONICO is
'Medio de contacto del representente legal, correo electrónico.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column CIALCO_REPRESENTANTE_LEGAL.CRE_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: COORDENADA_GEOGRAFICA                                 */
/*==============================================================*/
create table COORDENADA_GEOGRAFICA (
   CGE_COORDENADA_UBICACION_ID SERIAL not null,
   CGE_POSICION_X       DECIMAL(14,6)        null,
   CGE_POSICION_Y       DECIMAL(14,6)        not null,
   CGE_POSICION_Z       DECIMAL(14,6)        null,
   CGE_UTM_15S          INT2                 null,
   CGE_UTM_16S          INT2                 null,
   CGE_UTM_17S          INT2                 null,
   CGE_UTM_18S          INT2                 null,
   CGE_UTM_15N          INT2                 null,
   CGE_UTM_16N          INT2                 null,
   CGE_UTM_17N          INT2                 null,
   CGE_UTM_18N          INT2                 null,
   CGE_FECHA_INICIO     DATE                 not null,
   CGE_FECHA_FIN        DATE                 null,
   CGE_ESTADO           BOOL                 not null,
   CGE_USUARIO_INSERTA  VARCHAR(100)         not null,
   CGE_FECHA_INSERTA    DATE                 not null,
   CGE_USUARIO_ACTUALIZA VARCHAR(100)         null,
   CGE_FECHA_ACTUALIZA  DATE                 null,
   CGE_USUARIO_ELIMINA  VARCHAR(100)         null,
   CGE_FECHA_ELIMINA    DATE                 null,
   constraint CGE_COORDENADA_UBICACION_ID_PK primary key (CGE_COORDENADA_UBICACION_ID)
);

comment on table COORDENADA_GEOGRAFICA is
'Lugar de ubicación georeferenciada para asociar a la dirección del CIALCO.';

comment on column COORDENADA_GEOGRAFICA.CGE_COORDENADA_UBICACION_ID is
'Identificador de la ubicación geográfica del circuito de comercialización.';

comment on column COORDENADA_GEOGRAFICA.CGE_POSICION_X is
'Sector que permite ubicar al circuito de comercialización.';

comment on column COORDENADA_GEOGRAFICA.CGE_POSICION_Y is
'Calle principal donde se ubica el circuito de comercialización.';

comment on column COORDENADA_GEOGRAFICA.CGE_POSICION_Z is
'Número asociado a la dirección donde se ubica el circuito de comercialización.';

comment on column COORDENADA_GEOGRAFICA.CGE_UTM_15N is
'Calle secundaria o transversal donde se ubica el circuito de comercialización.';

comment on column COORDENADA_GEOGRAFICA.CGE_UTM_16N is
'Lugar o ubicación conocida que es cercano y permite ubicar la dirección del circuito de comercialización.';

comment on column COORDENADA_GEOGRAFICA.CGE_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column COORDENADA_GEOGRAFICA.CGE_FECHA_FIN is
'Fecha fin de la vigencia del registro.';

comment on column COORDENADA_GEOGRAFICA.CGE_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column COORDENADA_GEOGRAFICA.CGE_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column COORDENADA_GEOGRAFICA.CGE_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column COORDENADA_GEOGRAFICA.CGE_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column COORDENADA_GEOGRAFICA.CGE_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column COORDENADA_GEOGRAFICA.CGE_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: FRECUENCIA                                            */
/*==============================================================*/
create table FRECUENCIA (
   FRE_FRECUENCIA_ID    SERIAL not null,
   FRE_TIPO_FRECUENCIA_ID INT2                 null,
   FRE_DESCRIPCION      TEXT                 not null,
   FRE_HORA_INICIO      DATE                 not null,
   FRE_HORA_FIN         DATE                 not null,
   FRE_DIA              INT2                 not null,
   FRE_FECHA_INICIO     DATE                 not null,
   FRE_FECHA_FIN        DATE                 null,
   FRE_ESTADO           BOOL                 not null,
   FRE_USUARIO_INSERTA  VARCHAR(100)         not null,
   FRE_FECHA_INSERTA    DATE                 not null,
   FRE_USUARIO_ACTUALIZA VARCHAR(100)         null,
   FRE_FECHA_ACTUALIZA  DATE                 null,
   FRE_USUARIO_ELIMINA  VARCHAR(100)         null,
   FRE_FECHA_ELIMINA    DATE                 null,
   constraint FRE_FRECUENCIA_ID_PK primary key (FRE_FRECUENCIA_ID)
);

comment on table FRECUENCIA is
'Frecuencia asociado al Circuito Alternativo de Comercialización.';

comment on column FRECUENCIA.FRE_FRECUENCIA_ID is
'Identificador de frecuencia';

comment on column FRECUENCIA.FRE_TIPO_FRECUENCIA_ID is
'Identificador de tipo de frecuencia';

comment on column FRECUENCIA.FRE_DESCRIPCION is
'Descripción de frecuencia: Diaria, semanal, quincenal, mensual. Horario. Dia.';

comment on column FRECUENCIA.FRE_HORA_INICIO is
'Hora de inicio de apertura de atención del CIALCO.';

comment on column FRECUENCIA.FRE_HORA_FIN is
'Hora de finalización de apertura de atención del CIALCO.';

comment on column FRECUENCIA.FRE_DIA is
'Número de dìa de la semana que se realiza el circuito de comercialización: 1 - domingo, 2 - lunes, 3 - martes, 4 - miercoles, 5 - jueves, 6 - viernes, 7 sábado.';

comment on column FRECUENCIA.FRE_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column FRECUENCIA.FRE_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column FRECUENCIA.FRE_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column FRECUENCIA.FRE_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column FRECUENCIA.FRE_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column FRECUENCIA.FRE_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column FRECUENCIA.FRE_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

/*==============================================================*/
/* Table: MODALIDAD                                             */
/*==============================================================*/
create table MODALIDAD (
   MOD_MODALIDAD_ID     SERIAL not null,
   MOD_DESCRIPCION      TEXT                 not null,
   MOD_ORDEN            INT2                 null,
   MOD_OTRO             BOOL                 null,
   MOD_FECHA_INICIO     DATE                 not null,
   MOD_FECHA_FIN        DATE                 null,
   MOD_ESTADO           BOOL                 not null,
   MOD_USUARIO_INSERTA  VARCHAR(100)         not null,
   MOD_FECHA_INSERTA    DATE                 not null,
   MOD_USUARIO_ACTUALIZA VARCHAR(100)         null,
   MOD_FECHA_ACTUALIZA  DATE                 null,
   MOD_USUARIO_ELIMINA  VARCHAR(100)         null,
   MOD_FECHA_ELIMINA    DATE                 null,
   constraint MOD_MODALIDAD_ID_PK primary key (MOD_MODALIDAD_ID)
);

comment on table MODALIDAD is
'Modalidad del Circuito Alternativo de Comercialización según el MAG.';

comment on column MODALIDAD.MOD_MODALIDAD_ID is
'Identificador de modalidad';

comment on column MODALIDAD.MOD_DESCRIPCION is
'Descripción de la modalidad: 1.1. Feria, 1.2. Canasta, 1.3. Venta En Finca, 1.4. Agroturismo, 1.5. Tienda, 1.6. Compra Pública, 1.7. Horeca, 1.8.  Otro, Cuál';

comment on column MODALIDAD.MOD_ORDEN is
'Registra el orden que se puede mostrar los registros.';

comment on column MODALIDAD.MOD_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column MODALIDAD.MOD_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column MODALIDAD.MOD_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column MODALIDAD.MOD_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column MODALIDAD.MOD_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column MODALIDAD.MOD_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column MODALIDAD.MOD_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column MODALIDAD.MOD_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column MODALIDAD.MOD_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: OFERTA_AGROPECUARIA                                   */
/*==============================================================*/
create table OFERTA_AGROPECUARIA (
   OFA_OFERTA_AGROPECUARIA_ID SERIAL not null,
   OFA_ORDEN            INT2                 null,
   OFA_DESCRIPCION      TEXT                 not null,
   OFA_FECHA_INICIO     DATE                 not null,
   OFA_FECHA_FIN        DATE                 null,
   OFA_ESTADO           BOOL                 not null,
   OFA_USUARIO_INSERTA  VARCHAR(100)         not null,
   OFA_FECHA_INSERTA    DATE                 not null,
   OFA_USUARIO_ACTUALIZA VARCHAR(100)         null,
   OFA_FECHA_ACTUALIZA  DATE                 null,
   OFA_USUARIO_ELIMINA  VARCHAR(100)         null,
   OFA_FECHA_ELIMINA    DATE                 null,
   constraint OFA_OFERTA_AGROPECUARIA_ID_PK primary key (OFA_OFERTA_AGROPECUARIA_ID)
);

comment on table OFERTA_AGROPECUARIA is
'Datos que identifican la oferta agropecuaria disponible en el mercado del Circuito Alternativo de Comercialización';

comment on column OFERTA_AGROPECUARIA.OFA_OFERTA_AGROPECUARIA_ID is
'Identificador de la oferta agropecuaria en el circuito:';

comment on column OFERTA_AGROPECUARIA.OFA_ORDEN is
'Registra el orden que se puede mostrar los registros.';

comment on column OFERTA_AGROPECUARIA.OFA_DESCRIPCION is
'Descripción de la oferta agropecuaria en el CIALCO: Frutas, Hortalizas, Granos Frescos, Granos Secos, Cereales, Lácteos, Cárnicos, Miel, Elaborados, Alimentos procesados de manera artesanal, Pescados y mariscos.';

comment on column OFERTA_AGROPECUARIA.OFA_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column OFERTA_AGROPECUARIA.OFA_FECHA_FIN is
'Fecha fin de la vigencia del registro.';

comment on column OFERTA_AGROPECUARIA.OFA_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column OFERTA_AGROPECUARIA.OFA_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column OFERTA_AGROPECUARIA.OFA_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column OFERTA_AGROPECUARIA.OFA_USUARIO_ACTUALIZA is
'Identificación del usuario que se realiza la actualización del registro.';

comment on column OFERTA_AGROPECUARIA.OFA_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column OFERTA_AGROPECUARIA.OFA_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column OFERTA_AGROPECUARIA.OFA_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: ORGANIZACION                                          */
/*==============================================================*/
create table ORGANIZACION (
   ORG_ORGANIZACION_ID  INT8                 not null,
   ORG_UBICACION_GEOGRAFICA_ID INT4                 null,
   ORG_CIALCO_ID        INT8                 null,
   ORG_HECHO_DERECHO    BOOL                 not null,
   ORG_RUC              VARCHAR(13)          not null,
   ORG_RAZON_SOCIAL     text                 not null,
   ORG_REGISTRO_SEPS    BOOL                 null,
   ORG_ACREDITADO_MAG   BOOL                 null,
   ORG_NRO_PRODUCTORES_TOTAL INT4                 null default NULL,
   ORG_NRO_PRODUCTORES_HOMBRES INT4                 null default NULL,
   ORG_NRO_PRODUCTORES_MUJERES INT4                 null,
   ORG_FECHA_INICIO     DATE                 null,
   ORG_FECHA_FIN        DATE                 null,
   ORG_ESTADO           BOOL                 null,
   ORG_USUARIO_INSERTA  VARCHAR(100)         null,
   ORG_FECHA_INSERTA    DATE                 null,
   ORG_USUARIO_ACTUALIZA VARCHAR(100)         null,
   ORG_FECHA_ACTUALIZA  DATE                 null,
   ORG_USUARIO_ELIMINA  VARCHAR(100)         null,
   ORG_FECHA_ELIMINA    DATE                 null,
   constraint PK_ORGANIZACION primary key (ORG_ORGANIZACION_ID)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

comment on table ORGANIZACION is
'Registra información de organizaciones vinculadas al CIALCO.';

comment on column ORGANIZACION.ORG_ORGANIZACION_ID is
'Secuencial identificador de organización';

comment on column ORGANIZACION.ORG_UBICACION_GEOGRAFICA_ID is
'Identificador de división polìtica administrativa.';

comment on column ORGANIZACION.ORG_CIALCO_ID is
'Identificación del registro CIALCO.';

comment on column ORGANIZACION.ORG_HECHO_DERECHO is
'Permite elegir el Tipo organización. Son excluyentes, debido que las organizaciones o son de Hecho o de Derecho.';

comment on column ORGANIZACION.ORG_RUC is
'Registro único de contribuyente, identificador de registro de actividad económica en el SRI';

comment on column ORGANIZACION.ORG_RAZON_SOCIAL is
'Caracteres. Nombre de la organización.';

comment on column ORGANIZACION.ORG_REGISTRO_SEPS is
'Permite identificar si la organización dispone de registro en el SEPS.';

comment on column ORGANIZACION.ORG_ACREDITADO_MAG is
'Permite identificar si se a acreditado en el MAG';

comment on column ORGANIZACION.ORG_NRO_PRODUCTORES_TOTAL is
'Registra el número total de productores que pertenecen a la organización.';

comment on column ORGANIZACION.ORG_NRO_PRODUCTORES_HOMBRES is
'Número de productores hombres';

comment on column ORGANIZACION.ORG_NRO_PRODUCTORES_MUJERES is
'Número de productores mujeres';

comment on column ORGANIZACION.ORG_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column ORGANIZACION.ORG_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column ORGANIZACION.ORG_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column ORGANIZACION.ORG_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column ORGANIZACION.ORG_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column ORGANIZACION.ORG_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column ORGANIZACION.ORG_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column ORGANIZACION.ORG_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column ORGANIZACION.ORG_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: ORGANIZACION_REPRESENTANTE                            */
/*==============================================================*/
create table ORGANIZACION_REPRESENTANTE (
   ORE_ORGREP_ID        SERIAL not null,
   ORE_REPRESENTANTE_ID INT8                 null,
   ORE_ORGANIZACION_ID  INT8                 null,
   ORE_CONTACTO         VARCHAR(10)          null,
   ORE_CORREO_ELECTRONICO TEXT                 null,
   ORE_FECHA_INICIO     DATE                 not null,
   ORE_FECHA_FIN        DATE                 null,
   ORE_ESTADO           BOOL                 not null,
   ORE_USUARIO_INSERTA  VARCHAR(100)         not null,
   ORE_FECHA_INSERTA    DATE                 not null,
   ORE_USUARIO_ACTUALIZA VARCHAR(100)         null,
   ORE_FECHA_ACTUALIZA  DATE                 null,
   ORE_USUARIO_ELIMINA  VARCHAR(100)         null,
   ORE_FECHA_ELIMINA    DATE                 null,
   constraint CRE_CIALCO_REPRESENTANTE_ID primary key (ORE_ORGREP_ID)
);

comment on table ORGANIZACION_REPRESENTANTE is
'Cada organización en un periodo puede tener un representente';

comment on column ORGANIZACION_REPRESENTANTE.ORE_ORGREP_ID is
'Identificación del registro.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_REPRESENTANTE_ID is
'Secuencial identificador de representante.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_ORGANIZACION_ID is
'Secuencial identificador de organización';

comment on column ORGANIZACION_REPRESENTANTE.ORE_CONTACTO is
'Información de contacto del representante, puede ser teléfono convencional o celular.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_CORREO_ELECTRONICO is
'Medio de contacto del representente, correo electrónico.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column ORGANIZACION_REPRESENTANTE.ORE_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column ORGANIZACION_REPRESENTANTE.ORE_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: PERMANENCIA                                           */
/*==============================================================*/
create table PERMANENCIA (
   PER_PERMANENCIA_ID   SERIAL not null,
   PER_DESCRIPCION      TEXT                 not null,
   PER_ORDEN            INT2                 null,
   PER_FECHA_INICIO     DATE                 not null,
   PER_FECHA_FIN        DATE                 null,
   PER_ESTADO           BOOL                 not null,
   PER_USUARIO_INSERTA  VARCHAR(100)         not null,
   PER_FECHA_INSERTA    DATE                 not null,
   PER_USUARIO_ACTUALIZA VARCHAR(100)         null,
   PER_FECHA_ACTUALIZA  DATE                 null,
   PER_USUARIO_ELIMINA  VARCHAR(100)         null,
   PER_FECHA_ELIMINA    DATE                 null,
   constraint PER_PERMANENCIA_ID_PK primary key (PER_PERMANENCIA_ID)
);

comment on table PERMANENCIA is
'Datos que identifican la permanencia en el mercado del Circuito Alternativo de Comercialización';

comment on column PERMANENCIA.PER_PERMANENCIA_ID is
'Identificador de la permanencia en el circuito:';

comment on column PERMANENCIA.PER_DESCRIPCION is
'Descripción de la permanencia en el CIALCO: 2.1. Nuevo, 2.2. Fortalecido, 2.3. Cerrado.';

comment on column PERMANENCIA.PER_ORDEN is
'Registra el orden que se puede mostrar los registros.';

comment on column PERMANENCIA.PER_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column PERMANENCIA.PER_FECHA_FIN is
'Fecha fin de la vigencia del registro.';

comment on column PERMANENCIA.PER_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column PERMANENCIA.PER_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column PERMANENCIA.PER_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column PERMANENCIA.PER_USUARIO_ACTUALIZA is
'Identificación del usuario que se realiza la actualización del registro.';

comment on column PERMANENCIA.PER_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column PERMANENCIA.PER_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column PERMANENCIA.PER_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: PRODUCTO                                              */
/*==============================================================*/
create table PRODUCTO (
   PRD_PRODUCTO_ID      SERIAL not null,
   PRD_CODIGO_PRODUCTO  VARCHAR(6)           not null,
   PRD_NIVEL            INT2                 not null,
   PRD_NOMBRE           varchar(200)         not null,
   PRD_PADRE_PRODUCTO   VARCHAR(6)           null,
   PRD_FECHA_INICIO     DATE                 not null,
   PRD_FECHA_FIN        DATE                 null,
   PRD_ESTADO           BOOL                 not null,
   PRD_USUARIO_INSERTA  VARCHAR(100)         null,
   PRD_FECHA_INSERTA    DATE                 null,
   PRD_USUARIO_ACTUALIZA VARCHAR(100)         null,
   PRD_FECHA_ACTUALIZA  DATE                 null,
   PRD_USUARIO_ELIMINA  VARCHAR(100)         null,
   PRD_FECHA_ELIMINA    DATE                 null,
   constraint UBICACION_GEOGRAFICA_PK primary key (PRD_PRODUCTO_ID)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

comment on table PRODUCTO is
'Producto y variedad según el MAG.';

comment on column PRODUCTO.PRD_PRODUCTO_ID is
'Identificador de producto comercializado en un CIALCO.';

comment on column PRODUCTO.PRD_CODIGO_PRODUCTO is
'Código asociado al registro del producto según el INEC.';

comment on column PRODUCTO.PRD_NIVEL is
'Identificador del nivel del producto.';

comment on column PRODUCTO.PRD_NOMBRE is
'Nombre del producto. (Producto, variedad)';

comment on column PRODUCTO.PRD_PADRE_PRODUCTO is
'Código asociado al registro ancestro de la variedad de un producto según el INEC.';

comment on column PRODUCTO.PRD_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column PRODUCTO.PRD_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column PRODUCTO.PRD_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column PRODUCTO.PRD_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column PRODUCTO.PRD_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column PRODUCTO.PRD_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column PRODUCTO.PRD_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column PRODUCTO.PRD_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column PRODUCTO.PRD_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: PRODUCTOR                                             */
/*==============================================================*/
create table PRODUCTOR (
   PRO_PRODUCTOR_ID     SERIAL not null,
   PRO_CIALCO_ID        INT8                 not null,
   PRO_DISPONE_SELLO_AFC BOOL                not null,
   PRO_IDENTIFICACION_SELLO_AFC VARCHAR(20)  null,
   PRO_NUMERO_CEDULA    VARCHAR(13)          not null,
   PRO_NOMBRES          TEXT                 not null,
   PRO_APELLIDOS        TEXT                 not null,
   PRO_GENERO           BOOL                 not null,
   PRO_FECHA_NACIMIENTO DATE                 not null,
   PRO_NACIONALIDAD     VARCHAR(8)           not null,
   PRO_FECHA_INICIO     DATE                 not null,
   PRO_FECHA_FIN        DATE                 null,
   PRO_ESTADO           BOOL                 not null,
   PRO_USUARIO_INSERTA  VARCHAR(100)         not null,
   PRO_FECHA_INSERTA    DATE                 not null,
   PRO_USUARIO_ACTUALIZA VARCHAR(100)         null,
   PRO_FECHA_ACTUALIZA  DATE                 null,
   PRO_USUARIO_ELIMINA  VARCHAR(100)         null,
   PRO_FECHA_ELIMINA    DATE                 null,
   constraint CCD_CIALCO_CATASTRO_ID_PK primary key (PRO_PRODUCTOR_ID)
);

comment on table PRODUCTOR is
'Se registra Datos de Participantes del Circuito en WEB CIALCO.';

comment on column PRODUCTOR.PRO_PRODUCTOR_ID is
'Identificador de la ubicación geográfica del circuito de comercialización.';

comment on column PRODUCTOR.PRO_CIALCO_ID is
'Identificación del registro CIALCO.';

comment on column PRODUCTOR.PRO_DISPONE_SELLO_AFC is
'Catálogo de Pregunta [S, N]: En caso de SI, productores con sello. En caso de NO, productores sin sello.';

comment on column PRODUCTOR.PRO_IDENTIFICACION_SELLO_AFC is
'Registro o Código asociado a la identificación del Sello de AFC.';

comment on column PRODUCTOR.PRO_NUMERO_CEDULA is
'Número de Cédula de Identidad del Productor asociado al CIALCO';

comment on column PRODUCTOR.PRO_NOMBRES is
'Nombres que identiifcan al Productor asociado al CIALCO';

comment on column PRODUCTOR.PRO_APELLIDOS is
'Apellidos que identiifcan al Productor asociado al CIALCO';

comment on column PRODUCTOR.PRO_GENERO is
'Géneros según el Registro Civil';

comment on column PRODUCTOR.PRO_FECHA_NACIMIENTO is
'Almacena la fecha de nacimiento del productor asociado al CIALCO';

comment on column PRODUCTOR.PRO_NACIONALIDAD is
'Registra la nacionalidad del producctor';

comment on column PRODUCTOR.PRO_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column PRODUCTOR.PRO_FECHA_FIN is
'Fecha fin de la vigencia del registro.';

comment on column PRODUCTOR.PRO_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column PRODUCTOR.PRO_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column PRODUCTOR.PRO_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column PRODUCTOR.PRO_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column PRODUCTOR.PRO_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column PRODUCTOR.PRO_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: REPRESENTANTE_LEGAL                                   */
/*==============================================================*/
create table REPRESENTANTE_LEGAL (
   RLE_REPRESENTANTE_ID SERIAL not null,
   RLE_CEDULA_IDENTIDAD VARCHAR(10)          not null,
   RLE_NOMBRE           TEXT                 not null,
   RLE_APELLIDO         TEXT                 not null,
   RLE_ESTADO           BOOL                 not null,
   RLE_USUARIO_INSERTA  VARCHAR(100)         not null,
   RLE_FECHA_INSERTA    DATE                 not null,
   RLE_USUARIO_ACTUALIZA VARCHAR(100)         null,
   RLE_FECHA_ACTUALIZA  DATE                 null,
   RLE_USUARIO_ELIMINA  VARCHAR(100)         null,
   RLE_FECHA_ELIMINA    DATE                 null,
   constraint RLE_REPRESENTANTE_ID_PK primary key (RLE_REPRESENTANTE_ID)
);

comment on table REPRESENTANTE_LEGAL is
'Identidad del representante legal del circuito de comercialización';

comment on column REPRESENTANTE_LEGAL.RLE_REPRESENTANTE_ID is
'Identificación del registro.';

comment on column REPRESENTANTE_LEGAL.RLE_CEDULA_IDENTIDAD is
'Número de cédula de ciudadanía';

comment on column REPRESENTANTE_LEGAL.RLE_NOMBRE is
'Nombre del representante legal';

comment on column REPRESENTANTE_LEGAL.RLE_APELLIDO is
'Apellido del representante legal';

comment on column REPRESENTANTE_LEGAL.RLE_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column REPRESENTANTE_LEGAL.RLE_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column REPRESENTANTE_LEGAL.RLE_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column REPRESENTANTE_LEGAL.RLE_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column REPRESENTANTE_LEGAL.RLE_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column REPRESENTANTE_LEGAL.RLE_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column REPRESENTANTE_LEGAL.RLE_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: TIPO_FRECUENCIA                                       */
/*==============================================================*/
create table TIPO_FRECUENCIA (
   TFR_TIPO_FRECUENCIA_ID SERIAL not null,
   TFR_ORDEN            INT2                 null,
   TFR_DESCRIPCION      TEXT                 not null,
   TFR_FECHA_INICIO     DATE                 not null,
   TFR_FECHA_FIN        DATE                 null,
   TFR_ESTADO           BOOL                 not null,
   TFR_USUARIO_INSERTA  VARCHAR(100)         not null,
   TFR_FECHA_INSERTA    DATE                 not null,
   TFR_USUARIO_ACTUALIZA VARCHAR(100)         null,
   TFR_FECHA_ACTUALIZA  DATE                 null,
   TFR_USUARIO_ELIMINA  VARCHAR(100)         null,
   TFR_FECHA_ELIMINA    DATE                 null,
   constraint TFR_TIPO_FRECUENCIA_ID_PK primary key (TFR_TIPO_FRECUENCIA_ID)
);

comment on table TIPO_FRECUENCIA is
'Tipo de frecuencia asociado al Circuito Alternativo de Comercialización.';

comment on column TIPO_FRECUENCIA.TFR_TIPO_FRECUENCIA_ID is
'Identificador de tipo de frecuencia';

comment on column TIPO_FRECUENCIA.TFR_ORDEN is
'Registra el orden que se puede mostrar los registros.';

comment on column TIPO_FRECUENCIA.TFR_DESCRIPCION is
'Descripción de tipo de frecuencia: Diaria, semanal, quincenal, mensual.';

comment on column TIPO_FRECUENCIA.TFR_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column TIPO_FRECUENCIA.TFR_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column TIPO_FRECUENCIA.TFR_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column TIPO_FRECUENCIA.TFR_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column TIPO_FRECUENCIA.TFR_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column TIPO_FRECUENCIA.TFR_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column TIPO_FRECUENCIA.TFR_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column TIPO_FRECUENCIA.TFR_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column TIPO_FRECUENCIA.TFR_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

/*==============================================================*/
/* Table: UBICACION_GEOGRAFICA                                  */
/*==============================================================*/
create table UBICACION_GEOGRAFICA (
   UGE_UBICACION_GEOGRAFICA_ID SERIAL not null,
   UGE_CODIGO_UBICACION VARCHAR(6)           not null,
   UGE_NIVEL            INT2                 not null,
   UGE_NOMBRE           varchar(200)         not null,
   UGE_PADRE_UBICACION  VARCHAR(6)           null,
   UGE_FECHA_INICIO     DATE                 null,
   UGE_FECHA_FIN        DATE                 null,
   UGE_ESTADO           BOOL                 null,
   UGE_USUARIO_INSERTA  VARCHAR(100)         null,
   UGE_FECHA_INSERTA    DATE                 null,
   UGE_USUARIO_ACTUALIZA VARCHAR(100)         null,
   UGE_FECHA_ACTUALIZA  DATE                 null,
   UGE_USUARIO_ELIMINA  VARCHAR(100)         null,
   UGE_FECHA_ELIMINA    DATE                 null,
   constraint UBICACION_GEOGRAFICA_PK primary key (UGE_UBICACION_GEOGRAFICA_ID)
)
ENGINE=MyISAM DEFAULT CHARSET=utf8;

comment on table UBICACION_GEOGRAFICA is
'División polìtica administrativa según el INEC.';

comment on column UBICACION_GEOGRAFICA.UGE_UBICACION_GEOGRAFICA_ID is
'Identificador de división polìtica administrativa.';

comment on column UBICACION_GEOGRAFICA.UGE_CODIGO_UBICACION is
'Código asociado al registro de la división politica administrativa según el INEC.';

comment on column UBICACION_GEOGRAFICA.UGE_NIVEL is
'Identificador del nivel de la división polìtica administrativa.';

comment on column UBICACION_GEOGRAFICA.UGE_NOMBRE is
'Nombre de división polìtica administrativa. (Provincia, cantón, parroquia)';

comment on column UBICACION_GEOGRAFICA.UGE_PADRE_UBICACION is
'Código asociado al registro ancestro de la división politica administrativa según el INEC.';

comment on column UBICACION_GEOGRAFICA.UGE_FECHA_INICIO is
'Fecha de inicio de la vigencia del registro.';

comment on column UBICACION_GEOGRAFICA.UGE_FECHA_FIN is
'Fecha de fin de vigencia del registro.';

comment on column UBICACION_GEOGRAFICA.UGE_ESTADO is
'Estado de vigencia del registro. Valores aceptados: ACTIVO (1), INACTIVO (0).';

comment on column UBICACION_GEOGRAFICA.UGE_USUARIO_INSERTA is
'Identificación del usuario que realizar la insersión del registro.';

comment on column UBICACION_GEOGRAFICA.UGE_FECHA_INSERTA is
'Fecha y hora que realizar la insersión del registro.';

comment on column UBICACION_GEOGRAFICA.UGE_USUARIO_ACTUALIZA is
'Identificación del usuario que realizar la actualización del registro.';

comment on column UBICACION_GEOGRAFICA.UGE_FECHA_ACTUALIZA is
'Fecha y hora que se realiza la actualización del registro.';

comment on column UBICACION_GEOGRAFICA.UGE_USUARIO_ELIMINA is
'Identificación del usuario que realiza la eliminación del registro.';

comment on column UBICACION_GEOGRAFICA.UGE_FECHA_ELIMINA is
'Fecha y hora que se realiza la eliminación del registro.';

alter table CATASTRO_DIRECCION
   add constraint COORGEOG_CATDIRECCION_FK foreign key (CDI_COORDENADA_UBICACION_ID)
      references COORDENADA_GEOGRAFICA (CGE_COORDENADA_UBICACION_ID)
      on delete restrict on update restrict;

alter table CIALCO
   add constraint CIALCO_MODALIDAD_FK foreign key (CIA_MODALIDAD_ID)
      references MODALIDAD (MOD_MODALIDAD_ID)
      on delete restrict on update restrict;

alter table CIALCO
   add constraint CIALCO_PERMANENCIA_FK foreign key (CIA_PERMANENCIA_ID)
      references PERMANENCIA (PER_PERMANENCIA_ID)
      on delete restrict on update restrict;

alter table CIALCO
   add constraint CIALCO_UBICACION_FK foreign key (CIA_UBICACION_GEOGRAFICA_ID)
      references UBICACION_GEOGRAFICA (UGE_UBICACION_GEOGRAFICA_ID)
      on delete restrict on update restrict;

alter table CIALCO_CATASTRO_DIRECCION
   add constraint CATDIR_CIALCOCATDIR_FK foreign key (CCD_CATASTRO_DIRECCION_ID)
      references CATASTRO_DIRECCION (CDI_CATASTRO_DIRECCION_ID)
      on delete restrict on update restrict;

alter table CIALCO_CATASTRO_DIRECCION
   add constraint CIALCO_CIALCOCATDIR_FK foreign key (CCD_CIALCO_ID)
      references CIALCO (CIA_CIALCO_ID)
      on delete restrict on update restrict;

alter table CIALCO_FRECUENCIA
   add constraint CIALCO_CIALCO_FRECUENCIA_FK foreign key (CFR_CIALCO_ID)
      references CIALCO (CIA_CIALCO_ID)
      on delete restrict on update restrict;

alter table CIALCO_FRECUENCIA
   add constraint FRECUENCIA_CIALCOFRECUENCIA_FK foreign key (CFR_FRECUENCIA_ID)
      references FRECUENCIA (FRE_FRECUENCIA_ID)
      on delete restrict on update restrict;

alter table CIALCO_INTERINSTITUCIONAL
   add constraint ACCFOR_INTERCIALCO_FK foreign key (INT_ACCION_FORTALECIMIENTO_ID)
      references ACCION_FORTALECIMIENTO (AFR_ACCION_FORTALECIMIENTO_ID)
      on delete restrict on update restrict;

alter table CIALCO_INTERINSTITUCIONAL
   add constraint APOINS_CIALCOINTER_FK foreign key (INT_APOYO_INSTITUCIONAL_ID)
      references APOYO_INSTITUCIONAL (AIN_APOYO_INSTITUCIONAL_ID)
      on delete restrict on update restrict;

alter table CIALCO_INTERINSTITUCIONAL
   add constraint CANTONAL_CIALCOINTER_FK foreign key (INT_GAD_PARROQUIAL_ID)
      references UBICACION_GEOGRAFICA (UGE_UBICACION_GEOGRAFICA_ID)
      on delete restrict on update restrict;

alter table CIALCO_INTERINSTITUCIONAL
   add constraint CIALCO_CIALCOINTERINST_FK foreign key (INT_CIALCO_ID)
      references CIALCO (CIA_CIALCO_ID)
      on delete restrict on update restrict;

alter table CIALCO_INTERINSTITUCIONAL
   add constraint PARROQUIAL_CIALCOINTER_FK foreign key (INT_GAD_CANTONAL_ID)
      references UBICACION_GEOGRAFICA (UGE_UBICACION_GEOGRAFICA_ID)
      on delete restrict on update restrict;

alter table CIALCO_INTERINSTITUCIONAL
   add constraint PROVINCIAL_CIALCOINTER_FK foreign key (INT_GAD_PROVINCIAL_ID)
      references UBICACION_GEOGRAFICA (UGE_UBICACION_GEOGRAFICA_ID)
      on delete restrict on update restrict;

alter table CIALCO_MONTO_VENTA
   add constraint CIALCO_CIALCOMONTOVENTA_FK foreign key (CMV_CIALCO_ID)
      references CIALCO (CIA_CIALCO_ID)
      on delete restrict on update restrict;

alter table CIALCO_OFERTA_AGROPECUARIA
   add constraint CIALCO_CIALCOOFERTAAGRO_FK foreign key (COA_CIALCO_ID)
      references CIALCO (CIA_CIALCO_ID)
      on delete restrict on update restrict;

alter table CIALCO_OFERTA_AGROPECUARIA
   add constraint OFEAGR_CIALCOOFEAGR_FK foreign key (COA_OFERTA_AGROPECUARIA_ID)
      references OFERTA_AGROPECUARIA (OFA_OFERTA_AGROPECUARIA_ID)
      on delete restrict on update restrict;

alter table CIALCO_PRODUCTO
   add constraint CIALCO_CIALCOPRODUCTO_FK foreign key (CPR_CIALCO_ID)
      references CIALCO (CIA_CIALCO_ID)
      on delete restrict on update restrict;

alter table CIALCO_PRODUCTO
   add constraint PRODUCTO_CIALCOPRODUCTO_FK foreign key (CPR_PRODUCTO_ID)
      references PRODUCTO (PRD_PRODUCTO_ID)
      on delete restrict on update restrict;

alter table CIALCO_REPRESENTANTE_LEGAL
   add constraint CIALCO_CIALCOREPLEGAL_FK foreign key (CRE_CIALCO_ID)
      references CIALCO (CIA_CIALCO_ID)
      on delete restrict on update restrict;

alter table CIALCO_REPRESENTANTE_LEGAL
   add constraint CIALREPLEGAL_CIALREPLEGAL_FK foreign key (CRE_REPRESENTANTE_ID)
      references REPRESENTANTE_LEGAL (RLE_REPRESENTANTE_ID)
      on delete restrict on update restrict;

alter table FRECUENCIA
   add constraint TIPO_FRECUENCIA_FRECUENCIA_FK foreign key (FRE_TIPO_FRECUENCIA_ID)
      references TIPO_FRECUENCIA (TFR_TIPO_FRECUENCIA_ID)
      on delete restrict on update restrict;

alter table ORGANIZACION
   add constraint CIALCO_ORGANIZACION_FK foreign key (ORG_CIALCO_ID)
      references CIALCO (CIA_CIALCO_ID)
      on delete restrict on update restrict;

alter table ORGANIZACION
   add constraint UBICGEO_ORGANIZACION_FK foreign key (ORG_UBICACION_GEOGRAFICA_ID)
      references UBICACION_GEOGRAFICA (UGE_UBICACION_GEOGRAFICA_ID)
      on delete restrict on update restrict;

alter table ORGANIZACION_REPRESENTANTE
   add constraint ORG_ORGREP_FK foreign key (ORE_ORGANIZACION_ID)
      references ORGANIZACION (ORG_ORGANIZACION_ID)
      on delete restrict on update restrict;

alter table ORGANIZACION_REPRESENTANTE
   add constraint REPLEG_ORGREPLEG_FK foreign key (ORE_REPRESENTANTE_ID)
      references REPRESENTANTE_LEGAL (RLE_REPRESENTANTE_ID)
      on delete restrict on update restrict;

alter table PRODUCTOR
   add constraint CIALCO_PRODUCTOR_FK foreign key (PRO_CIALCO_ID)
      references CIALCO (CIA_CIALCO_ID)
      on delete restrict on update restrict;

