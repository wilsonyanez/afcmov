import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DatePipe } from '@angular/common';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListadoPage } from '../pages/listado/listado';

import { M1aPage } from '../pages/m1a/m1a';
import { M1bPage } from '../pages/m1b/m1b';
import { M1cPage } from '../pages/m1c/m1c';
import { M1dPage } from '../pages/m1d/m1d';
import { M1ePage } from '../pages/m1e/m1e';
import { M1fPage } from '../pages/m1f/m1f';
import { M1gPage } from '../pages/m1g/m1g';
import { M1hPage } from '../pages/m1h/m1h';
import { TabsPage } from '../pages/tabs/tabs';

import { V1aPage } from '../pages/v1a/v1a';
import { V1bPage } from '../pages/v1b/v1b';
import { V1cPage } from '../pages/v1c/v1c';
import { V1dPage } from '../pages/v1d/v1d';
import { V1ePage } from '../pages/v1e/v1e';
import { V1fPage } from '../pages/v1f/v1f';
import { V1gPage } from '../pages/v1g/v1g';
import { V1hPage } from '../pages/v1h/v1h';
import { V1iPage } from '../pages/v1i/v1i';
import { V1jPage } from '../pages/v1j/v1j';
import { V1kPage } from '../pages/v1k/v1k';
import { V1lPage } from '../pages/v1l/v1l';
import { V1mPage } from '../pages/v1m/v1m';
import { V1nPage } from '../pages/v1n/v1n';
import { TabsVPage } from '../pages/tabs-v/tabs-v';
import { EnvioinfoPage } from '../pages/envioinfo/envioinfo';

import { O2aPage } from '../pages/o2a/o2a';
import { O2bPage } from '../pages/o2b/o2b';
import { O2cPage } from '../pages/o2c/o2c';
import { O2dPage } from '../pages/o2d/o2d';
import { O2ePage } from '../pages/o2e/o2e';
import { O2fPage } from '../pages/o2f/o2f';
import { O2gPage } from '../pages/o2g/o2g';
import { O2hPage } from '../pages/o2h/o2h';
import { TabsOPage } from '../pages/tabs-o/tabs-o';

import { E3aPage } from '../pages/e3a/e3a';
import { E3bPage } from '../pages/e3b/e3b';
import { E3cPage } from '../pages/e3c/e3c';
import { E3dPage } from '../pages/e3d/e3d';
import { E3ePage } from '../pages/e3e/e3e';
import { E3fPage } from '../pages/e3f/e3f';
import { E3gPage } from '../pages/e3g/e3g';
import { TabsEPage } from '../pages/tabs-e/tabs-e';

import { C4aPage } from '../pages/c4a/c4a';
import { C4bPage } from '../pages/c4b/c4b';
import { C4cPage } from '../pages/c4c/c4c';
import { C4dPage } from '../pages/c4d/c4d';
import { C4ePage } from '../pages/c4e/c4e';
import { C4fPage } from '../pages/c4f/c4f';
import { C4gPage } from '../pages/c4g/c4g';
import { C4hPage } from '../pages/c4h/c4h';
import { C4iPage } from '../pages/c4i/c4i';
import { C4jPage } from '../pages/c4j/c4j';
import { C4kPage } from '../pages/c4k/c4k';
import { TabsCPage } from '../pages/tabs-c/tabs-c';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { Validar } from '../providers/validacion/validar';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		ListadoPage,
		M1aPage,
		M1bPage,
		M1cPage,
		M1dPage,
		M1ePage,
		M1fPage,
		M1gPage,
		M1hPage,
		TabsPage,
		V1aPage,
		V1bPage,
		V1cPage,
		V1dPage,
		V1ePage,
		V1fPage,
		V1gPage,
		V1hPage,
		V1iPage,
	  V1jPage,
	  V1kPage,
	  V1lPage,
	  V1mPage,
	  V1nPage,
		TabsVPage,
		EnvioinfoPage,
		O2aPage,
		O2bPage,
		O2cPage,
		O2dPage,
		O2ePage,
		O2fPage,
		O2gPage,
		O2hPage,
		TabsOPage,
		E3aPage,
		E3bPage,
		E3cPage,
		E3dPage,
		E3ePage,
		E3fPage,
		E3gPage,
		TabsEPage,
		C4aPage,
		C4bPage,
		C4cPage,
		C4dPage,
		C4ePage,
		C4fPage,
		C4gPage,
		C4hPage,
		C4iPage,
		C4jPage,
		C4kPage,
		TabsCPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicStorageModule.forRoot(),
		IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		ListadoPage,
		M1aPage,
		M1bPage,
		M1cPage,
		M1dPage,
		M1ePage,
		M1fPage,
		M1gPage,
		M1hPage,
		TabsPage,
		V1aPage,
		V1bPage,
		V1cPage,
		V1dPage,
		V1ePage,
		V1fPage,
		V1gPage,
		V1hPage,
		V1iPage,
		V1jPage,
		V1kPage,
		V1lPage,
		V1mPage,
		V1nPage,
		TabsVPage,
		EnvioinfoPage,
		O2aPage,
		O2bPage,
		O2cPage,
		O2dPage,
		O2ePage,
		O2fPage,
		O2gPage,
		O2hPage,
		TabsOPage,
		E3aPage,
		E3bPage,
		E3cPage,
		E3dPage,
		E3ePage,
		E3fPage,
		E3gPage,
		TabsEPage,
		C4aPage,
		C4bPage,
		C4cPage,
		C4dPage,
		C4ePage,
		C4fPage,
		C4gPage,
		C4hPage,
		C4iPage,
		C4jPage,
		C4kPage,
		TabsCPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		DatabaseProvider,
	  Validar,
		SQLitePorter,
		SQLite,
		DatePipe
	]
})
export class AppModule { }
