import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'books', loadChildren: './books/books.module#BooksModule' },
            { path: 'user-details', loadChildren: './user-details/user-details.module#UserDetailsModule' },
            { path: 'createbook', loadChildren: './createbook/createbook.module#CreateBookModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'changePassword', loadChildren : './changePassword/changePassword.module#ChangePasswordModule'},
            { path: 'profileDetails', loadChildren : './profileDetails/profileDetails.module#ProfileDetailsModule'},
            { path: 'issuingBooks', loadChildren : './issuingBooksList/issuingBooksList.module#IssuingBooksListModule'},
            { path: 'returnBooks', loadChildren : './returnBookList/returnBookList.module#ReturnBookListModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
