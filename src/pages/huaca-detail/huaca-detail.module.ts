import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HuacaDetailPage } from './huaca-detail';

@NgModule({
  declarations: [
    HuacaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HuacaDetailPage),
  ],
})
export class HuacaDetailPageModule {}
