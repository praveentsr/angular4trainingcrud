import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productcategory'
})
export class ProductcategoryPipe implements PipeTransform {

  transform(products: Product[], categoryId: number): Product[] {
    return categoryId==null?products:products.filter(p=>p.categoryId==categoryId);
  }

}
