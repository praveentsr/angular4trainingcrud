import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component'
import { ProductdetailGuard } from '../productdetail.guard';
import { ProductService} from './product.service'
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
@NgModule({
  imports: [
    HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forChild([
      {path:'newproduct',component:ProductCreateComponent},
      {path:'editproduct/:id',component:ProductEditComponent},
      {path:'products',component:ProductListComponent},
      {path:'product/:id',canActivate:[ProductdetailGuard],component:ProductdetailComponent},
    ])
  ],
  providers:[],
  exports: [ RouterModule ]
})
export class ProductRoutingModule { };
