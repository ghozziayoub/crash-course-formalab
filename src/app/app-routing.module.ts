import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "",
    component: HomeComponent
  },

  {
    path: "register",
    component: RegisterComponent
  },

  {
    path: "cart",
    component: CartComponent
  },

  {
    path: "about-us",
    component: AboutUsComponent
  },

  {
    path: "contact",
    component: ContactComponent
  },

  {
    path: "dashboard",
    component: DashboardComponent
  },

  {
    path: "category-list",
    component: CategoryListComponent
  },

  {
    path: "category-add",
    component: CategoryAddComponent
  },

  {
    path: "product-list",
    component: ProductListComponent
  },

  {
    path: "product-add",
    component: ProductAddComponent
  },

  {
    path: "test",
    component: TestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
