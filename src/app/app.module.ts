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
import { CreateHuacaPageModule } from '../pages/create-huaca/create-huaca.module';
import { BaseMethodsProvider } from '../providers/base-methods/base-methods';
import { HuacasPageModule } from '../pages/huacas/huacas.module';
import { HuacaDetailPageModule } from '../pages/huaca-detail/huaca-detail.module';
import { LoginPageModule } from '../pages/login/login.module';
import { LoaderToastProvider } from '../providers/loader-toast/loader-toast';
import { HttpProvider } from '../providers/http/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '../../node_modules/@ionic-native/http';
import { Calendar2PageModule } from '../pages/calendar2/calendar2.module';
import { CalendarModule } from "ion2-calendar";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TandasPage,
    
    SettingsPage,
    HomePage,
    TabsPage,
    CalendarPage
  ],
  imports: [
    CalendarModule,
    Calendar2PageModule,
    LoginPageModule,
    HuacaDetailPageModule,
    CreateHuacaPageModule,
    HuacasPageModule,
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TandasPage,
  
    SettingsPage,
    HomePage,
    TabsPage,
    CalendarPage
  ],
  providers: [
    LoaderToastProvider,
    HttpProvider,
    HttpClientModule,    
    HTTP,
        
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseMethodsProvider,
    LoaderToastProvider 
  ]
})
export class AppModule {}
