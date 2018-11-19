import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateHuacaPage } from './create-huaca';

@NgModule({
  declarations: [
    CreateHuacaPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateHuacaPage),
  ],
})
export class CreateHuacaPageModule {}
