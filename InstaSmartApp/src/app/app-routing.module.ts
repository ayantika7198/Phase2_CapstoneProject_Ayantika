import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartlistComponent } from './cart/cartlist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './home/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductdetailsComponent } from './products/productdetails.component';
import { ProductlistComponent } from './products/productlist.component';
import { AuthGuard } from './users/authguard.service';
import { LoginComponent } from './users/login.component';

const routes: Routes = [
  {path:'',component:HomepageComponent,pathMatch:'full',
},
  {path:'products',component:ProductlistComponent,
  canActivate:[AuthGuard],

    loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)
},
{path:'products/:id', component: ProductdetailsComponent},
{path:'aboutus',component:AboutUsComponent},
{path:'contactus', component:ContactusComponent},
{path:'cart',component:CartlistComponent,
canActivate:[AuthGuard],
loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)
},
{path:'payment', component:PaymentComponent},
{path:'login', component:LoginComponent},

  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
