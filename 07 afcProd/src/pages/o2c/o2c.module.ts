import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { O2cPage } from './o2c';

@NgModule({
  declarations: [
    O2cPage,
  ],
  imports: [
    IonicPageModule.forChild(O2cPage),
  ],
})
export class O2cPageModule {}
