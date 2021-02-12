import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { M1cPage } from './m1c';

@NgModule({
  declarations: [
    M1cPage,
  ],
  imports: [
    IonicPageModule.forChild(M1cPage),
  ],
})
export class M1cPageModule {}
