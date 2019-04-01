import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatCardModule, MatButtonModule, MatInputModule, MatPaginatorModule, MatIconModule, MatTableModule, MatSortModule,
    MatCheckboxModule, MatNativeDateModule, MatGridListModule, MatFormFieldModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import{TokenInterceptor} from '../app/shared/services/tokenInterceptor';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';


// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
	      provider: new GoogleLoginProvider('861838322935-t0jmng797o11apa7o8qaek5bjo5aa3ak.apps.googleusercontent.com')
        }
      ],
  );
  return config;
}


// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        MatCardModule, MatButtonModule, MatIconModule, MatSortModule, MatFormFieldModule, MatDatepickerModule,
    MatInputModule, BrowserAnimationsModule, MatPaginatorModule, MatTableModule, MatCheckboxModule,
    HttpClientModule, MatRadioModule, MatNativeDateModule, MatGridListModule, MatDialogModule, MatSelectModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule, SocialLoginModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }, {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
      }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
