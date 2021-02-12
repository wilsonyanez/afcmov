import { Component } from '@angular/core';
import { M1aPage } from '../m1a/m1a';
import { M1bPage } from '../m1b/m1b';
import { M1cPage } from '../m1c/m1c';
import { M1dPage } from '../m1d/m1d';
import { M1ePage } from '../m1e/m1e';
import { M1fPage } from '../m1f/m1f';
import { M1gPage } from '../m1g/m1g';
import { M1hPage } from '../m1h/m1h';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1aRoot = M1aPage;
  tab1bRoot = M1bPage;
  tab1cRoot = M1cPage;
  tab1dRoot = M1dPage;
  tab1eRoot = M1ePage;
  tab1fRoot = M1fPage;
  tab1gRoot = M1gPage;
  tab1hRoot = M1hPage;

  constructor( ) {

  }

}

