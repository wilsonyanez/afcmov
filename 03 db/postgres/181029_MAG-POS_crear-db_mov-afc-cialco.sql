/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     29/11/2018 17:18:08                          */
/*==============================================================*/


drop index ID_CIALCO_UI_IDX;

drop index ID_CDETH_UI_IDX;

drop index ID_CDETV_UI_IDX;

drop index ID_DPA_UI_IDX;

drop index ID_ESTABLECIMIENTO_UI_IDX;

drop index ID_EDETH_UI_IDX;

drop index ID_EDETV_UI_IDX;

drop index ID_FORMULARIO_UI_IDX;

drop index ID_FDETH_UI_IDX;

drop index ID_FDETV_UI_IDX;

drop index ID_ORGANIZACION_UI_IDX;

drop index ID_ODETH_UI_IDX;

drop index ID_ODETV_UI_IDX;

drop index ID_USUARIO_UI_IDX;

/*==============================================================*/
/* Index: ID_CIALCO_UI_IDX                                      */
/*==============================================================*/
create unique index ID_CIALCO_UI_IDX on cialco (
id_cialco
);

/*==============================================================*/
/* Index: ID_CDETH_UI_IDX                                       */
/*==============================================================*/
create unique index ID_CDETH_UI_IDX on cialco_deth (
id_cdeth
);

/*==============================================================*/
/* Index: ID_CDETV_UI_IDX                                       */
/*==============================================================*/
create unique index ID_CDETV_UI_IDX on cialco_detv (
id_cdetv
);

/*==============================================================*/
/* Index: ID_DPA_UI_IDX                                         */
/*==============================================================*/
create unique index ID_DPA_UI_IDX on dpa (
id_dpa
);

/*==============================================================*/
/* Index: ID_ESTABLECIMIENTO_UI_IDX                             */
/*==============================================================*/
create unique index ID_ESTABLECIMIENTO_UI_IDX on establecimiento (
id_establecimiento
);

/*==============================================================*/
/* Index: ID_EDETH_UI_IDX                                       */
/*==============================================================*/
create unique index ID_EDETH_UI_IDX on establecimiento_deth (
id_edeth
);

/*==============================================================*/
/* Index: ID_EDETV_UI_IDX                                       */
/*==============================================================*/
create unique index ID_EDETV_UI_IDX on establecimiento_detv (
id_edetv
);

/*==============================================================*/
/* Index: ID_FORMULARIO_UI_IDX                                  */
/*==============================================================*/
create unique index ID_FORMULARIO_UI_IDX on formulario (
id_formulario
);

/*==============================================================*/
/* Index: ID_FDETH_UI_IDX                                       */
/*==============================================================*/
create unique index ID_FDETH_UI_IDX on formulario_deth (
id_fdeth
);

/*==============================================================*/
/* Index: ID_FDETV_UI_IDX                                       */
/*==============================================================*/
create unique index ID_FDETV_UI_IDX on formulario_detv (
id_fdetv
);

/*==============================================================*/
/* Index: ID_ORGANIZACION_UI_IDX                                */
/*==============================================================*/
create unique index ID_ORGANIZACION_UI_IDX on organizacion (
id_organizacion
);

/*==============================================================*/
/* Index: ID_ODETH_UI_IDX                                       */
/*==============================================================*/
create unique index ID_ODETH_UI_IDX on organizacion_deth (
id_odeth
);

/*==============================================================*/
/* Index: ID_ODETV_UI_IDX                                       */
/*==============================================================*/
create unique index ID_ODETV_UI_IDX on organizacion_detv (
id_odetv
);

/*==============================================================*/
/* Index: ID_USUARIO_UI_IDX                                     */
/*==============================================================*/
create unique index ID_USUARIO_UI_IDX on usuario (
id_usuario
);

