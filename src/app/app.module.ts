import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home/home.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { FacebookModule } from 'ngx-facebook';
import { HeaderToolbarComponent } from "./components/header-toolbar/header-toolbar.component";
import { environment } from "src/environments/environment";
import { AuthModule } from "ng6-md-auth";
import { SlideshowModule } from 'ng-simple-slideshow';
import { SocialLoginModule, AuthServiceConfig, LoginOpt, FacebookLoginProvider } from "angularx-social-login";
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MatDialogModule } from "@angular/material";
import { LoginModalsComponent } from './modals/login-modals/login-modals.component';
import { CartComponent } from './pages/cart/cart.component';

const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true,
  auth_type: 'rerequest'
};


let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2134431583284588", fbLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}
const apiSrvCfg = environment;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ForgotComponent,
    HeaderToolbarComponent,
    ProductDetailComponent,
    LoginModalsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    SlideshowModule,
    SocialLoginModule,
    MatDialogModule,
    FacebookModule.forRoot(),
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    HttpClientModule,
    NgxSpinnerModule,
    AuthModule.forRoot(apiSrvCfg)
  ],
  entryComponents: [
    LoginModalsComponent
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
