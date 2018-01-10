import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductcategoryPipe } from './product-list/productcategory.pipe';
import { ProductService } from './product-list/product.service';
import { ProductdetailComponent } from './productdetail/productdetail.component'
import { ProductdetailGuard } from './productdetail.guard';
import { ProductRoutingModule } from './product-list/product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
@NgModule({
    imports: [
        ProductRoutingModule,FormsModule,CommonModule,ReactiveFormsModule 
    ],
  declarations: [
    ProductListComponent,
    ProductcategoryPipe,
    ProductdetailComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  providers: [ProductService,ProductdetailGuard]
})
export class ProductModule { }