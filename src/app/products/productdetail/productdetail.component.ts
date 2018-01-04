import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
product:Product=new Product();
id:number;
name:string;
price:number;
mfg:Date;
imageUrl:string;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { 
    this.id=this.activatedRoute.snapshot.params['id'];
    this.name=this.activatedRoute.snapshot.queryParams['name'];
    this.price=this.activatedRoute.snapshot.queryParams['price'];
    this.mfg=this.activatedRoute.snapshot.queryParams['mfg'];
    this.imageUrl=this.activatedRoute.snapshot.queryParams['imageUrl'];
  }
  backToList(){
    this.router.navigate(['/products']);
  }
  ngOnInit() {
  }

}
