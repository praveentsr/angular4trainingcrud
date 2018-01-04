import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    ProductModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'**',component:HomeComponent},
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { };