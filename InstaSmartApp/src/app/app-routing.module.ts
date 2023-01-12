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

const routes: Routes = [
  {path:'',component:HomepageComponent,pathMatch:'full',
},
  {path:'products',component:ProductlistComponent,
    loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)
},
{path:'products/:id', component: ProductdetailsComponent},
{path:'aboutus',component:AboutUsComponent},
{path:'contactus', component:ContactusComponent},
{path:'cart',component:CartlistComponent,
loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)
},
{path:'payment', component:PaymentComponent},

  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
