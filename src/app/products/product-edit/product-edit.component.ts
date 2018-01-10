import { Product } from "../product-list/product";
import { ProductService } from "../product-list/product.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
@Component({
    selector:'edit-product',
    templateUrl:'./product-edit.component.html'
})
export class ProductEditComponent {
    errorMessage: any;
    private id:number;
    product:Product;
    constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private router:Router){
        this.id=this.activatedRoute.snapshot.params['id'];
        this.getProduct(this.id);
    }
    getProduct(id: number): void {  
        this.productService.getProduct(id).subscribe( 
          (product: Product) => this.product=product,
          (error: any) => this.errorMessage = <any>error
        );    }
    saveProduct():void{
        this.productService.updateProduct(this.product)
        .subscribe(()=>this.router.navigate(['/products']),
        (error:any)=>this.errorMessage=error);    }
    deleteProduct(){
        this.productService.deleteProduct(this.id)
        .subscribe(
            (message)=>this.router.navigate(['/products']),
            (error)=>this.errorMessage=error        );    }
    cancel(){
        this.router.navigate(['/products']);
    }
}