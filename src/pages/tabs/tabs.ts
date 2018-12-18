import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { HomePage } from '../home/home';
import { HuacasPage } from '../huacas/huacas';
import { TandasPage } from '../tandas/tandas';
import { SettingsPage } from '../settings/settings';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HuacasPage;
  tab3Root = TandasPage;
  tab4Root = SettingsPage;

  constructor(public statusBar:StatusBar) {

  }
  ionViewDidLoad(){
    this.statusBar.styleDefault();
    this.statusBar.overlaysWebView(false);
  }
}
