import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';
import { HidebackbuttontwoDirective } from '../../directives/hidebackbuttontwo/hidebackbuttontwo';


@NgModule({
  declarations: [
    DetailsPage,
    HidebackbuttontwoDirective
  ],
  imports: [
    IonicPageModule.forChild(DetailsPage),
  ],
})
export class DetailsPageModule {}
