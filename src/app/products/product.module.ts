import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductcategoryPipe } from './product-list/productcategory.pipe';
import { ProductService } from './product-list/product.service';
import { ProductdetailComponent } from './productdetail/productdetail.component'
import { ProductdetailGuard } from './productdetail.guard';
import { ProductRoutingModule } from './product-list/product-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        ProductRoutingModule,FormsModule,CommonModule
    ],
  declarations: [
    ProductListComponent,
    ProductcategoryPipe,
    ProductdetailComponent
  ],
  providers: [ProductService,ProductdetailGuard]
})
export class ProductModule { }