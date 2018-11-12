import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { HomePage } from '../home/home';
import { HuacasPage } from '../huacas/huacas';
import { TandasPage } from '../tandas/tandas';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HuacasPage;
  tab3Root = TandasPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
