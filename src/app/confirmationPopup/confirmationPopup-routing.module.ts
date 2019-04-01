import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationPopupComponent } from './confirmationPopup.component';

const routes: Routes = [
    {
        path: '', component: ConfirmationPopupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfirmationPopupRoutingModule {
}
