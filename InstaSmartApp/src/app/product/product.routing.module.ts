import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductaddComponent } from "../products/productadd.component";
import { ProducteditComponent } from "../products/productedit.component";

const productRoutes: Routes=[
    {path:'addProduct',component:ProductaddComponent},
    {path:'editProduct',component:ProducteditComponent}
];

@NgModule({

    imports:[
        RouterModule.forChild(productRoutes)
    ],
    exports:[RouterModule]
})
export class ProductRoutingModule{

}