import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { V1cPage } from './v1c';

@NgModule({
  declarations: [
    V1cPage,
  ],
  imports: [
    IonicPageModule.forChild(V1cPage),
  ],
})

export class V1cPageModule {}
