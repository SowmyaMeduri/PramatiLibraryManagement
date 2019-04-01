import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnBookListComponent } from './returnBookList.component';

const routes: Routes = [
    {
        path: '', component: ReturnBookListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReturnBookListRoutingModule {
}
