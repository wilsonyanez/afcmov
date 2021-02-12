import { Component } from '@angular/core';
import { E3aPage } from '../e3a/e3a';
import { E3bPage } from '../e3b/e3b';
import { E3cPage } from '../e3c/e3c';
import { E3dPage } from '../e3d/e3d';
import { E3ePage } from '../e3e/e3e';
import { E3fPage } from '../e3f/e3f';
import { E3gPage } from '../e3g/e3g';


/**
 * Generated class for the TabsEPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'tabs-e.html',
})
export class TabsEPage {

  tabE3aRoot = E3aPage;
  tabE3bRoot = E3bPage;
  tabE3cRoot = E3cPage;
  tabE3dRoot = E3dPage;
  tabE3eRoot = E3ePage;
  tabE3fRoot = E3fPage;
  tabE3gRoot = E3gPage;

  constructor() {
  }
}
