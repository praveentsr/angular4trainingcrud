import { Component } from '@angular/core';
import { Product } from './product';
import { Category } from './category';
import { ProductService } from './product.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'product-lit',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
    errorMessage: any;
    //productService:ProductService;
    //constructor(_productService:ProductService){
      //  this.productService=_productService;
    //}
    constructor(private productService:ProductService){
    }
    getProducts(){
        this.productService.getProducts()
        .subscribe(products => this.products = products,
        error =>this.errorMessage = <any>error);
    }
    getCategories(){
        this.productService.getCategories()
        .subscribe(categories => this.categories = categories,
        error =>this.errorMessage = <any>error);
    }
    showImage:boolean=false;
    toggleImage(){
        this.showImage=!this.showImage;
    }
    ngOnInit(): void {
        this.getProducts();
        this.getCategories();
    }
products:Product[];
categories:Category[];
selectedCategory:Category=new Category(1,"stationary");
}