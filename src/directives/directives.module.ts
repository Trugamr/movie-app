import { NgModule } from '@angular/core';
import { HidebackbuttonDirective } from './hidebackbutton/hidebackbutton';
import { HidebackbuttontwoDirective } from './hidebackbuttontwo/hidebackbuttontwo';
@NgModule({
	declarations: [HidebackbuttonDirective,
    HidebackbuttontwoDirective],
	imports: [],
	exports: [HidebackbuttonDirective,
    HidebackbuttontwoDirective]
})
export class DirectivesModule {}
