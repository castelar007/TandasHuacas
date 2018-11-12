import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarPage } from '../pages/calendar/calendar';
import { TandasPage } from '../pages/tandas/tandas';
import { HuacasPage } from '../pages/huacas/huacas';
import { SettingsPage } from '../pages/settings/settings';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TandasPage,
    HuacasPage,
    SettingsPage,
    HomePage,
    TabsPage,
    CalendarPage
  ],
  imports: [
    
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TandasPage,
    HuacasPage,
    SettingsPage,
    HomePage,
    TabsPage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
