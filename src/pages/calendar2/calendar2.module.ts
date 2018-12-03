import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Calendar2Page } from './calendar2';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  declarations: [
    Calendar2Page,
  ],
  imports: [
    IonicPageModule.forChild(Calendar2Page),
    CalendarModule
  ],
})
export class Calendar2PageModule {}
 