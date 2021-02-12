import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvioinfoPage } from './envioinfo';

@NgModule({
  declarations: [
    EnvioinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EnvioinfoPage),
  ],
})
export class EnvioinfoPageModule {}
