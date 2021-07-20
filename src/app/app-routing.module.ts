import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoryComponent } from './category/category.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: CategoryComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
