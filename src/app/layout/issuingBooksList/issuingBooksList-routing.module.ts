import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuingBooksListComponent } from './issuingBooksList.component';

const routes: Routes = [
    {
        path: '', component: IssuingBooksListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IssuingBooksListRoutingModule {
}
