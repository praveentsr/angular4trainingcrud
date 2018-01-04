import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SlicedemoComponent } from './slicedemo/slicedemo.component';
import { FormsModule } from '@angular/forms';
import { ProductcategoryPipe } from './products/product-list/productcategory.pipe';
import { ProductService } from './products/product-list/product.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './products/productdetail/productdetail.component'
import { ProductdetailGuard } from './products/productdetail.guard';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    // EmployeeComponent,
    // ProductListComponent,
    // SlicedemoComponent,
    // ProductcategoryPipe,
    HomeComponent
    // ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {path:'products',component:ProductListComponent},
    //   {path:'product/:id',canActivate:[ProductdetailGuard],component:ProductdetailComponent},
    //   {path:'employee',component:EmployeeComponent},
    //   {path:'slicedemo',component:SlicedemoComponent},
    //   {path:'',component:HomeComponent},
    //   {path:'**',component:HomeComponent},
    // ])
  ],
  providers: [ProductService,ProductdetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
