import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import { HidebackbuttonDirective } from '../../directives/hidebackbutton/hidebackbutton';


@NgModule({
  declarations: [
    ResultsPage,
    HidebackbuttonDirective
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
  ],
})
export class ResultsPageModule {}
