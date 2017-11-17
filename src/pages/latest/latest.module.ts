import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatestPage } from './latest';

@NgModule({
  declarations: [
    LatestPage,
  ],
  imports: [
    IonicPageModule.forChild(LatestPage),
  ],
  exports: [
    LatestPage
  ]
})
export class LatestPageModule {}
