import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; //FontAwesome
import { CookieService } from 'ngx-cookie-service'; //Cookie Service
import { NgxSpinnerModule } from "ngx-spinner"; //Ngx Spinner
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Animations Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoryComponent } from './category/category.component';
import { CompanyComponent } from './company/company.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MapComponent } from './map/map.component';
import { ButtonAddProductComponent } from './product/button-add-product/button-add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    LandingPageComponent,
    CategoryComponent,
    CompanyComponent,
    ProfileComponent,
    RegisterComponent,
    ProductComponent,
    CheckoutComponent,
    MapComponent,
    ButtonAddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
