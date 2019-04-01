import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ConfirmationPopupRoutingModule } from './confirmationPopup-routing.module';
import { ConfirmationPopupComponent } from './confirmationPopup.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ConfirmationPopupRoutingModule
  ],
  /// declarations: [ConfirmationPopupComponent]
})
export class ConfirmationPopupModule { }
