import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotComponent } from "./pages/forgot/forgot.component";
import { AuthGuardService } from "ng6-md-auth";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { CartComponent } from "./pages/cart/cart.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot", component: ForgotComponent },
  { path: "product-detail", component: ProductDetailComponent },
  { path: "cart", component: CartComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
