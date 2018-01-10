import { Product } from "../product-list/product";
import { Component,OnInit } from "@angular/core";
import { ProductService } from "../product-list/product.service";
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn  } from '@angular/forms';
import { Router } from "@angular/router";
import { Country } from "../country";

function ratingRange(min: number, max: number): ValidatorFn {
    return  (c: AbstractControl): {[key: string]: boolean} | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        };
        return null;
    };
}
@Component({
selector:'product-create',
templateUrl:'./product-create.component.html'
})
export class ProductCreateComponent implements OnInit  {
    productForm: FormGroup;
    product:Product=new Product();
    errorMessage: any;
    selectedCountry:Country={id:1,name:"Ind"};
    countries:Country[]=[
    {id:1,name:"Ind"},
    {id:2,name:"US"},
    {id:3,name:"UK"}
];
constructor(private productService:ProductService,private router:Router,private fb: FormBuilder){
}

ngOnInit(): void {
    this.productForm = this.fb.group({
        country:'Ind',
        productIdVar:'',
        productNameVar:'',
        productPriceVar:'',
        mfgVar:'',
        imgHeightVar:'',
        rating: ['', ratingRange(1, 5)]
    });
}

createProduct(id:number,name: string,price:number,mfg:Date,rating:number,
imageUrl:string,imageHeight:number,imageWidth:number,categoryId:number,country:number):void {
    this.product=new Product();
    this.product.id=id;
    this.product.name=name;
    this.product.price=price;
    this.product.mfg=mfg;
    this.product.rating=rating;
    this.product.imageUrl=imageUrl;
    this.product.imageHeight=imageHeight;
    this.product.imageWidth=imageWidth;
    this.product.categoryId=categoryId;
    this.product.country=country;
    this.productService.create
    (this.product).subscribe(() => this.onSaveComplete(),
    (error: any) => this.errorMessage = <any>error);
}
onSaveComplete(): void {       
    this.router.navigate(['/products']);
}
}


