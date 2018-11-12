import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TandasPage } from './tandas';

@NgModule({
  declarations: [
    TandasPage,
  ],
  imports: [
    IonicPageModule.forChild(TandasPage),
  ],
})
export class TandasPageModule {}
