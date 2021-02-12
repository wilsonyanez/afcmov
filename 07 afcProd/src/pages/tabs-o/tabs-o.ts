import { Component } from '@angular/core';

import { O2aPage } from '../o2a/o2a';
import { O2bPage } from '../o2b/o2b';
import { O2cPage } from '../o2c/o2c';
import { O2dPage } from '../o2d/o2d';
import { O2ePage } from '../o2e/o2e';
import { O2fPage } from '../o2f/o2f';
import { O2gPage } from '../o2g/o2g';
import { O2hPage } from '../o2h/o2h';

/**
 * Generated class for the TabsOPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  templateUrl: 'tabs-o.html',
})
export class TabsOPage {

  tabO2aRoot = O2aPage;
  tabO2bRoot = O2bPage;
  tabO2cRoot = O2cPage;
  tabO2dRoot = O2dPage;
  tabO2eRoot = O2ePage;
  tabO2fRoot = O2fPage;
  tabO2gRoot = O2gPage;
  tabO2hRoot = O2hPage;

  constructor( ) {

  }

}
