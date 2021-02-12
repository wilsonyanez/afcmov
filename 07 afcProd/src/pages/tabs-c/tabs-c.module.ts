import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsCPage } from './tabs-c';

@NgModule({
  declarations: [
    TabsCPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsCPage),
  ],
})
export class TabsCPageModule {}
